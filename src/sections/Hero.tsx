import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div
      id="pocetna"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration={33}
          shouldSpin
          spinDuration={5}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration={36}
          shouldSpin
          spinDuration={5}
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration={39}
          shouldSpin
          spinDuration={5}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={-30}
          shouldOrbit
          orbitDuration={82}
          shouldSpin
          spinDuration={8}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration={45}
          shouldSpin
          spinDuration={8}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={48}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={51}
          shouldSpin
          spinDuration={5}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={54}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={57}
          shouldSpin
          spinDuration={10}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container z-10 relative">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Čovjek iza laptopa"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">Dostupan za saradnju</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Elegantna rješenja za složene zahtjeve
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              Dizajniram i izrađujem brze, funkcionalne web aplikacije i web
              sajtove. Spreman sam za nove projekte. Javite se!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#projekti">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:border-white/30 transition duration-300">
                <span className="font-semibold">Pogledajte Moj Rad</span>
                <ArrowDown className="size-4" />
              </button>
            </a>

            <a href="#kontakt">
              <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 hover:text-gray-800 transition duration-300">
                <span>👋</span>
                <span className="font-semibold">Kontaktirajte Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
