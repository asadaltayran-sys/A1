"""A CrewAI agent that researches the A1 (Villa Aralia) project.

Run:
    export OPENAI_API_KEY=sk-...                 # or another provider
    python agents/research_a1.py                 # defaults to repo root
    python agents/research_a1.py /path/to/repo   # or point elsewhere

Output: prints a research brief and writes it to agents/research_brief.md.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

from crewai import Agent, Crew, Process, Task
from crewai.tools import BaseTool
from pydantic import Field


REPO_ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent

TEXT_SUFFIXES = {".md", ".txt", ".tsx", ".ts", ".js", ".jsx", ".json", ".toml", ".yaml", ".yml", ".py", ".css", ".html"}
IGNORED_DIRS = {".git", "node_modules", ".venv", "__pycache__", ".next", "dist", "build", "renders"}


class RepoTreeTool(BaseTool):
    name: str = "repo_tree"
    description: str = (
        "List every text-like file under the repository, one per line. "
        "Call this FIRST to discover what's in the project. Takes no arguments."
    )
    root: Path = Field(default=REPO_ROOT)

    def _run(self) -> str:
        lines: list[str] = []
        for path in sorted(self.root.rglob("*")):
            if any(part in IGNORED_DIRS for part in path.parts):
                continue
            if not path.is_file():
                continue
            rel = path.relative_to(self.root)
            lines.append(str(rel))
        return "\n".join(lines) if lines else "(empty repository)"


class RepoReadTool(BaseTool):
    name: str = "repo_read"
    description: str = (
        "Read one file from the repository. Argument: `path` — a repo-relative path "
        "returned by repo_tree (e.g. 'villa/DESIGN.md'). Returns the file's text, "
        "truncated to 20k characters."
    )
    root: Path = Field(default=REPO_ROOT)

    def _run(self, path: str) -> str:
        target = (self.root / path).resolve()
        try:
            target.relative_to(self.root)
        except ValueError:
            return f"ERROR: path escapes repo root: {path}"
        if not target.is_file():
            return f"ERROR: not a file: {path}"
        if target.suffix.lower() not in TEXT_SUFFIXES:
            return f"ERROR: not a text file ({target.suffix}): {path}"
        text = target.read_text(encoding="utf-8", errors="replace")
        if len(text) > 20_000:
            text = text[:20_000] + "\n... [truncated]"
        return text


def build_crew() -> Crew:
    tree_tool = RepoTreeTool()
    read_tool = RepoReadTool()

    researcher = Agent(
        role="A1 Repository Researcher",
        goal=(
            "Produce a faithful, evidence-backed research brief on the A1 project by "
            "reading the repository's own files. Never invent facts."
        ),
        backstory=(
            "You are a meticulous technical analyst. You start by mapping the repo with "
            "repo_tree, then read the highest-signal files (design docs, READMEs, source "
            "entry points) with repo_read. You cite the file path for every claim."
        ),
        tools=[tree_tool, read_tool],
        allow_delegation=False,
        verbose=True,
    )

    research_task = Task(
        description=(
            "Investigate the A1 project living at {repo_root} and write a research brief.\n\n"
            "Steps:\n"
            "1. Call repo_tree to see every file.\n"
            "2. Read the design docs, READMEs, and any source entry points that look load-bearing.\n"
            "3. Synthesize your findings.\n\n"
            "The brief MUST cover:\n"
            "  • What the project is (one-paragraph summary).\n"
            "  • Its structure (top-level folders and what each holds).\n"
            "  • The key documents and what each specifies (cite `path:section` for each claim).\n"
            "  • The technical stack in use.\n"
            "  • The intended workflow / next steps described in the docs.\n"
            "  • Anything that looks like a placeholder, TODO, or gap.\n\n"
            "Cite every factual claim with the file path it came from. If a claim isn't "
            "grounded in a file you read, drop it."
        ),
        expected_output=(
            "A Markdown research brief with the sections listed above. Every non-trivial "
            "claim carries an inline citation like `(villa/DESIGN.md)`."
        ),
        agent=researcher,
    )

    return Crew(
        agents=[researcher],
        tasks=[research_task],
        process=Process.sequential,
        verbose=True,
    )


def main() -> int:
    if not os.getenv("OPENAI_API_KEY") and not os.getenv("ANTHROPIC_API_KEY"):
        print(
            "ERROR: no LLM credentials found. Set OPENAI_API_KEY (default) or configure "
            "another provider via CrewAI's LLM class before running.",
            file=sys.stderr,
        )
        return 1

    crew = build_crew()
    result = crew.kickoff(inputs={"repo_root": str(REPO_ROOT)})

    brief_path = Path(__file__).resolve().parent / "research_brief.md"
    brief_path.write_text(str(result), encoding="utf-8")
    print("\n" + "=" * 60)
    print(f"Wrote {brief_path.relative_to(REPO_ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
