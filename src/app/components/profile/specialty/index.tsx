import Arrow from "../../../assets/arrowright.svg";
import Image from "next/image";
export default function Specialty() {
  type Treatment = {
    id: number;
    name: string;
    subtitle: string;
  };
  const treatmnet: Treatment[] = [
    {
      id: 1,
      name: "Emagrecimento",
      subtitle:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod temp.",
    },
    {
      id: 2,
      name: "Nutrologia esportiva",
      subtitle:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod temp.",
    },
    {
      id: 3,
      name: "Diabets",
      subtitle:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod temp.",
    },
    {
      id: 4,
      name: "Displidemia",
      subtitle:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod temp.",
    },
    {
      id: 5,
      name: "Endocrinologia",
      subtitle:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod temp.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <b className="text-base">Especialidades</b>
      <div className="">
        <section className="flex flex-wrap gap-6 ">
          {treatmnet.map((tratament) => (
            <div
              key={tratament.id}
              className="w-[250px] flex gap-2 items-center"
            >
              <Image src={Arrow} alt="" />
              <b className="text-gray-800 text-sm ">{tratament.name}</b>
              {/* <p className="text-gray-800">{tratament.subtitle}</p> */}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
