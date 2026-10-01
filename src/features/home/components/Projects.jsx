import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { FaArrowTrendUp } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
 const Projects=()=> {
      const containerRef=useRef(null);
      const box1Ref=useRef(null);
      const box2Ref=useRef(null);
      const box3Ref=useRef(null);
      const box4Ref=useRef(null);

    useGSAP(()=>{
      const tl= gsap.timeline({
        duration:1,
        scrollTrigger:{
          trigger:containerRef.current,
          start:"top 0%",
          end:"bottom -10%",
          scrub:1,
          toggleActions: "play none none none", 
          pin:true,
        }
      })
      tl.to(box1Ref.current,{
        top:'35%',
      }).to(box2Ref.current,{
        top:'44%',
      }).to(box3Ref.current,{
        top:'53%',
      }).to(box4Ref.current,{
        top:'62%',
      });
    },{scope:containerRef})

  return (
    <section
    ref={containerRef}
      id="projects"
      className="min-h-screen w-full max-w-362 bg-[#080808] px-6 text-white md:px-16"
    >
      <div className="relative project-title mb-16 py-20">
          <p className="flex gap-5 justify-center items-center mb-4 text-lg text-blue-600 tracking-[0.4em]">
            <span className="w-20 h-[0.7px] bg-red-600" ></span>
            PROJECTS
            <span className="w-20 h-[0.7px] bg-red-600" ></span>
          </p>
          <h2 className="text-5xl font-bold md:text-7xl">
            Selected <span className="text-zinc-600">Works.</span>
          </h2>
      </div>
      <div className="project-grid flex items-center justify-center flex-col">
        <div ref={box1Ref} className=" absolute z-1 pointer-events-none bottom-[-50%] flex flex-wrap w-full h-fit px-10 py-1 justify-around bg-black/70">
          <div className="left w-[40%]">
            <img className="w-full" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt=''/>
          </div>
          <div className="right w-[40%]">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-pink-300 to-pink-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">E-commere</h2>
            <p></p>
            <div className="tech-used flex flex-wrap gap-x-10 gap-y-1 py-5">
              <span className="bg-[rgb(28,28,28)] px-5 py-1">tailwind</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">react</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">nodejs</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">devOps</span>
            </div>
            <Link to="/project" className="group pointer-events-auto flex w-fit items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-zinc-100 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]">
                Visit Now <FaArrowTrendUp className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link>
          </div>
        </div>
        <div ref={box2Ref} className="absolute z-2 pointer-events-none bottom-[-500%] flex flex-wrap w-full h-fit px-10 py-1 justify-around bg-black/70">
          <div className="left w-[40%]">
            <img className="w-full" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt=''/>
          </div>
          <div className="right w-[40%]">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-pink-300 to-pink-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">E-commere</h2>
            <p></p>
            <div className="tech-used flex flex-wrap gap-x-10 gap-y-1 py-5">
              <span className="bg-[rgb(28,28,28)] px-5 py-1">tailwind</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">react</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">nodejs</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">devOps</span>
            </div>
            <Link to="/project" className="group flex w-fit items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-zinc-100 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]">
                Visit Now <FaArrowTrendUp className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link>
          </div>
        </div>
        <div ref={box3Ref} className="absolute z-3 pointer-events-none bottom-[-50%] flex flex-wrap w-full h-fit px-10 py-1 justify-around bg-black/70">
          <div className="left w-[40%]">
            <img className="w-full" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt=''/>
          </div>
          <div className="right w-[40%]">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-pink-300 to-pink-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">E-commere</h2>
            <p></p>
            <div className="tech-used flex flex-wrap gap-x-10 gap-y-1 py-5">
              <span className="bg-[rgb(28,28,28)] px-5 py-1">tailwind</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">react</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">nodejs</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">devOps</span>
            </div>
            <Link to="/project" className="group flex w-fit items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-zinc-100 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]">
                Visit Now <FaArrowTrendUp className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link>
          </div>
        </div>
        <div ref={box4Ref} className="absolute z-4 pointer-events-none -bottom-full flex flex-wrap w-full h-fit px-10 py-1 justify-around bg-black/70">
          <div className="left w-[40%]">
            <img className="w-full" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000" alt=''/>
          </div>
          <div className="right w-[40%]">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-pink-300 to-pink-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">E-commere</h2>
            <p></p>
            <div className="tech-used flex flex-wrap gap-x-10 gap-y-1 py-5">
              <span className="bg-[rgb(28,28,28)] px-5 py-1">tailwind</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">react</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">nodejs</span>
              <span className="bg-[rgb(28,28,28)] px-5 py-1">devOps</span>
            </div>
            <Link to="/project" className="group flex w-fit items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-zinc-100 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]">
                Visit Now <FaArrowTrendUp className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects