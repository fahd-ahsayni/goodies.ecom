import AdSection from "../components/AdSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NewArrival from "../components/NewArrival";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <AdSection />
      <NewArrival />
      <section className="h-screen"></section>
    </>
  );
}
