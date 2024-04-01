import Clinic1 from "../../assets/medicalclinic(1).svg";
import Clinic2 from "../../assets/clinic.svg";
import Image from "next/image";

export default function ServiceLocations() {
  type ServiceLocation = {
    id: number;
    name: string;
    image?: any;
    address?: string;
  };
  const serviceLocations: ServiceLocation[] = [
    {
      id: 1,
      name: "Medical Clinic",
      image: Clinic1,
      address:
        "Rua L10, Sala 5, Edifício Amazônia, Setor Interlagos, Paraíso do Tocantins",
    },
    {
      id: 2,
      name: "Health Clinic",
      image: Clinic2,
      address: "Rua L10, Sala 5, Edifício Amazônia,  Interlagos, Palmas",
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <b className="text-base">Locais de Atendimento</b>
      <div className="">
        <section className="flex flex-wrap gap-6 ">
          {serviceLocations.map((servicelocation) => (
            <div
              key={servicelocation.id}
              className=" flex justify-between gap-3 max-w-[387px] "
            >
              <Image src={servicelocation.image} alt="" height={101} />
              <div className="flex flex-col gap-1 max-w-[270px]">
                <b className="text-gray-800 text-sm ">{servicelocation.name}</b>
                <span className="text-gray-800 text-xs">
                  {servicelocation.address}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
