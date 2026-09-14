import Link from "next/link";

export default function AboutPage() {
  const name = "Hello About";
  return (
    <div>
      <h1>이 페이지는 app/about/page.tsx입니다.</h1>
      <p>{name}</p>

      <Link href="/"> Home으로 이동하기 </Link>
    </div>
  );
}
