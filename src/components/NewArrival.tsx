import SectionHeader from "./global/SectionHeader";

export default function NewArrival() {
  return (
    <section className="w-screen lg:px-20 md:px-10 px-2.5 lg:pt-20 pt-8">
      <SectionHeader subtitle="Featured" title="New Arrival" />
      <article className="grid grid-cols-4 grid-rows-2 w-full h-screen gap-8 px-10">
        <div className="bg-black col-span-2 row-span-2"></div>
        <div className="bg-black col-span-2 row-span-1"></div>
        <div className="bg-black col-span-1 row-span-1"></div>
        <div className="bg-black col-span-1 row-span-1"></div>
      </article>
    </section>
  );
}
