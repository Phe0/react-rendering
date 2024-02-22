import Card from "@/components/Card";
import Link from "next/link";

const examples = [
  {
    title: "Simple Rendering",
    description: "This is a basic example of how rendering works!",
    href: "/simple-rendering",
  },
  {
    title: "Batching",
    description: "How to use multiple setStates in a single function!",
    href: "/batching",
  },
  {
    title: "Identical state",
    description: "What happens if we set the same state multiple times?",
    href: "/identical-state",
  },
  {
    title: "Multiple states",
    description: "What happens if we update multiple states at once?",
    href: "/multiple-states",
  },
  {
    title: "Child re-rendering",
    description: "Does the child component re-render when the parent does?",
    href: "/child-re-rendering",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        React Rendering
      </h1>
      <p className="font-mono text-white text-center text-xl">
        This is a simple application built to show some examples of how React
        Rendering works!
      </p>
      <section>
        <h2 className="font-mono text-4xl font-bold text-center text-white pt-20 pb-10">
          Examples
        </h2>
        <ul className="px-10 pb-10 grid gap-6 grid-cols-auto-fit-350 justify-center">
          {examples.map(({ title, description, href }) => (
            <Card
              key={title}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
