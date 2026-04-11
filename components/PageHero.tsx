type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
