export type Exhibition = {
  title: string;
  venue: string;
  city: string;
  year: number;
};

export type Work = {
  title: string;
  year: number;
  medium: string;
  /** CSS gradient or image URL */
  imageStyle: string;
};

export type Artist = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  nationality: string;
  countryCode: string;
  genres: string[];
  isEmerging: boolean;
  bio: string;
  exhibitions: Exhibition[];
  works: Work[];
};
