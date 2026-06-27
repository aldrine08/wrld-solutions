import Reveal from "@/components/Reveal";

import {
  Users,
  Building2,
  Handshake,
  GraduationCap,
  Bot,
  Workflow,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "HRMS",
      description:
        "Employee management, payroll, attendance tracking and recruitment automation.",
      icon: Users,
    },
    {
      title: "ERP System",
      description:
        "Integrated finance, procurement, inventory and operational management.",
      icon: Building2,
    },
    {
      title: "CRM Platform",
      description:
        "Manage customer relationships, sales pipelines and support operations.",
      icon: Handshake,
    },
    {
      title: "School Management",
      description:
        "Student records, admissions, academics, examinations and fee management.",
      icon: GraduationCap,
    },
    {
      title: "AI Support Agent",
      description:
        "24/7 intelligent customer support powered by advanced AI technology.",
      icon: Bot,
    },
    {
      title: "Automation Platform",
      description:
        "Automate repetitive business processes using workflows and integrations.",
      icon: Workflow,
    },
  ];

  return (
    <Reveal>
      <section id="solutions" className="py-24 bg-gradient-to-b from-slate-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="text-center">

            <p className="text-blue-600 uppercase tracking-widest text-sm">
              FEATURED SOLUTIONS
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4">
              Built For Modern Organizations
            </h2>

            <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg">
              Our solutions help organizations streamline operations,
              improve productivity and accelerate digital transformation
              through software, AI and automation.
            </p>

          </div>

          {/* Solutions Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  border
                  border-slate-200
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-3
                  hover:border-blue-500
                  transition-all
                  duration-500
                  "
                >
                  {/* Glow Effect */}

                  <div
                    className="
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    bg-blue-500/10
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon
                      size={30}
                      className="
                      text-blue-600
                      group-hover:scale-110
                      transition
                      duration-300
                      "
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-slate-900
                    mt-6
                    group-hover:text-blue-600
                    transition
                    "
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}

                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Learn More */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    mt-6
                    text-blue-600
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                    "
                  >
                    <span className="text-sm font-medium">
                      Learn More
                    </span>

                    <ArrowRight size={16} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </Reveal>
  );
}