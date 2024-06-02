"use client";

import Editor from "@/components/Editor/Editor";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center p-5">
      <Editor onChange={(e) => console.log(e)} value="" />
    </main>
  );
}
