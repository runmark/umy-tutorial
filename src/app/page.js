import Link from "next/link";

export default function Home() {
  return (
    <div className="text-7xl">
      Hello World
      <Link href="/about" className="text-2xl">AboutPage</Link>
    </div>
  );
}
