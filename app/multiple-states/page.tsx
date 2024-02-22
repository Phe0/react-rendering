"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function MultipleStates() {
  console.count("Rendering");
  const [linear, setLinear] = useState(1);
  const [exponential, setExponential] = useState(1);

  function handleClick() {
    setLinear(linear + 1);
    setExponential(exponential * 2);

    console.log({
      linear,
      exponential,
    });
  }

  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        Multiple States
      </h1>
      <section>
        <h2 className="font-mono text-2xl font-bold text-center text-white pt-40 pb-10">
          Linear:{" "}
          <span className="text-3xl underline underline-offset-4">
            {linear}
          </span>
        </h2>
        <h2 className="font-mono text-2xl font-bold text-center text-white pb-10">
          Exponential:{" "}
          <span className="text-3xl underline underline-offset-4">
            {exponential}
          </span>
        </h2>
        <div className="flex justify-center gap-4">
          <Button onClick={handleClick}>do stuff</Button>
        </div>
      </section>
    </main>
  );
}
