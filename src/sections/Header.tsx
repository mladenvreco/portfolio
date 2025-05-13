export const Header = () => {
  return (
    <div className="flex justify-center items-center top-3 fixed w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#pocetna" className="nav-item">
          Početna
        </a>
        <a href="#projekti" className="nav-item">
          Projekti
        </a>
        <a href="#o-meni" className="nav-item">
          O meni
        </a>
        <a
          href="#kontakt"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-grey-900"
        >
          Kontakt
        </a>
      </nav>
    </div>
  );
};
