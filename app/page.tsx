"use client";

import Logo from "@/app/ui/kathasabha-logo";
import StoryGenerator from "@/app/ui/StoryGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6 justify-center items-center text-orangePastel bg-orange p-4">
      <Logo />
      <p className="text-8xl">KathaSabha</p>
      <p className="text-xl">Regional panchatantra stories unleashed</p>
      {/* Add the generated story here */}
      <StoryGenerator />
    </main>
  );
}
