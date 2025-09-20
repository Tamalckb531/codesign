import CodeEditor from "@/components/CodeEditor";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className=" max-h-screen flex flex-col items-center justify-start pb-24 px-4 max-sm:px-0">
      <CodeEditor />
      <Dock />
    </main>
  );
}
