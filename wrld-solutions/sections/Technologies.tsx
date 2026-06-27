"use client";

import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiOpenai,
} from "react-icons/si";

const technologies = [
  { name: "Laravel", icon: SiLaravel },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "n8n", icon: SiReact },
  { name: "Docker", icon: SiDocker },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "OpenAI", icon: SiOpenai },
  
];

export default function Technologies() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#081120] via-[#0B1730] to-[#081120] overflow-hidden">

      <div className="text-center mb-16">

        <p className="text-blue-500 uppercase tracking-widest text-sm">
          Technologies We Use
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Built With Modern Technologies
        </h2>

        <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
          We leverage cutting-edge tools and frameworks to build
          scalable, secure and high-performance digital solutions.
        </p>

      </div>

      <div className="relative">

        <div className="marquee">

          <div className="marquee-content">

            {[...technologies, ...technologies].map(
              (tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-w-[160px]
                      mx-4
                    "
                  >
                    <Icon
  className="
  text-white
  drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
  "
  size={70}
/>

                    <span className="text-white mt-4">
                      {tech.name}
                    </span>
                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}