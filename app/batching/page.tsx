"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function Batching() {
  console.count("Rendering");
  const [counter, setCounter] = useState(0);

  function subtract() {
    setCounter(counter - 1);
    setCounter(counter - 1);
  }

  function add() {
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        Batching
      </h1>
      <section>
        <h2 className="font-mono text-2xl font-bold text-center text-white pt-40 pb-10">
          Counter:{" "}
          <span className="text-3xl underline underline-offset-4">
            {counter}
          </span>
        </h2>
        <div className="flex justify-center gap-4">
          <Button onClick={subtract}>-</Button>
          <Button onClick={add}>+</Button>
        </div>
      </section>
    </main>
  );
}
