import ProductCard from "./global/ProductCard";
import SectionHeader from "./global/SectionHeader";

export default function ProductSection() {
  return (
    <section className="w-screen lg:px-20 md:px-10 px-2.5 lg:pt-20 pt-8">
      <SectionHeader subtitle="Today's" title="Flash Sales" />
      <article className="grid grid-cols-4 w-full gap-x-4 px-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </article>
    </section>
  );
}
