import Reveal from "@/components/Reveal";

import {
  Search,
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

export default function ClientJourney() {
  const journey = [
    {
      title: "Discovery",
      icon: Search,
      description:
        "Understanding your organization, challenges and objectives.",
    },

    {
      title: "Consultation",
      icon: MessageSquare,
      description:
        "Discussing requirements, workflows and possible solutions.",
    },

    {
      title: "Design",
      icon: PenTool,
      description:
        "Creating the architecture, interfaces and implementation plan.",
    },

    {
      title: "Development",
      icon: Code2,
      description:
        "Building software, AI agents and automation systems.",
    },

    {
      title: "Deployment",
      icon: Rocket,
      description:
        "Launching securely into production environments.",
    },

    {
      title: "Support",
      icon: Headphones,
      description:
        "Continuous maintenance, improvements and technical support.",
    },
  ];

  return (
    <Reveal>
      <section
        className="
        py-28
        bg-gradient-to-b
        from-[#081120]
        via-[#0b1730]
        to-[#081120]
        text-white
        relative
        overflow-hidden
        "
      >
        {/* Background Glow */}

        <div
          className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          bg-blue-500/10
          rounded-full
          blur-3xl
          "
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center">

            <span
              className="
              uppercase
              tracking-[0.3em]
              text-blue-400
              text-sm
              "
            >
              Client Journey
            </span>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              mt-4
              "
            >
              How We Work With You
            </h2>

            <p
              className="
              text-slate-400
              mt-6
              max-w-3xl
              mx-auto
              "
            >
              Every successful project follows a structured journey
              designed to ensure clarity, quality and long-term success.
            </p>

          </div>

          {/* Timeline */}

          <div className="mt-24">

            <div
              className="
              hidden
              lg:block
              absolute
              left-1/2
              top-[310px]
              h-[520px]
              w-1
              bg-gradient-to-b
              from-blue-500
              via-cyan-400
              to-blue-500
              "
            />

            <div className="space-y-12">

              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className={`
                    flex
                    items-center
                    gap-8
                    ${
                      index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                    `}
                  >
                    <div className="flex-1">

                      <div
                        className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-xl
                        rounded-3xl
                        p-8
                        hover:border-blue-500/40
                        hover:-translate-y-2
                        transition-all
                        duration-500
                        "
                      >
                        <h3 className="text-3xl font-bold">
                          {step.title}
                        </h3>

                        <p className="text-slate-400 mt-4">
                          {step.description}
                        </p>
                      </div>

                    </div>

                    <div
                      className="
                      w-20
                      h-20
                      rounded-full
                      bg-blue-500/20
                      border
                      border-blue-500/30
                      flex
                      items-center
                      justify-center
                      shrink-0
                      "
                    >
                      <Icon
                        size={34}
                        className="text-blue-400"
                      />
                    </div>

                    <div className="flex-1 hidden lg:block" />

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}