export const Header = ({ lang = "sr" }: { lang?: "sr" | "en" }) => {
  const nav = {
    sr: {
      home: "Početna",
      projects: "Projekti",
      about: "O meni",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
  };

  return (
    <div className="flex justify-center items-center top-3 fixed w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#pocetna" className="nav-item">
          {nav[lang].home}
        </a>
        <a href="#projekti" className="nav-item">
          {nav[lang].projects}
        </a>
        <a href="#o-meni" className="nav-item">
          {nav[lang].about}
        </a>
        <a
          href="#kontakt"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900"
        >
          {nav[lang].contact}
        </a>
      </nav>
    </div>
  );
};
