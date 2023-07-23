import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Loc from "@/components/Loc";
import Image from "next/image";
// import { Link } from "react-scroll";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Loc />

      <Footer />
    </main>
  );
}
