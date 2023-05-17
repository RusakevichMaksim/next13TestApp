import Image from "next/image";
import Link from "next/link";
import { SlugSelector } from "../components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SlugSelector />
      </div>
    </main>
  );
}
