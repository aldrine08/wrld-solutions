export default function Transformation() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          How We Transform Organizations
        </h2>

        <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto">
          We help organizations eliminate inefficiencies, automate repetitive
          processes and build intelligent digital systems.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-600">
              Challenges
            </h3>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Manual Processes</li>
              <li>Disconnected Systems</li>
              <li>Human Bottlenecks</li>
              <li>Slow Reporting</li>
              <li>Data Silos</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-blue-600">
              WRLD SOLUTIONS
            </h3>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Custom Software</li>
              <li>AI Agents</li>
              <li>Workflow Automation</li>
              <li>Mobile Applications</li>
              <li>Cloud Infrastructure</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-600">
              Results
            </h3>

            <ul className="mt-6 space-y-3 text-slate-700">
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
  );
}