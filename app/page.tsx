"use client";
import Link from "next/link";
import { Button } from "@/components/retroui/Button";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-7xl">{"Sue's World Tour"}</h1>
      <div className="h-screen flex justify-center items-center">
        <Link href="/gallery">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}