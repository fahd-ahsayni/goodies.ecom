import flayer from "../assets/flayer.webp"

export default function AdSection() {
  return (
    <section className="w-screen lg:px-20 md:px-10 px-2.5 lg:pt-20 pt-8 flex flex-col items-center justify-center">
      <div className="w-5/6 lg:h-[400px] h-52 rounded-xl shadow-md overflow-hidden">
       <img src={flayer} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
