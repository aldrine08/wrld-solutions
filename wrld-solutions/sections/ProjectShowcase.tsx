import Reveal from "@/components/Reveal";
import {
  Users,
  Building2,
  Bot,
  Workflow,
  Smartphone,
} from "lucide-react";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "HRMS Platform",
      icon: Users,
      description:
        "Employee management, payroll processing, leave tracking, attendance and recruitment automation.",
      tag: "Human Resources",
    },

    {
      title: "Enterprise ERP",
      icon: Building2,
      description:
        "Integrated finance, procurement, inventory, operations and reporting systems.",
      tag: "Enterprise Systems",
    },

    {
      title: "AI Customer Agent",
      icon: Bot,
      description:
        "24/7 intelligent support agents for websites, WhatsApp and customer service operations.",
      tag: "Artificial Intelligence",
    },

    {
      title: "Workflow Automation",
      icon: Workflow,
      description:
        "Business process automation using n8n, APIs, Zapier and custom integrations.",
      tag: "Automation",
    },

    {
      title: "Mobile Applications",
      icon: Smartphone,
      description:
        "Android and iOS applications designed for modern organizations and field teams.",
      tag: "Mobile Development",
    },
  ];

  return (
    <Reveal>
      <section
        id="projects"
        className="
        py-28
        bg-gradient-to-b
        from-[#081120]
        via-[#0b1730]
        to-[#081120]
        text-white
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span
              className="
              text-blue-400
              uppercase
              tracking-[0.3em]
              text-sm
              "
            >
              Portfolio Showcase
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Solutions We Build
            </h2>

            <p
              className="
              mt-6
              text-slate-400
              max-w-3xl
              mx-auto
              "
            >
              From enterprise software to AI-powered automation,
              WRLD SOLUTIONS delivers technology that transforms
              operations and drives growth.
            </p>

          </div>

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-20
            "
          >
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:-translate-y-3
                  hover:border-blue-500/50
                  hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]
                  transition-all
                  duration-500
                  "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon
                      size={28}
                      className="
                      text-blue-400
                      "
                    />
                  </div>

                  <span
                    className="
                    inline-block
                    mt-6
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-blue-500/10
                    text-blue-300
                    border
                    border-blue-500/20
                    "
                  >
                    {project.tag}
                  </span>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-5
                    group-hover:text-blue-400
                    transition
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    text-slate-400
                    mt-4
                    leading-relaxed
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                    absolute
                    -right-10
                    -top-10
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
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </Reveal>
  );
}