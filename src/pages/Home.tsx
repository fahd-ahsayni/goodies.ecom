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
        <NewArrival />
        <section className="h-screen"></section>
    </>
  )
}
