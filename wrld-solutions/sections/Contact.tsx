import Reveal from "@/components/Reveal";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Reveal>
      <section className="py-24 bg-gradient-to-b from-[#081120] via-[#0B1730] to-[#081120]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-blue-500 uppercase tracking-widest text-sm">
            LET'S BUILD SOMETHING GREAT
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Get In Touch
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl mx-auto text-lg">
            Whether you need software development,
            AI agents, workflow automation,
            ERP systems or mobile applications,
            WRLD SOLUTIONS is ready to help transform
            your organization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">

            <div
              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              items-center
              justify-center
              gap-4
              hover:border-blue-500
              transition-all
              duration-300
              "
            >
              <Mail
                size={28}
                className="text-blue-500"
              />

              <span className="text-white text-lg">
                wrldsolutions08@gmail.com
              </span>
            </div>

            <div
              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              items-center
              justify-center
              gap-4
              hover:border-blue-500
              transition-all
              duration-300
              "
            >
              <Phone
                size={28}
                className="text-blue-500"
              />

              <span className="text-white text-lg">
                +254 796 652 622
              </span>
            </div>

          </div>

          <button
            className="
            mt-12
            bg-blue-600
            hover:bg-blue-500
            text-white
            px-8
            py-4
            rounded-xl
            inline-flex
            items-center
            gap-3
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
            shadow-blue-500/30
            "
          >
            Start Your Project
            <ArrowRight size={20} />
          </button>

        </div>

      </section>
    </Reveal>
  );
}