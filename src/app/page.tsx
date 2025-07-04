"use client";
import Head from "next/head";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
// import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"sr" | "en">("sr");
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div>
        <Header lang={lang} />
        <HeroSection lang={lang} onSetLang={setLang} />
        <ProjectsSection lang={lang} />
        <TapeSection lang={lang} />
        {/* <TestimonialsSection /> */}
        <AboutSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
}
