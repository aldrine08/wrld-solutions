import Reveal from "@/components/Reveal";



export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "Custom HRMS, ERP, CRM, Inventory and School Management Systems.",
    },
    {
      title: "AI Agents",
      description:
        "Customer support, voice assistants and intelligent business agents.",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks using n8n, Zapier and API integrations.",
    },
    {
      title: "Mobile Applications",
      description:
        "Android and iOS applications built for modern organizations.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions for reliability, performance and growth.",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect systems, applications and organizational data.",
    },
  ];

  return (
    <Reveal>
  <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          What We Do
        </h2>

        <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
          We help organizations transform operations through software,
          AI and intelligent automation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  </Reveal>
);
}