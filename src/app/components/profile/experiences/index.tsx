export default function Experiences() {
  type Experience = {
    id: number;
    name: string;
    local: string;
    duration?: string;
  };
  const experiences: Experience[] = [
    {
      id: 1,
      name: "Neurocirurgião",
      local: "Albert Einstein",
      duration: "(2009-2024)",
    },
    {
      id: 2,
      name: "Acompanhamneto clínico",
      local: "Sírio Libanês",
      duration: "(2017-2019)",
    },
    {
      id: 3,
      name: "Professor de Neurologia",
      local: "USP",
      duration: "(2010-2017)",
    },
    {
      id: 4,
      name: "Residência em neurocirurgia",
      local: "Hospital Dom Orione",
      duration: "(2007-2009)",
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <b className="text-base">Experiências</b>
      <div className="">
        <section className="flex flex-wrap gap-6 ">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="w-full flex gap-2 justify-between flex-wrap "
            >
              <div>
                <b className="text-gray-800 text-sm ">{experience.name}</b>
                <span className="text-gray-800 text-sm">
                  {experience.duration}
                </span>
              </div>
              <div className="min-w-[300px]">
                <span className="text-gray-800 text-xs">
                  {experience.local}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
