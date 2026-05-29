import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  spring,
} from 'remotion';

const FPS = 30;
const W = 1920;
const H = 1080;

type Shot = {
  src: string;
  durationSec: number;
  zoomFrom: number;
  zoomTo: number;
  panX?: [number, number];
  panY?: [number, number];
  label: string;
};

const SHOTS: Shot[] = [
  { src: '01-hero-approach.webp',  durationSec: 4, zoomFrom: 1.00, zoomTo: 1.12, panX: [0, -40],  label: 'Approach' },
  { src: '02-pool-cantilever.webp',durationSec: 5, zoomFrom: 1.08, zoomTo: 1.00, panX: [40, 0],   label: 'Pool & Cantilever' },
  { src: '03-interior-pit.svg',    durationSec: 5, zoomFrom: 1.00, zoomTo: 1.10, panY: [20, -10], label: 'Living' },
  { src: '04-courtyard-olive.svg', durationSec: 4, zoomFrom: 1.10, zoomTo: 1.00, panY: [-15, 0],  label: 'Courtyard' },
  { src: '05-aerial-dusk.svg',     durationSec: 5, zoomFrom: 1.00, zoomTo: 1.15, panX: [0, 30],   label: 'Aerial Dusk' },
  { src: '06-night-reveal.svg',    durationSec: 5, zoomFrom: 1.12, zoomTo: 1.02, panY: [10, -10], label: 'Night' },
];

const CROSSFADE_FRAMES = 18; // 0.6s dissolve
const TOTAL_FRAMES = SHOTS.reduce((s, sh) => s + sh.durationSec * FPS, 0);

function KenBurnsShot({ shot, durationFrames, label, index }: { shot: Shot; durationFrames: number; label: string; index: number }) {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationFrames], [shot.zoomFrom, shot.zoomTo], {
    extrapolateRight: 'clamp',
  });
  const tx = shot.panX
    ? interpolate(frame, [0, durationFrames], shot.panX, { extrapolateRight: 'clamp' })
    : 0;
  const ty = shot.panY
    ? interpolate(frame, [0, durationFrames], shot.panY, { extrapolateRight: 'clamp' })
    : 0;

  const opacityIn = interpolate(frame, [0, CROSSFADE_FRAMES], [0, 1], { extrapolateRight: 'clamp' });
  const opacityOut = interpolate(
    frame,
    [durationFrames - CROSSFADE_FRAMES, durationFrames],
    [1, 0],
    { extrapolateLeft: 'clamp' },
  );
  const opacity = Math.min(opacityIn, opacityOut);

  const labelOpacity = interpolate(frame, [10, 25, durationFrames - 25, durationFrames - 10], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const labelY = interpolate(frame, [10, 30], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ opacity, backgroundColor: '#0a0908' }}>
      <Img
        src={staticFile(`renders/${shot.src}`)}
        style={{
          width: W,
          height: H,
          objectFit: 'cover',
          transform: `scale(${scale}) translate(${tx}px, ${ty}px)`,
          transformOrigin: 'center',
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 96,
          bottom: 96,
          color: '#f5efe6',
          fontFamily: 'Inter, system-ui, sans-serif',
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: 8, opacity: 0.7, textTransform: 'uppercase' }}>
          Shot 0{index + 1}
        </div>
        <div style={{ fontSize: 56, fontWeight: 300, letterSpacing: 2, marginTop: 8 }}>{label}</div>
      </div>
    </AbsoluteFill>
  );
}

function TitleCard() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' });
  const lineWidth = interpolate(frame, [25, 70], [0, 280], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [85, 110], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        opacity: fadeOut,
        background: 'radial-gradient(ellipse at center, #1a1410 0%, #050403 80%)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#f5efe6',
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: 14,
          opacity: subtitleOpacity * 0.7,
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        High Desert · 2026
      </div>
      <div
        style={{
          fontSize: 140,
          fontWeight: 200,
          letterSpacing: 8,
          transform: `translateY(${titleY}px)`,
          opacity: titleProgress,
        }}
      >
        VILLA ARALIA
      </div>
      <div
        style={{
          width: lineWidth,
          height: 1,
          background: '#b8956a',
          marginTop: 32,
        }}
      />
    </AbsoluteFill>
  );
}

function EndCard() {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const lineWidth = interpolate(frame, [15, 60], [0, 400], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: '#050403',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#f5efe6',
        opacity: fadeIn,
      }}
    >
      <div style={{ fontSize: 100, fontWeight: 200, letterSpacing: 12 }}>ARALIA</div>
      <div style={{ width: lineWidth, height: 1, background: '#b8956a', marginTop: 24 }} />
      <div style={{ fontSize: 16, letterSpacing: 8, marginTop: 24, opacity: 0.6, textTransform: 'uppercase' }}>
        An exercise in restraint
      </div>
    </AbsoluteFill>
  );
}

export const Villa: React.FC = () => {
  let cursor = 0;
  const shotSequences = SHOTS.map((shot, i) => {
    const dur = shot.durationSec * FPS;
    const overlap = i === 0 ? 0 : CROSSFADE_FRAMES;
    const from = cursor - overlap;
    const seq = (
      <Sequence key={i} from={Math.max(0, from)} durationInFrames={dur + overlap}>
        <KenBurnsShot shot={shot} durationFrames={dur + overlap} label={shot.label} index={i} />
      </Sequence>
    );
    cursor += dur;
    return seq;
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {shotSequences}
      <Sequence from={0} durationInFrames={120}>
        <TitleCard />
      </Sequence>
      <Sequence from={TOTAL_FRAMES - 75} durationInFrames={120}>
        <EndCard />
      </Sequence>
    </AbsoluteFill>
  );
};

export const VILLA_DURATION_FRAMES = TOTAL_FRAMES;
export const VILLA_FPS = FPS;
export const VILLA_WIDTH = W;
export const VILLA_HEIGHT = H;
