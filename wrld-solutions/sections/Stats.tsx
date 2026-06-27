import Reveal from "@/components/Reveal";

import {
  Bot,
  Workflow,
  Database,
  ShieldCheck,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Bot,
      value: "24/7",
      label: "AI Agent Availability",
    },
    {
      icon: Workflow,
      value: "∞",
      label: "Workflow Automations",
    },
    {
      icon: Database,
      value: "ERP",
      label: "Enterprise Systems",
    },
    {
      icon: ShieldCheck,
      value: "Secure",
      label: "Cyber Protection",
    },
  ];

  return (
    <Reveal>
      <section className="py-24 bg-gradient-to-b from-slate-950 via-[#081120] to-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-500 uppercase tracking-widest text-sm">
              WHY WRLD SOLUTIONS
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Technology That Scales
            </h2>

            <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
              We combine software engineering,
              AI automation and cloud technologies
              to help organizations operate smarter.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                  group
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  text-center
                  hover:border-blue-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon
                      size={30}
                      className="text-blue-500"
                    />
                  </div>

                  <h3
                    className="
                    text-5xl
                    font-bold
                    text-white
                    mt-6
                    "
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-4 text-slate-400">
                    {stat.label}
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