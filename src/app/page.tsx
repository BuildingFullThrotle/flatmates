import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-[5px]">
      <h1 className="text-4xl font-bold">Find My Flatmate</h1>
      <p className="font-semibold text-muted-foreground">By BuildingFullThrotle</p>
    </div>
  );
}
