import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-2xl font-semibold text-ink-900">페이지를 찾을 수 없습니다</h1>
      <p className="text-sm text-ink-500">요청한 작가 프로필이 없거나 주소가 잘못되었습니다.</p>
      <Link href="/" className="text-sm font-medium text-ink-800 underline underline-offset-4">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
