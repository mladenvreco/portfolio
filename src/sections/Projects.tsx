import rezervacije from "@/assets/images/rezervacije.png";
import xora from "@/assets/images/xora.png";
import cocktails from "@/assets/images/cocktails.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const projectsData = {
  sr: [
    {
      company: "Kampify",
      year: "2025",
      title: "Vođenje i Evidencija Rezervacija",
      results: [
        {
          title:
            "Kompletan sistem za upravljanje rezervacijama sa podrškom za praćenje gostiju, pregled prihoda i planiranje aranžmana.",
        },
        // { title: "Sve rezervacije pregledno na jednom mjestu" },
        // { title: "Pregled prihoda, gostiju i aranžmana" },
      ],
      link: "https://kampifydemo.netlify.app/pocetna",
      image: rezervacije,
    },
    {
      company: "XORA",
      year: "2024",
      title: "XORA SaaS",
      results: [
        {
          title:
            "Xora automatizuje zamorne zadatke pomoću pametnih procesa kako bi povećala produktivnost, istovremeno osiguravajući vrhunsku bezbednost podataka kroz naprednu enkripciju i kontrole privatnosti.",
        },
        // { title: "Povećan domen korisnika za 30%" },
        // { title: "Veći broj korisnika na mobilnim uređajima" },
      ],
      link: "https://demoxora.netlify.app/",
      image: xora,
    },
    {
      company: "Velvet Pour",
      year: "2024",
      title: "Landing Page",
      results: [
        {
          title:
            "Moderan landing page za koktel bar sa mogućnošću online rezervacija i personalizovanim doživljajem noćnog života.",
        },
        // { title: "Rezervacija online, bez poziva." },
        // { title: "Doživi noć po svom ukusu" },
      ],
      link: "https://velvetpour.netlify.app/",
      image: cocktails,
    },
  ],
  en: [
    {
      company: "Rafting Camp",
      year: "2025",
      title: "Booking Management",
      results: [
        {
          title:
            "A full-featured booking management system with support for guest tracking, revenue overview, and arrangement planning.",
        },
        // { title: "All reservations in one place" },
        // { title: "Overview of income, guests, and arrangements" },
      ],
      link: "https://kampifydemo.netlify.app/",
      image: rezervacije,
    },
    {
      company: "XORA",
      year: "2024",
      title: "XORA SaaS",
      results: [
        {
          title:
            "Xora automates tedious tasks with smart processes to boost productivity while ensuring top-level data security through advanced encryption and privacy controls.",
        },
        // { title: "User domain increased by 30%" },
        // { title: "More mobile users" },
      ],
      link: "https://demoxora.netlify.app/",
      image: xora,
    },
    {
      company: "Velvet Pour",
      year: "2024",
      title: "Landing Page",
      results: [
        {
          title:
            "A sleek landing page for a cocktail bar featuring online reservations and a personalized nightlife experience.",
        },
        // { title: "Online reservation, no calls needed." },
        // { title: "Experience the night your way" },
      ],
      link: "https://velvetpour.netlify.app/",
      image: cocktails,
    },
  ],
};

const sectionHeader = {
  sr: {
    eyebrow: "Rezultati u praksi",
    title: "Istaknuti projekti",
    description:
      "Pogledajte moj rad na razvoju i primjeni digitalnih inovacija u projektima",
    demo: "Demo",
  },
  en: {
    eyebrow: "Results in Practice",
    title: "Featured Projects",
    description:
      "See my work in developing and applying digital innovation in projects",
    demo: "Demo",
  },
};

export const ProjectsSection = ({ lang = "sr" }: { lang?: "sr" | "en" }) => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={sectionHeader[lang].eyebrow}
          title={sectionHeader[lang].title}
          description={sectionHeader[lang].description}
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {projectsData[lang].map((project, i) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${i * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-sarif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg transition duration-300 group">
                      <span>{sectionHeader[lang].demo}</span>
                      <ArrowUpRightIcon className="size-4 group-hover:scale-125 transition-transform duration-300" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
