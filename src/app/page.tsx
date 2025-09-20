import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" text-5xl flex">
      <Button>Mocks</Button>
      <div className="flex flex-row items-center justify-center text-red-500">
        {" "}
        <p className=" text-red-500">ji</p>
        <p>sadf</p>
        <p>fsd</p>
      </div>
    </main>
  );
}
