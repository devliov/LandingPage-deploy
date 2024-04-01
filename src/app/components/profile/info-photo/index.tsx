import Image from "next/image";
import ilustration from "../../../assets/Medico.jpg";
import Instagram from "../../../assets/Socialinstagram.svg";

type ProfileInfos = {
  id: number;
  kind: string;
  info: string;
};

const profileInfos: ProfileInfos[] = [
  {
    id: 1,
    kind: "Dr. Leonardo Borges",
    info: "Urologista",
  },
  {
    id: 2,
    kind: "Endereço",
    info: "Hospital Albert Einstein",
  },
  {
    id: 3,
    kind: "Contatos",
    info: "(11)91111-1111",
  },
  {
    id: 4,
    kind: "Email",
    info: "mailto:eli.sousa.2002@gmail.com",
  },
  {
    id: 5,
    kind: "Site",
    info: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 6,
    kind: "Redes Sociais",
    info: "https://www.instagram.com/the.eli.oliver/",
  },
];

export default function PhotoAndSubtitle() {
  let infos = {
    name: "Aline Alcantara",
    specialty: "Nutrologia",
    photo: ilustration,
  };

  const isLink = (info: string) => {
    return info.startsWith("http") || info.startsWith("mailto:");
  };

  const isPhoneNumber = (info: string) => {
    return /^\(\d{2}\)\d{4,5}-\d{4}$/.test(info);
  };

  const getSocialMediaIcon = (info: string) => {
    if (info.includes("www.instagram.com")) {
      return <Image src={Instagram} alt="" />;
    }
    return null;
  };

  return (
    <section className="flex w-full flex-col justify-center items-center gap-2  bg-white rounded-lg ">
      <div className="rounded-lg">
        <div className="rounded-t-lg relative z-0">
          <Image
            className="rounded-t-lg"
            src={infos.photo}
            alt="Foto do profissional"
            height={500}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full p-4 mt-[-100px] sm:mt-0 relative z-10 bg-white rounded-b-lg">
        {/* PROFILE INFOS */}
        {profileInfos.map((info) => (
          <div key={info.id} className="flex flex-col flex-shrink-0 text-start">
            <b className="text-base">{info.kind}</b>
            {isLink(info.info) ? (
              <a
                className="text-xs  text-gray-800 "
                href={info.info}
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.kind === "Redes Sociais"
                  ? getSocialMediaIcon(info.info)
                  : info.info}
              </a>
            ) : isPhoneNumber(info.info) ? (
              <a className="text-xs text-gray-800" href={`tel:${info.info}`}>
                {info.info}
              </a>
            ) : (
              <p className="text-xs text-gray-800">{info.info}</p>
            )}
            {info.kind === "Redes Sociais" ? (
              ""
            ) : (
              <hr className="w-full mt-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
