"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import GsapIcon from "@/assets/icons/gsap.svg";
import GitIcon from "@/assets/icons/git.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "TailwindCSS", iconType: TailwindIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Typescript", iconType: TypescriptIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "GSAP", iconType: GsapIcon },
  { title: "Git", iconType: GitIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbiesSr = [
  { title: "Košarka", emoji: "🏀", left: "5%", top: "5%" },
  { title: "Planinarenje", emoji: "🥾", left: "50%", top: "5%" },
  { title: "Muzika", emoji: "🎵", left: "10%", top: "35%" },
  { title: "Filmovi", emoji: "🎥", left: "35%", top: "40%" },
  { title: "Skijanje", emoji: "⛷️", left: "70%", top: "45%" },
  { title: "Priroda i Društvo", emoji: "🍻", left: "25%", top: "65%" },
];

const hobbiesEn = [
  { title: "Basketball", emoji: "🏀", left: "5%", top: "5%" },
  { title: "Hiking", emoji: "🥾", left: "50%", top: "5%" },
  { title: "Music", emoji: "🎵", left: "10%", top: "35%" },
  { title: "Movies", emoji: "🎥", left: "35%", top: "40%" },
  { title: "Skiing", emoji: "⛷️", left: "70%", top: "45%" },
  { title: "Friends & Nature", emoji: "🍻", left: "25%", top: "65%" },
];

const aboutText = {
  sr: {
    eyebrow: "O meni",
    title: "Ko stoji iza ekrana",
    description: "Otkrijte čime se bavim i šta me inspiriše.",
    card1Title: (
      <>
        Mladen,
        <br />
        drago mi je.
      </>
    ),
    card1Desc:
      "Kao web developer, fokusiram se na rješavanje dizajnerskih problema, kreiram pametne korisničke interfejse, zamišljam korisne interakcije i razvijam bogata web iskustva i aplikacije.",
    card2Title: "Alati koje koristim",
    card2Desc:
      "Istražite tehnologije i alate koje koristim za kreiranje digitalnih iskustava.",
    card3Title: "Iza linija koda",
    card3Desc: "Kako izgleda moj svijet van ekrana",
  },
  en: {
    eyebrow: "About Me",
    title: "Who's Behind the Screen",
    description: "Discover what I do and what inspires me.",
    card1Title: <>Mladen, nice to meet you</>,
    card1Desc:
      "As a web developer, I enjoy solving design problems, creating intuitive user interfaces, imagining meaningful interactions, and building fast, rich web experiences.",
    card2Title: "Tools I Use",
    card2Desc:
      "A look at the tools I rely on to create smooth, scalable digital products.",
    card3Title: "Behind the Code",
    card3Desc: "What my world looks like off-screen",
  },
};

export const AboutSection = ({ lang = "sr" }: { lang?: "sr" | "en" }) => {
  const constraintRef = useRef(null);
  const t = aboutText[lang];
  const hobbies = lang === "sr" ? hobbiesSr : hobbiesEn;

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title={t.card1Title} description="" />
              <div className="px-6 mx-auto">
                <p>{t.card1Desc}</p>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={t.card2Title}
                description={t.card2Desc}
                className=""
              />
              <div className="">
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-left"
                />
              </div>
              <div className="mt-4">
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={t.card3Title}
                description={t.card3Desc}
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
