import Reveal from "@/components/Reveal";
import {
  AlertTriangle,
  Cpu,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function Transformation() {
  return (
    <Reveal>
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-600 uppercase tracking-widest text-sm">
              Digital Transformation
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4">
              How We Transform Organizations
            </h2>

            <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg">
              We help organizations eliminate inefficiencies,
              automate repetitive tasks and build intelligent
              systems that scale with growth.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {/* Challenges */}

            <div
              className="
              bg-white
              border
              border-red-100
              rounded-3xl
              p-10
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertTriangle
                  className="text-red-600"
                  size={30}
                />
              </div>

              <h3 className="text-3xl font-bold text-red-600 mt-6">
                Challenges
              </h3>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>Manual Processes</li>
                <li>Disconnected Systems</li>
                <li>Human Bottlenecks</li>
                <li>Slow Reporting</li>
                <li>Data Silos</li>
              </ul>
            </div>

            {/* WRLD */}

            <div
              className="
              bg-gradient-to-br
              from-blue-600
              to-blue-800
              rounded-3xl
              p-10
              text-white
              shadow-2xl
              scale-105
              relative
              overflow-hidden
              "
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <Cpu size={30} />
              </div>

              <h3 className="text-3xl font-bold mt-6">
                WRLD SOLUTIONS
              </h3>

              <ul className="mt-8 space-y-4">
                <li>Custom Software</li>
                <li>AI Agents</li>
                <li>Workflow Automation</li>
                <li>Mobile Applications</li>
                <li>Cloud Infrastructure</li>
              </ul>

              <div className="mt-8 flex items-center gap-2 text-blue-100">
                <span>Transformation Engine</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Results */}

            <div
              className="
              bg-white
              border
              border-green-100
              rounded-3xl
              p-10
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <TrendingUp
                  className="text-green-600"
                  size={30}
                />
              </div>

              <h3 className="text-3xl font-bold text-green-600 mt-6">
                Results
              </h3>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>Higher Productivity</li>
                <li>Faster Decisions</li>
                <li>Reduced Costs</li>
                <li>Improved Accuracy</li>
                <li>Business Growth</li>
              </ul>
            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}