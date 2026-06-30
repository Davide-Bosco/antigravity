import { company } from "@/data/company/company";

export default function TrustBadges() {
  return (
    <section className="relative border-y border-black/[0.06] bg-[#F8F9FA] py-14 overflow-hidden">
      <div className="container-wide mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {company.stats.map((stat) => (
            <div key={stat.label} className="group flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-5xl font-black font-mono tracking-tight text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
