import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl mb-8 font-bold">
      <h1>Next.js Tutorial</h1>
      <Link href="/client" className="text-2xl btn btn-accent">GET STARTED</Link>
    </div>
  );
}
