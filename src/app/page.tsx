"use client";

import Editor from "@/components/Editor/Editor";
import { useEffect, useState } from "react";

export default function Home() {
  const [savedValue, setSavedValue] = useState("");
  useEffect(() => {
    setSavedValue(localStorage.getItem("value") ?? "");
  }, []);
  return (
    <main className="grid min-h-screen place-items-center p-5">
      <Editor
        onChange={(editorValue) => localStorage.setItem("value", editorValue)}
        value={savedValue}
      />
    </main>
  );
}
