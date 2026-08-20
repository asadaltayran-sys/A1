---
name: frontend-system-design
description: Interview checklist and style guide for designing complex large-scale frontend applications from scratch. Use when the user asks to design, architect, or review a frontend system, prepares for a frontend system design interview, or asks about SPA/MPA/SSR/CSR trade-offs, micro-frontends, state management, i18n, accessibility, performance, security, or CI/CD choices for a web app. Framework-agnostic — covers engineering design, high-level design, and low-level design.
---

# Frontend System Design

A framework-agnostic checklist for architecting large-scale frontend applications and for structuring answers in frontend system-design interviews. Source: devkodeio/frontend-system-design.

## When to use

Trigger this skill when the user:
- Asks to design or review the architecture of a frontend app (dashboard, feed, editor, chat, streaming, etc.).
- Says they're preparing for a frontend system-design interview or mock.
- Asks framework-agnostic questions about SPA vs MPA vs SSR/SSG/CSR, micro-frontends, state management choices, CI/CD, performance budgets, i18n, accessibility, or security posture.
- Wants a checklist to sanity-check a design doc / PRD before review.

Do NOT trigger for a small isolated bug, a single-component styling question, or backend/system-design (distributed systems) questions.

## Workflow

1. **Identify the scope.** Ask, if unclear: is this an interview answer, a real design doc, or a review of an existing design? Interview answers are structured and time-boxed; design docs go deeper on trade-offs.
2. **Frame the three layers.** Always cover, in this order:
   - **Engineering Design** — team, users, compliance, docs, roadmap.
   - **High-Level Design (HLD)** — platform, SPA/MPA/SSR, tech stack, SEO, CI/CD, UX, A/B testing, MVP, backend contract, security, state, i18n, testing, auth, QA.
   - **Low-Level Design (LLD)** — folder layout, mobile-first, component design, forms, storage, API, instrumentation, design system, routing, CSS optimizations, lazy loading, a11y, image optimization, pagination/debouncing/throttling, Core Web Vitals, versioning, unit testing.
3. **Pull the deep checklist** from `references/checklist.md` for whichever HLD/LLD sub-topics matter for the current problem. Cite specific bullets rather than dumping the whole file.
4. **Force trade-offs.** For every choice (SPA vs SSR, REST vs GraphQL, Redux vs local state, monolith vs micro-frontend), state at least one reason to pick it and one to reject it, tied to the constraints in step 1.
5. **Close with NFRs.** Performance budgets (FCP/LCP/CLS/TTI), accessibility (WCAG), security (XSS/CSRF/CSP/CORS), observability (analytics, error logging, monitoring), and rollout (feature flags, canary, versioning).

## Structure for an interview answer

Give this shape unless the user asks otherwise:

1. **Clarify requirements** (2–3 min): scope, users, platforms, must-have vs nice-to-have, scale (QPS, DAU), constraints (offline, SEO, i18n).
2. **High-level architecture** (5–7 min): rendering model, tech stack, module boundaries, data flow, API shape, auth.
3. **Deep dive on 2–3 components** (10–15 min): pick the ones the interviewer signals — usually the data-heavy or real-time part. Sketch state, API calls, caching, error/loading states.
4. **Cross-cutting concerns** (5 min): perf, a11y, security, i18n, instrumentation, testing.
5. **Trade-offs and future work** (2–3 min): what you'd revisit at 10× scale, what you deferred to MVP+1.

## Reference

- `references/checklist.md` — the full engineering / HLD / LLD checklist, verbatim from the source repo, for you to grep when you need to expand a section.

Framework-neutral — do not assume React/Vue/Angular unless the user names one.
