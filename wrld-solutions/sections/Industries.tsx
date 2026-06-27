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
  <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Industries We Serve
        </h2>

        <p className="text-center text-slate-300 mt-4 max-w-3xl mx-auto">
          We build digital solutions that adapt to different industries and operational environments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-10 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">
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