"use client";
import { NextUIProvider, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex h-screen">
        <div className="sidebar">
          <Link href="#" className="text-white">
            Profile
          </Link>
          <Link href="#" className="text-white">
            Data
          </Link>
          <Link href="#" className="text-white">
            Commits
          </Link>
          <Link href="#" className="text-white">
            Settings
          </Link>
        </div>
      </div>
    </NextUIProvider>
  );
}
