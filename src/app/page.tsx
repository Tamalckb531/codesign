import CodeEditor from "@/components/CodeEditor";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pb-24 px-4 max-sm:px-0 bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <Hero />
      <Dock />
      {/* <CodeEditor /> */}
    </main>
  );
}
