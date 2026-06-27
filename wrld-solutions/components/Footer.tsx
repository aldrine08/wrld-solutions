import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050b16] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                w-10
                h-10
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-400
                flex
                items-center
                justify-center
                text-white
                font-bold
                "
              >
                W
              </div>

              <div>
                <h3 className="text-white font-bold">
                  WRLD SOLUTIONS
                </h3>

                <p className="text-xs text-slate-500">
                  Software • AI • Automation
                </p>
              </div>

            </div>

            <p className="text-slate-400 mt-6 leading-relaxed">
              Transforming organizations through
              enterprise software, AI agents,
              workflow automation and digital
              innovation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-white font-semibold">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 mt-6">

              <a href="#services" className="text-slate-400 hover:text-blue-400 transition">
                Services
              </a>

              <a href="#solutions" className="text-slate-400 hover:text-blue-400 transition">
                Solutions
              </a>

              <a href="#industries" className="text-slate-400 hover:text-blue-400 transition">
                Industries
              </a>

              <a href="#technologies" className="text-slate-400 hover:text-blue-400 transition">
                Technologies
              </a>

              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="text-white font-semibold">
              Services
            </h4>

            <div className="flex flex-col gap-3 mt-6">

              <span className="text-slate-400">
                Software Development
              </span>

              <span className="text-slate-400">
                AI Agents
              </span>

              <span className="text-slate-400">
                Workflow Automation
              </span>

              <span className="text-slate-400">
                Mobile Applications
              </span>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h4 className="text-white font-semibold">
              Stay Updated
            </h4>

            <p className="text-slate-400 mt-4">
              Get updates on software, AI and
              automation insights.
            </p>

            <div className="mt-6 flex">

              <input
                type="email"
                placeholder="Your email"
                className="
                flex-1
                px-4
                py-3
                bg-white/5
                border
                border-white/10
                rounded-l-xl
                text-white
                outline-none
                "
              />

              <button
                className="
                px-4
                bg-blue-600
                rounded-r-xl
                hover:bg-blue-500
                transition
                "
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* Contact Bar */}

        <div
          className="
          mt-16
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-6
          "
        >

          <div className="flex flex-wrap gap-6">

            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={16} />
              wrldsolutions08@gmail.com
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={16} />
              +254 796 652 622
            </div>

          </div>

          <div className="flex gap-4"></div>

        </div>

        {/* Copyright */}

        <div className="mt-8 text-center text-slate-500 text-sm">
          © 2026 WRLD SOLUTIONS. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}