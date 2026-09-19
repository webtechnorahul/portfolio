import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  ["JavaScript", 90, "JS"],
  ["React", 88, "⚛"],
  ["java",80,"Java"],
  ["GSAP", 82, "GS"],
  ["Three.js", 78, "3D"],
  ["Node.js", 85, "N"],
  ["mysql",75,"MySql"]
];

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.08,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".skill-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      document.querySelectorAll(".skill-card").forEach((card) => {
        const circle = card.querySelector(".progress");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, scale: 1.03, duration: 0.3 });
          gsap.to(circle, { stroke: "#a78bfa", duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3 });
          gsap.to(circle, { stroke: "#6366f1", duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-[#030014] px-5 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="skill-heading mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[6px] text-indigo-400">
            My Skills
          </p>

          <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
            Technologies I use to create modern, responsive
            and interactive web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map(([name, percent, icon], index) => {
            const radius = 52;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (percent / 100) * circumference;

            return (
              <div
                key={name}
                className="skill-card group relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-white/4 p-6 text-center backdrop-blur-xl"
              >
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl transition-all group-hover:bg-purple-600/20" />

                {/* Number */}
                <span className="absolute right-5 top-5 text-xs text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Circle */}
                <div className="relative mx-auto h-40 w-40">
                  <svg className="-rotate-90" width="160" height="160">
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="rgba(255,255,255,.07)"
                      strokeWidth="8"
                    />

                    <circle
                      className="progress"
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-black">
                      {percent}%
                    </span>
                  </div>
                </div>

                {/* Skill */}
                <div className="mt-5 flex items-center justify-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-indigo-500/10 text-sm font-bold text-indigo-300">
                    {icon}
                  </div>

                  <h3 className="text-base font-bold">
                    {name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div>
            
        </div>

      </div>
    </section>
  );
};

export default Skill;