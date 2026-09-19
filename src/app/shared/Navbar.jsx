import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-[#02040b]/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-[88px] max-w-[1450px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <span className="absolute inset-0 blur-md bg-cyan-400/40" />

            <span className="relative text-4xl font-black tracking-[-0.15em] text-cyan-400">
              RK
            </span>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link relative px-1 py-3 text-[15px] font-medium transition-all duration-300 ${index === 0
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
                }`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400 shadow-[0_0_12px_#00e5ff]" />
              )}
            </a>
          ))}
        </div>

        {/* CV Button */}
        <a
          href="/resume.pdf"
          download
          className="group relative hidden overflow-hidden rounded-xl border border-cyan-400/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] sm:block"
        >
          <span className="absolute inset-0 -translate-x-full bg-cyan-400/10 transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative">
            Download CV
            <span className="ml-2 text-cyan-400">
              ↓
            </span>
          </span>
        </a>

        {/* Mobile button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/30 text-cyan-400 lg:hidden">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;