import Image from "next/image";
import { DarkModeToggle } from "@/feature/theme/component/theme-toggle";

export default function HomePage() {
  return (
    <main className="relative p-4 md:p-8 lg:p-16">
      <div className="flex justify-end">
        <DarkModeToggle />
      </div>
      <section className="relative flex flex-col items-center justify-between">
        <div className=" relative h-1/2 flex flex-col items-center">
          <Image
            src="ratel-logo.svg"
            alt="logo"
            height={100}
            width={300}
            className="w-1/2 pt-20"
          />
        </div>
        <div className=" relative h-full w-full flex justify-center items-center p-4 lg:8">
          <p className=" text-lg">Application Links</p>
        </div>
      </section>
    </main>
  );
}
