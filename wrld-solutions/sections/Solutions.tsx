import Reveal from "@/components/Reveal";




export default function Solutions() {
  const solutions = [
    {
      title: "HRMS",
      description:
        "Employee management, payroll, attendance and recruitment.",
    },
    {
      title: "ERP System",
      description:
        "Integrated finance, procurement, inventory and operations.",
    },
    {
      title: "CRM Platform",
      description:
        "Manage customers, sales pipelines and support operations.",
    },
    {
      title: "School Management",
      description:
        "Student records, admissions, academics and fee management.",
    },
    {
      title: "AI Support Agent",
      description:
        "24/7 customer support through AI-powered conversations.",
    },
    {
      title: "Automation Platform",
      description:
        "Automate repetitive business processes using workflows.",
    },
  ];

  return (
    <Reveal>
  <section className="bg-white py-24">        
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-blue-600 text-5xl font-bold text-center">
          Featured Solutions
        </h2>

        <p className="text-dark text-center text-slate-300 mt-4 max-w-3xl mx-auto">
          Purpose-built systems designed to transform organizational
          operations and improve efficiency.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {solutions.map((solution) => (
            <div
              key={solution.title}
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
              <div className="w-14 h-14 rounded-xl bg-blue-600 mb-6"></div>

              <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition">
                {solution.title}
              </h3>

              <p className="text-slate-300 mt-4">
                {solution.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}