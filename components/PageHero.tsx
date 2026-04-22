type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#040714]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,76,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(46,168,255,0.10),transparent_30%)]" />
      <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#6C4CF1]/8 blur-3xl" />
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#2EA8FF]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}