import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="text-2xl btn btn-accent">GET STARTED</Link>
    </div>
  );
}
