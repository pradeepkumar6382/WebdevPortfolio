import { useRef } from "react";
import Contact from "./Contact";
import Mainpage from "./mainpage";
import Philosophy from "./Philosophy";
import Purpose from "./Purpose";
import Shorts from "./Shorts";
import Work from "./work";

const Header = () => {
   const workRef = useRef(null);
  const shortsRef = useRef(null);
  const contactRef = useRef(null);

   const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToShorts = () => shortsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <header className="sticky top-0 z-50 bg-black w-full flex justify-between items-center px-4 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-6 shadow-md">
        {/* Logo + Tagline */}
        <div className="text-white">
          <h1 className="font-bebas text-2xl sm:text-3xl lg:text-4xl tracking-wide">PRADEEP UNCUT</h1>
          <p className="font-bebas text-xs sm:text-sm text-white/30 tracking-[0.6px]">
            FREELANCE VIDEO EDITOR
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 text-white text-sm items-center">
          <button onClick={scrollToWork} className="hover:text-orange-500 transition-colors duration-200 px-2 py-1">
            WORK
          </button>
          <button onClick={scrollToShorts} className="hover:text-orange-500 transition-colors duration-200 px-2 py-1">
            SHORTS
          </button>
          <a href="#" className="hover:text-orange-500 transition-colors duration-200 px-2 py-1">
            CV
          </a>
          <span className="text-white/50">|</span>
          <button
            onClick={scrollToContact}
            className="group flex items-center text-orange-500 transition-all duration-200 px-2 py-1"
          >
            <span className="group-hover:opacity-0 group-hover:animate-flash-fast font-semibold">
              CONTACT ME
            </span>
            <span className="ml-2 w-3 h-3 rounded-full bg-orange-500 group-hover:opacity-0 group-hover:animate-flash-fast" />
          </button>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden gap-4 text-white text-sm items-center">
          <button onClick={scrollToWork} className="hover:text-orange-500 transition-colors duration-200 px-2 py-1">
            WORK
          </button>
          <button onClick={scrollToContact} className="hover:text-orange-500 transition-colors duration-200 px-2 py-1">
            CONTACT
          </button>
        </nav>

        {/* Mobile Navigation */}
        <button
          onClick={scrollToContact}
          className="md:hidden group flex items-center text-orange-500 transition-all duration-200 px-2 py-1"
        >
          <span className="text-sm font-semibold">CONTACT</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-orange-500" />
        </button>
      </header>

      {/* Sections with scroll margin for spacing below sticky header */}
      <Mainpage />

      <div className="scroll-mt-24">
        <Philosophy />
      </div>
      <div ref={workRef} className="scroll-mt-24">
        <Work />
      </div>
      <div ref={shortsRef} className="scroll-mt-24">
        <Shorts />
      </div>
      <div className="scroll-mt-24">
        <Purpose />
      </div>
      <div ref={contactRef} className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
};

export default Header;
