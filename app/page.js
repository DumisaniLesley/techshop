import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
}
