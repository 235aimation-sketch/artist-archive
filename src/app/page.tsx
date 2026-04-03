import { artists } from "@/data/artists";
import { ArtistDirectory } from "@/components/ArtistDirectory";

export default function HomePage() {
  return <ArtistDirectory artists={artists} />;
}
