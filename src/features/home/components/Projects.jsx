import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     no: "01",
//     title: "E-Commerce",
//     type: "MERN STACK",
//     desc: "Modern full-stack shopping platform with authentication, cart and products.",
//     tech: ["React", "Node", "MongoDB"],
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000",
//   },
//   {
//     no: "02",
//     title: "Student ERP",
//     type: "FULL STACK",
//     desc: "Complete student management system for academic and administrative work.",
//     tech: ["React", "Express", "MongoDB"],
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000",
//   },
//   {
//     no: "03",
//     title: "Portfolio",
//     type: "CREATIVE WEB",
//     desc: "Interactive portfolio with smooth animations and modern visual experiences.",
//     tech: ["React", "GSAP", "Three.js"],
//     image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000",
//   },
// ];

 const Projects=()=> {

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#080808] px-6 text-white md:px-16"
    >
      <div className="project-title mb-16 py-20">
        <p className="flex gap-5 justify-center items-center mb-4 text-lg text-blue-600 tracking-[0.4em]">
          <span className="w-20 h-[0.7px] bg-red-600" ></span>
          PROJECTS
          <span className="w-20 h-[0.7px] bg-red-600" ></span>
        </p>
        <h2 className="text-5xl font-bold md:text-7xl">
          Selected <span className="text-zinc-600">Works.</span>
        </h2>
      </div>
      <div className="projects-grid flex flex-col gap-5">
        <div className="skill-card flex flex-row w-full h-fit card px-10">
            <div className="left h-100 w-1/2">
                <img className="w-full h-full scale-90 hover:scale-100 duration-100 hover:rounded-2xl" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt="Project image"/>
            </div>
            <div className="right px-20 py-1 w-[50%] h-fit">
                <div>
                    <span className="text-sm text-[rgb(120,122,128)]">MERN Stack</span>
                    <h2 className="bg-linear-to-r from-pink-500 0% via-blue-500 50% to-blue-500 100% bg-clip-text text-transparent font-bold text-4xl">E-Commerce</h2>
                    <p className="text-[rgb(146,148,154)] py-3" >Modern full-stack shopping platform with authentication, cart and products.</p>

                    <ol className="grid grid-cols-3 w-full gap-5">
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >React</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Nodejs</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >MongoDB</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Gsap</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Tailwindcss</li>
                    </ol>
                </div>
                <button className="rounded-full mt-10 border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                    View Project <span className="ml-3">↗</span>
                </button>
            </div>
        </div>
        <div className="skill-card flex flex-row w-full h-fit card px-10">
            <div className="left h-100 w-1/2">
                <img className="w-full h-full scale-90 hover:scale-100 duration-100 hover:rounded-2xl" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt="Project image"/>
            </div>
            <div className="right px-20 py-1 w-[50%] h-fit">
                <div>
                    <span className="text-sm text-[rgb(120,122,128)]">MERN Stack</span>
                    <h2 className="bg-linear-to-r from-pink-500 0% via-blue-500 50% to-blue-500 100% bg-clip-text text-transparent font-bold text-4xl">E-Commerce</h2>
                    <p className="text-[rgb(146,148,154)] py-3" >Modern full-stack shopping platform with authentication, cart and products.</p>

                    <ol className="grid grid-cols-3 w-full gap-5">
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >React</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Nodejs</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >MongoDB</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Gsap</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Tailwindcss</li>
                    </ol>
                </div>
                <button className="rounded-full mt-10 border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                    View Project <span className="ml-3">↗</span>
                </button>
            </div>
        </div>
        <div className="skill-card flex flex-row w-full h-fit card px-10">
            <div className="left h-100 w-1/2">
                <img className="w-full h-full scale-90 hover:scale-100 duration-100 hover:rounded-2xl" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt="Project image"/>
            </div>
            <div className="right px-20 py-1 w-[50%] h-fit">
                <div>
                    <span className="text-sm text-[rgb(120,122,128)]">MERN Stack</span>
                    <h2 className="bg-linear-to-r from-pink-500 0% via-blue-500 50% to-blue-500 100% bg-clip-text text-transparent font-bold text-4xl">E-Commerce</h2>
                    <p className="text-[rgb(146,148,154)] py-3" >Modern full-stack shopping platform with authentication, cart and products.</p>

                    <ol className="grid grid-cols-3 w-full gap-5">
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >React</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Nodejs</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >MongoDB</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Gsap</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Tailwindcss</li>
                    </ol>
                </div>
                <button className="rounded-full mt-10 border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                    View Project <span className="ml-3">↗</span>
                </button>
            </div>
        </div>
        <div className="skill-card flex flex-row w-full h-fit card px-10">
            <div className="left h-100 w-1/2">
                <img className="w-full h-full scale-90 hover:scale-100 duration-100 hover:rounded-2xl" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt="Project image"/>
            </div>
            <div className="right px-20 py-1 w-[50%] h-fit">
                <div>
                    <span className="text-sm text-[rgb(120,122,128)]">MERN Stack</span>
                    <h2 className="bg-linear-to-r from-pink-500 0% via-blue-500 50% to-blue-500 100% bg-clip-text text-transparent font-bold text-4xl">E-Commerce</h2>
                    <p className="text-[rgb(146,148,154)] py-3" >Modern full-stack shopping platform with authentication, cart and products.</p>

                    <ol className="grid grid-cols-3 w-full gap-5">
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >React</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Nodejs</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >MongoDB</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Gsap</li>
                        <li className="bg-transparent border border-[rgba(88,87,87,0.98)] px-7 py-1 text-center w-fit rounded-2xl" >Tailwindcss</li>
                    </ol>
                </div>
                <button className="rounded-full mt-10 border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                    View Project <span className="ml-3">↗</span>
                </button>
            </div>
        </div>
      </div>

      {/* <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.no}
            className="project-card group overflow-hidden rounded-4xl border border-white/10 bg-[#111]"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 overflow-hidden md:h-112">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img absolute inset-[-10%] h-[120%] w-[120%] object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-6 top-6 rounded-full bg-black/50 px-4 py-2 text-xs backdrop-blur">
                  {project.no}
                </span>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <p className="text-xs tracking-[0.3em] text-zinc-500">
                    {project.type}
                  </p>
                  <h3 className="mt-5 text-4xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button className="rounded-full border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                    View Project <span className="ml-3">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default Projects