"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function Batching() {
  console.count("Rendering");
  const [counter, setCounter] = useState(0);

  function handleClick() {
    console.count("Button Clicked");
    setCounter(counter);
  }

  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        Identical State
      </h1>
      <section>
        <div className="flex justify-center gap-4">
          <Button onClick={handleClick}>🤨</Button>
        </div>
      </section>
    </main>
  );
}
