import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-[#02040b]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-22 max-w-362.5 items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-cyan-400/40 blur-xl transition-all duration-300 group-hover:bg-cyan-400/70" />

            <span className="relative text-4xl font-black tracking-[-0.15em] text-cyan-400">
              RK
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group relative
                rounded-xl px-4 py-2.5
                text-sm font-medium text-gray-400
                transition-all duration-300
                hover:bg-cyan-400/10
                hover:text-cyan-300
              "
            >
              <span className="relative z-10">
                {item.name}
              </span>

              {/* Hover line */}
              <span
                className="
                  absolute bottom-1 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full bg-cyan-400
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  transition-all duration-300
                  group-hover:w-5
                "
              />
            </a>
          ))}
        </div>

        {/* CV Button */}
        <a
          href="/resume.pdf"
          download
          className="
            group relative hidden overflow-hidden
            rounded-xl border border-cyan-400/60
            px-6 py-3
            text-sm font-semibold text-white
            transition-all duration-300
            hover:border-cyan-300
            hover:text-cyan-300
            hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]
            sm:block
          "
        >
          {/* Animated background */}
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-cyan-400/10
              transition-transform duration-500
              group-hover:translate-x-0
            "
          />

          <span className="relative flex items-center gap-2">
            Download CV
            <span className="text-lg text-cyan-400 transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl border border-cyan-400/30
            text-cyan-400
            transition-all duration-300
            hover:border-cyan-400
            hover:bg-cyan-400/10
            hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
            lg:hidden
          "
        >
          <span className="text-xl">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden border-t border-cyan-400/10
          bg-[#02040b]/95 backdrop-blur-xl
          transition-all duration-300 lg:hidden
          ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-2 px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
                rounded-xl px-4 py-3
                text-sm font-medium text-gray-400
                transition-all duration-300
                hover:bg-cyan-400/10
                hover:pl-6
                hover:text-cyan-300
              "
            >
              {item.name}
            </a>
          ))}

          {/* Mobile CV */}
          <a
            href="/resume.pdf"
            download
            className="
              mt-2 rounded-xl
              border border-cyan-400/50
              px-4 py-3
              text-center text-sm font-semibold
              text-cyan-300
              transition-all duration-300
              hover:bg-cyan-400/10
            "
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;