"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#081120]/80
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
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
              <h2 className="text-white font-bold">
                WRLD SOLUTIONS
              </h2>

              <p className="text-xs text-slate-400">
                Software • AI • Automation
              </p>
            </div>
          </a>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                text-slate-300
                hover:text-blue-400
                transition
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              text-white
              font-medium
              transition
              "
            >
              Get Started
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div
            className="
            lg:hidden
            mt-6
            flex
            flex-col
            gap-4
            pb-4
            "
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                text-slate-300
                hover:text-blue-400
                transition
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="
              bg-blue-600
              text-white
              rounded-xl
              px-4
              py-3
              text-center
              "
            >
              Get Started
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}