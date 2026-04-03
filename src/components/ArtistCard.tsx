import Link from "next/link";
import type { Artist } from "@/types/artist";

type Props = {
  artist: Artist;
};

export function ArtistCard({ artist }: Props) {
  const preview = artist.works[0]?.imageStyle ?? "linear-gradient(135deg, #27272a 0%, #52525b 100%)";

  return (
    <Link
      href={`/artist/${artist.slug}`}
      className="group block animate-fade-in rounded-2xl border border-ink-900/[0.06] bg-white p-1 shadow-sm shadow-ink-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-900/10 hover:shadow-md hover:shadow-ink-900/[0.06]"
    >
      <div
        className="aspect-[4/3] w-full overflow-hidden rounded-xl"
        style={{ background: preview }}
      />
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-ink-900 group-hover:underline decoration-ink-900/20 underline-offset-4">
              {artist.name}
            </h2>
            <p className="mt-0.5 text-sm text-ink-500">{artist.nameEn}</p>
          </div>
          {artist.isEmerging && (
            <span className="shrink-0 rounded-full bg-ink-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              신인
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs text-ink-600">{artist.nationality}</span>
          {artist.genres.slice(0, 2).map((g) => (
            <span key={g} className="rounded-md border border-ink-900/8 bg-transparent px-2 py-0.5 text-xs text-ink-600">
              {g}
            </span>
          ))}
          {artist.genres.length > 2 && (
            <span className="rounded-md px-2 py-0.5 text-xs text-ink-400">+{artist.genres.length - 2}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
