import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const Footer = ({ lang = "sr" }: { lang?: "sr" | "en" }) => {
  const text = "© 2025 Mladen Vrećo";
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center">
          <div>
            <Image src={logo} alt="logo" className="w-28 mb-3" />
          </div>
          <div className="text-white/40">{text}</div>
        </div>
      </div>
    </footer>
  );
};
