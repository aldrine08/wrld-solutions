import Reveal from "@/components/Reveal";

export default function Industries() {
  const industries = [
    "Logistics",
    "Human Resources",
    "Healthcare",
    "NGOs",
    "Government",
    "Enterprises",
  ];

  return (
    <Reveal>
  <section id="industries" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Industries We Serve
        </h2>

        <p className="text-center text-blue-600 font-bold text-slate-900text-slate-300 mt-4 max-w-3xl mx-auto">
          We build digital solutions that adapt to different industries and operational environments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((industry) => (
            <div
              key={industry}
              className="
bg-white
border
border-slate-200
rounded-2xl
p-8
hover:-translate-y-3
hover:shadow-2xl
hover:border-blue-400
transition-all
duration-300
group
"
            >
              <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                {industry}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}