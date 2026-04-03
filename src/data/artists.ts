import type { Artist } from "@/types/artist";

export const artists: Artist[] = [
  {
    id: "1",
    slug: "kim-minseo",
    name: "김민서",
    nameEn: "Minseo Kim",
    nationality: "대한민국",
    countryCode: "KR",
    genres: ["설치", "미디어"],
    isEmerging: true,
    bio: "서울을 기반으로 활동하는 설치·미디어 작가로, 도시의 빈 공간과 디지털 잔상 사이의 간극을 탐구한다. 최근 작업은 관람자의 움직임에 반응하는 빛과 소리의 레이어로 구성되어 있다.",
    exhibitions: [
      {
        title: "Residual Light",
        venue: "국립현대미술관",
        city: "서울",
        year: 2025,
      },
      {
        title: "Soft Infrastructure",
        venue: "아트선재센터",
        city: "서울",
        year: 2024,
      },
      {
        title: "Emerging Voices",
        venue: "호당 갤러리",
        city: "부산",
        year: 2023,
      },
    ],
    works: [
      {
        title: "Echo Chamber 7",
        year: 2025,
        medium: "LED, 유리, 사운드",
        imageStyle: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      },
      {
        title: "Untitled (Corridor)",
        year: 2024,
        medium: "혼합매체 설치",
        imageStyle: "linear-gradient(145deg, #2d3436 0%, #636e72 100%)",
      },
    ],
  },
  {
    id: "2",
    slug: "yuki-tanaka",
    name: "타나카 유키",
    nameEn: "Yuki Tanaka",
    nationality: "일본",
    countryCode: "JP",
    genres: ["회화", "추상"],
    isEmerging: false,
    bio: "교토와 베를린을 오가며 활동하는 추상화가. 자연 현상의 미세한 리듬을 캔버스 위의 색면과 터치로 번역하며, 동아시아 전통 색채 감각과 유럽 회화 언어를 접합한다.",
    exhibitions: [
      {
        title: "Slow Tide",
        venue: "Peres Projects",
        city: "베를린",
        year: 2024,
      },
      {
        title: "Color as Weather",
        venue: "교토 시립미술관",
        city: "교토",
        year: 2023,
      },
      {
        title: "East-West Abstraction",
        venue: "White Cube",
        city: "런던",
        year: 2022,
      },
    ],
    works: [
      {
        title: "Morning Fog (III)",
        year: 2024,
        medium: "유화, 린넨",
        imageStyle: "linear-gradient(160deg, #dfe6e9 0%, #b2bec3 40%, #636e72 100%)",
      },
      {
        title: "Riverbed",
        year: 2023,
        medium: "아크릴, 캔버스",
        imageStyle: "linear-gradient(180deg, #74b9ff 0%, #0984e3 60%, #2d3436 100%)",
      },
    ],
  },
  {
    id: "3",
    slug: "lena-vogt",
    name: "레나 포그트",
    nameEn: "Lena Vogt",
    nationality: "독일",
    countryCode: "DE",
    genres: ["조각", "개념미술"],
    isEmerging: false,
    bio: "함부르크 출신 조각가로, 산업 재료와 유기적 형태를 결합해 물질의 기억과 노동을 드러낸다. 대형 공공 프로젝트와 갤러리 전시를 병행한다.",
    exhibitions: [
      {
        title: "Heavy Air",
        venue: "Hamburger Bahnhof",
        city: "베를린",
        year: 2025,
      },
      {
        title: "Cast & Memory",
        venue: "Kunsthalle Hamburg",
        city: "함부르크",
        year: 2023,
      },
    ],
    works: [
      {
        title: "Stack (Aluminum)",
        year: 2025,
        medium: "알루미늄, 철",
        imageStyle: "linear-gradient(125deg, #636e72 0%, #2d3436 100%)",
      },
      {
        title: "Fold #12",
        year: 2024,
        medium: "대리석, 스테인리스",
        imageStyle: "linear-gradient(90deg, #ddd 0%, #b2bec3 50%, #636e72 100%)",
      },
    ],
  },
  {
    id: "4",
    slug: "park-jihoon",
    name: "박지훈",
    nameEn: "Jihoon Park",
    nationality: "대한민국",
    countryCode: "KR",
    genres: ["사진", "개념미술"],
    isEmerging: true,
    bio: "야간 도시 풍경과 인공 조명을 주제로 한 사진 작가. 장노출과 디지털 합성을 결합해 시간의 겹침을 시각화한다.",
    exhibitions: [
      {
        title: "Night Atlas",
        venue: "피크닉",
        city: "서울",
        year: 2025,
      },
      {
        title: "New Talents",
        venue: "국제사진페스티벌",
        city: "서울",
        year: 2024,
      },
    ],
    works: [
      {
        title: "Seoul 04:12",
        year: 2025,
        medium: "아카이벌 프린트",
        imageStyle: "linear-gradient(200deg, #1e1e2e 0%, #f39c12 35%, #d35400 100%)",
      },
      {
        title: "Crossing",
        year: 2024,
        medium: "디지털 C-print",
        imageStyle: "linear-gradient(220deg, #2c3e50 0%, #e74c3c 80%)",
      },
    ],
  },
  {
    id: "5",
    slug: "sofia-reyes",
    name: "소피아 레예스",
    nameEn: "Sofía Reyes",
    nationality: "멕시코",
    countryCode: "MX",
    genres: ["회화", "설치"],
    isEmerging: false,
    bio: "멕시코시티 기반의 작가로, 식민 이후의 정체성과 신화적 이미지를 회화와 공간 설치로 탐구한다. 직물 패턴과 벽화 전통에서 형태 어휘를 차용한다.",
    exhibitions: [
      {
        title: "Threads of Return",
        venue: "Museo Tamayo",
        city: "멕시코시티",
        year: 2024,
      },
      {
        title: "Latin American Now",
        venue: "Pérez Art Museum",
        city: "마이애미",
        year: 2023,
      },
    ],
    works: [
      {
        title: "Serpent Garden",
        year: 2024,
        medium: "유화, 직물 혼합",
        imageStyle: "linear-gradient(135deg, #e17055 0%, #d63031 50%, #2d3436 100%)",
      },
      {
        title: "Offering",
        year: 2023,
        medium: "혼합매체, 나무 패널",
        imageStyle: "linear-gradient(90deg, #fdcb6e 0%, #e17055 100%)",
      },
    ],
  },
  {
    id: "6",
    slug: "chen-wei",
    name: "천웨이",
    nameEn: "Chen Wei",
    nationality: "중국",
    countryCode: "CN",
    genres: ["미디어", "개념미술"],
    isEmerging: true,
    bio: "상하이와 상하이 비엔날레를 중심으로 활동하는 미디어 아티스트. 소비 이미지와 도시 광고를 재편집해 초현실적인 영상 조각을 만든다.",
    exhibitions: [
      {
        title: "Signal Drift",
        venue: "Power Station of Art",
        city: "상하이",
        year: 2025,
      },
      {
        title: "Digital Horizons",
        venue: "M+",
        city: "홍콩",
        year: 2024,
      },
    ],
    works: [
      {
        title: "Ad Loop (Extended)",
        year: 2025,
        medium: "싱글채널 영상, 컬러, 사운드",
        imageStyle: "linear-gradient(45deg, #6c5ce7 0%, #a29bfe 50%, #fd79a8 100%)",
      },
      {
        title: "Neon Archive",
        year: 2024,
        medium: "3채널 영상 설치",
        imageStyle: "linear-gradient(180deg, #2d3436 0%, #fd79a8 100%)",
      },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
