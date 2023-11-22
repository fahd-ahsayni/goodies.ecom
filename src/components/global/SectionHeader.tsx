

export default function SectionHeader({subtitle, title}: {subtitle: string; title: string}) {
  return (
    <header className="px-10 mb-6">
      <div>
        <div className="flex items-center justify-start relative h-12 gap-x-4 mb-6">
          <div className="h-full w-6 bg-red-600 rounded-md"></div>
          <h5 className="font-bold text-red-600 text-xl">{subtitle}</h5>
        </div>
        <h2 className="text-5xl font-bold text-gray-950">{title}</h2>
      </div>
      <div></div>
    </header>
  );
}
