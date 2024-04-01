import Image from "next/image";
import logo from "../../assets/MedikarNameLogo.svg";

export default function LogoAndCopyright() {
  return (
    <section className="flex h-36 items-center bg-gray-200 justify-around flex-wrap">
      <div className="flex justify-center items-center">
        <Image
          src={logo}
          alt="medikar logo"
          priority
          style={{
            height: "25px",
          }}
        />
      </div>
      <span className="flex justify-center text-xs md:text-xs">
        Copyrights © 2024 by
        <span className="font-semibold text-greenS300">  Medikar</span>. All
        Rights Reserved.
      </span>
    </section>
  );
}
