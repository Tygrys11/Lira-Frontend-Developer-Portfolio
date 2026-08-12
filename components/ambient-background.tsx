const codeFragments = [
  { text: 'const', top: '12%', left: '6%' },
  { text: '{ }', top: '22%', left: '82%' },
  { text: '</>', top: '48%', left: '4%' },
  { text: 'npm run dev', top: '68%', left: '78%' },
  { text: 'git commit', top: '82%', left: '10%' },
  { text: '01', top: '38%', left: '90%' },
  { text: 'export default', top: '58%', left: '86%' },
  { text: '=> {}', top: '90%', left: '46%' },
]

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(155,77,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(155,77,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)',
        }}
      />

      {/* dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(53,224,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 80% 100%, black 0%, transparent 70%)',
        }}
      />

      {/* ambient glows */}
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-magenta/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-purple/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-purple/10 blur-[130px]" />

      {/* floating code fragments */}
      {codeFragments.map((f) => (
        <span
          key={f.text + f.top}
          className="absolute select-none font-mono text-xs tracking-widest text-foreground/[0.045] md:text-sm"
          style={{ top: f.top, left: f.left }}
        >
          {f.text}
        </span>
      ))}
    </div>
  )
}
