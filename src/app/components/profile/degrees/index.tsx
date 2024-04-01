export default function Degrees() {
  type Degree = {
    id: number;
    name: string;
    local: string;
    duration?: string;
  };
  const degrees: Degree[] = [
    {
      id: 1,
      name: "Medicina",
      local: "Universidade Federal de São Paulo - USP",
      duration: "(2002-2028)",
    },
    {
      id: 2,
      name: "Mestrado em Neurologia",
      local: "Harward - USA",
      duration: "(2007-2009)",
    },
    {
      id: 3,
      name: "Doutorado em Neurologia",
      local: "Oxford",
      duration: "(2017-2020)",
    },
    {
      id: 4,
      name: "Professor de Neurologia",
      local: "USP",
      duration: "(2010-2017)",
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <b className="text-base">Graduações</b>
      <div className="">
        <section className="flex flex-wrap gap-6 ">
          {degrees.map((degree) => (
            <div
              key={degree.id}
              className="w-full flex gap-2 justify-between flex-wrap "
            >
              <div>
                <b className="text-gray-800 text-sm text-wrap ">
                  {degree.name}
                </b>
                <span className="text-gray-800 text-sm">{degree.duration}</span>
              </div>
              <div className="min-w-[300px]">
                <span className="text-gray-800 text-xs">{degree.local}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
