import Reveal from "@/components/Reveal";




export default function Stats() {
  return (
    <Reveal>
  <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              24/7
            </h3>
            <p className="mt-2 text-slate-600">
              AI Availability
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              AI
            </h3>
            <p className="mt-2 text-slate-600">
              Intelligent Solutions
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              ERP
            </h3>
            <p className="mt-2 text-slate-600">
              Enterprise Systems
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              n8n
            </h3>
            <p className="mt-2 text-slate-600">
              Automation Workflows
            </p>
          </div>

        </div>

      </div>
    </section>
    </Reveal>
  );
}