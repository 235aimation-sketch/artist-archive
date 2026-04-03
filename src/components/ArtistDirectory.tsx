"use client";

import { useMemo, useState } from "react";
import type { Artist } from "@/types/artist";
import { ArtistCard } from "./ArtistCard";

type Props = {
  artists: Artist[];
};

export function ArtistDirectory({ artists }: Props) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [emerging, setEmerging] = useState<"all" | "yes" | "no">("all");

  const genres = useMemo(() => {
    const s = new Set<string>();
    artists.forEach((a) => a.genres.forEach((g) => s.add(g)));
    return Array.from(s).sort();
  }, [artists]);

  const countries = useMemo(() => {
    const map = new Map<string, string>();
    artists.forEach((a) => map.set(a.countryCode, a.nationality));
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1], "ko"));
  }, [artists]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return artists.filter((a) => {
      if (genre !== "all" && !a.genres.includes(genre)) return false;
      if (country !== "all" && a.countryCode !== country) return false;
      if (emerging === "yes" && !a.isEmerging) return false;
      if (emerging === "no" && a.isEmerging) return false;
      if (q) {
        const hay = `${a.name} ${a.nameEn}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [artists, query, genre, country, emerging]);

  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            작가 아카이브
          </h1>
          <p className="mt-2 max-w-xl text-ink-500">
            장르·국가·신인 작가로 걸러보고, 이름으로 검색하세요.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="block w-full max-w-md">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">
              검색
            </span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" aria-hidden>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="이름 또는 영문명…"
                className="w-full rounded-xl border border-ink-900/10 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 outline-none ring-ink-900/0 transition-shadow focus:border-ink-900/20 focus:ring-2 focus:ring-ink-900/5"
              />
            </div>
          </label>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <label className="block min-w-[140px]">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">장르</span>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none ring-ink-900/0 transition-shadow focus:border-ink-900/20 focus:ring-2 focus:ring-ink-900/5"
              >
                <option value="all">전체</option>
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>
            <label className="block min-w-[140px]">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">국가</span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none ring-ink-900/0 transition-shadow focus:border-ink-900/20 focus:ring-2 focus:ring-ink-900/5"
              >
                <option value="all">전체</option>
                {countries.map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <div className="block min-w-[160px]">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">신인 작가</span>
              <div className="inline-flex rounded-xl border border-ink-900/10 bg-stone-100/80 p-0.5">
                {(
                  [
                    { key: "all" as const, label: "전체" },
                    { key: "yes" as const, label: "신인만" },
                    { key: "no" as const, label: "기성만" },
                  ]
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setEmerging(key)}
                    className={`rounded-[10px] px-3 py-2 text-xs font-medium transition-colors ${
                      emerging === key
                        ? "bg-white text-ink-900 shadow-sm"
                        : "text-ink-500 hover:text-ink-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-ink-400">
          {filtered.length}명 표시 · 전체 {artists.length}명
        </p>
      </section>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink-900/15 bg-white/50 py-16 text-center">
          <p className="font-medium text-ink-600">조건에 맞는 작가가 없습니다.</p>
          <p className="mt-1 text-sm text-ink-400">검색어나 필터를 바꿔 보세요.</p>
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((artist, i) => (
            <li key={artist.id} style={{ animationDelay: `${i * 40}ms` }}>
              <ArtistCard artist={artist} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
