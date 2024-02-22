"use client";

import Button from "@/components/Button";
import HandWave from "@/components/HandWave";
import { useState } from "react";

const names = [
  "Féo",
  "Gabriel",
  "João",
  "Boe",
  "Matheus",
  "Bruno",
  "Flávia",
  "Dani",
  "Leo",
];

export default function ChildRerendering() {
  console.count("Rendering");
  const [nameIndex, setNameIndex] = useState(0);

  function handleClick() {
    setNameIndex(nameIndex + 1 === names.length ? 0 : nameIndex + 1);
  }

  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        Child re-rendering
      </h1>
      <section>
        <h2 className="font-mono text-2xl font-bold text-center text-white pt-40 pb-10">
          Hello{" "}
          <span className="text-3xl underline underline-offset-4">
            {names[nameIndex]}
          </span>{" "}
          <HandWave />
        </h2>
        <div className="flex justify-center gap-4">
          <Button onClick={handleClick}>Greetings!</Button>
        </div>
      </section>
    </main>
  );
}
