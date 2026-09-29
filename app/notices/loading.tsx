// products/loading.tsx와 같은 규칙입니다 — 파일 이름만으로
// Suspense fallback이 자동 연결됩니다.
export default function NoticesLoading() {
  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <div className="mb-8 h-7 w-40 animate-pulse rounded bg-black/6 dark:bg-white/8" />
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-lg bg-black/4 dark:bg-white/6"
          />
        ))}
      </div>
    </div>
  );
}
