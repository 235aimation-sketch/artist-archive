import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtistBySlug } from "@/data/artists";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return { title: "작가를 찾을 수 없음" };
  return {
    title: `${artist.name} — Archive`,
    description: artist.bio.slice(0, 120),
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  return (
    <article className="animate-fade-in space-y-12 pb-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-500 transition-colors hover:text-ink-800"
      >
        <span aria-hidden>←</span> 목록으로
      </Link>

      <header className="border-b border-ink-900/8 pb-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{artist.name}</h1>
            <p className="mt-1 text-lg text-ink-500">{artist.nameEn}</p>
          </div>
          {artist.isEmerging && (
            <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              신인 작가
            </span>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-lg bg-stone-100 px-3 py-1 text-sm text-ink-700">{artist.nationality}</span>
          {artist.genres.map((g) => (
            <span key={g} className="rounded-lg border border-ink-900/10 px-3 py-1 text-sm text-ink-600">
              {g}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">바이오</h2>
        <p className="max-w-3xl text-base leading-relaxed text-ink-700">{artist.bio}</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">전시 이력</h2>
        <ul className="divide-y divide-ink-900/8 rounded-2xl border border-ink-900/8 bg-white">
          {artist.exhibitions.map((ex) => (
            <li key={`${ex.title}-${ex.year}`} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div>
                <p className="font-medium text-ink-900">{ex.title}</p>
                <p className="text-sm text-ink-500">
                  {ex.venue} · {ex.city}
                </p>
              </div>
              <time className="shrink-0 text-sm tabular-nums text-ink-400">{ex.year}</time>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">대표작</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {artist.works.map((w) => (
            <li
              key={w.title}
              className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-sm shadow-ink-900/[0.04]"
            >
              <div className="aspect-[4/3] w-full" style={{ background: w.imageStyle }} />
              <div className="p-5">
                <p className="font-medium text-ink-900">{w.title}</p>
                <p className="mt-1 text-sm text-ink-500">
                  {w.year} · {w.medium}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
