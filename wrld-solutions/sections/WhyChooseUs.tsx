import Reveal from "@/components/Reveal";

import {
  Rocket,
  Bot,
  Code2,
  Workflow,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Faster Implementation",
      icon: Rocket,
      description:
        "Rapid development cycles that help organizations deploy solutions faster and achieve results sooner.",
    },

    {
      title: "AI Expertise",
      icon: Bot,
      description:
        "From customer support agents to intelligent business assistants, we design AI solutions that create measurable value.",
    },

    {
      title: "Custom Development",
      icon: Code2,
      description:
        "Every organization is unique. We build systems tailored specifically to your workflows and operational needs.",
    },

    {
      title: "Automation Specialists",
      icon: Workflow,
      description:
        "Reduce manual work and increase efficiency using intelligent workflow automation and integrations.",
    },

    {
      title: "Enterprise Security",
      icon: ShieldCheck,
      description:
        "Secure, scalable and reliable solutions built with modern development and cybersecurity best practices.",
    },

    {
      title: "Ongoing Support",
      icon: Headphones,
      description:
        "We remain your technology partner after deployment through maintenance, optimization and continuous improvement.",
    },
  ];

  return (
    <Reveal>
      <section
        className="
        py-28
        bg-white
        relative
        overflow-hidden
        "
      >
        {/* Background Glow */}

        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
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
              text-blue-600
              text-sm
              "
            >
              Why WRLD Solutions
            </span>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              text-slate-900
              mt-4
              "
            >
              Why Organizations Choose Us
            </h2>

            <p
              className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-600
              "
            >
              We combine software engineering, AI innovation and
              workflow automation expertise to help organizations
              operate smarter, faster and more efficiently.
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
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  hover:-translate-y-3
                  hover:border-blue-500
                  hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                  transition-all
                  duration-500
                  "
                >
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
                      "
                    />
                  </div>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-6
                    text-slate-900
                    group-hover:text-blue-600
                    transition
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-slate-600
                    leading-relaxed
                    "
                  >
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </Reveal>
  );
}