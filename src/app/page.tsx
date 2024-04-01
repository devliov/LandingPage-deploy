"use client";

import dynamic from "next/dynamic";
import Specialty from "@/app/components/profile/specialty";
import Feedbacks from "@/app/components/feedbacks";
import ButtonModal from "../app/components/button-modal";
import About from "@/app/components/profile/info-About";
import GalleryVideo from "@/app/components/media/video";
import GalleryPhoto from "@/app/components/media/photo";
import Assessments from "@/app/components/assessments";
import LogoAndCopyright from "@/app/components/footer";
import Info from "@/app/components/profile/info-photo";
import Experiences from "./components/profile/experiences";
import Degrees from "./components/profile/degrees";
import ServiceLocations from "./components/service-locations";
import ServicesOffered from "./components/services offered";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../app/components/maps"), {
    ssr: false,
  });
  return (
    <>
      {/* HEADER */}
      <section className="z-0 relative">
        <MapWithNoSSR />
      </section>
      {/* HEADER  END*/}

      {/* PROFILE */}
      <main className="flex gap-10 flex-wrap p-6 justify-center mt-[-80px] relative z-10">
        <section className=" max-w-[640px] sm:w-[261px]">
          <Info />
        </section>
        <section className=" flex flex-wrap gap-8 items-start w-[847.5px] min-w-[288px]">
          <div className=" flex flex-wrap flex-row-reverse md:justify-between justify-center w-[847.5px] min-w-[288px] rounded-lg bg-white h-min gap-5 sm:gap-0 items-center p-5 ">
            <Feedbacks />
            <ButtonModal />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <About />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <ServicesOffered />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <Specialty />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <Experiences />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <ServiceLocations />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <Degrees />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <GalleryVideo />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <GalleryPhoto />
          </div>
          <div className=" flex w-[847.5px] min-w-[288px] rounded-lg bg-white p-5 h-min ">
            <Assessments />
          </div>
        </section>
      </main>
      {/* PROFILE END */}

      {/* FOOTER  */}
      <footer>
        <LogoAndCopyright />
      </footer>
    </>
  );
}
