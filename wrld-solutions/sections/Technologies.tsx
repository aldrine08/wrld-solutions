export default function Technologies() {
  const tech = [
    "Laravel",
    "Next.js",
    "React",
    "Node.js",
    "n8n",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "OpenAI",
    "AWS",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tech.map((item) => (
            <div
              key={item}
              className="
                px-6
                py-3
                bg-white
                border
                rounded-xl
                shadow-sm
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}