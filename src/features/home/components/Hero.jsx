import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import Navbar from "../../../app/shared/Navbar";
import AnimateSkill from "./AnimateSkill";

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const hologramRef = useRef(null);
  const ringRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    /* =====================================================
       THREE.JS SCENE
    ===================================================== */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    /* =====================================================
       PARTICLES
    ===================================================== */

    const particleCount = 2200;

    const positions = new Float32Array(
      particleCount * 3
    );

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] =
        (Math.random() - 0.5) * 18;

      positions[i3 + 1] =
        (Math.random() - 0.5) * 11;

      positions[i3 + 2] =
        (Math.random() - 0.5) * 12;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0x00d9ff,
        size: 0.018,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    scene.add(particles);

    /* =====================================================
       HOLOGRAM RINGS
    ===================================================== */

    const ringGroup = new THREE.Group();

    const ringGeometry =
      new THREE.TorusGeometry(
        2.25,
        0.012,
        16,
        128
      );

    const ringMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x00d9ff,
        transparent: true,
        opacity: 0.55,
      });

    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(
        ringGeometry,
        ringMaterial
      );

      ring.rotation.x =
        Math.PI / 2 + i * 0.15;

      ring.rotation.y =
        i * 0.35;

      ring.scale.setScalar(
        1 - i * 0.12
      );

      ringGroup.add(ring);
    }

    ringGroup.position.set(
      2.5,
      -0.2,
      -1
    );

    scene.add(ringGroup);

    /* =====================================================
       FLOOR GRID
    ===================================================== */

    const grid = new THREE.GridHelper(
      12,
      30,
      0x006eff,
      0x06315a
    );

    grid.position.set(
      2,
      -2.65,
      -1
    );

    grid.rotation.x = 0;

    grid.material.transparent = true;
    grid.material.opacity = 0.22;

    scene.add(grid);

    /* =====================================================
       MOUSE PARALLAX
    ===================================================== */

    const mouse = {
      x: 0,
      y: 0,
    };

    const target = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (event) => {
      target.x =
        (event.clientX /
          window.innerWidth -
          0.5) *
        2;

      target.y =
        (event.clientY /
          window.innerHeight -
          0.5) *
        2;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    /* =====================================================
       ANIMATION LOOP
    ===================================================== */

    const clock = new THREE.Clock();

    let animationId;

    const animate = () => {
      animationId =
        requestAnimationFrame(animate);

      const elapsed =
        clock.getElapsedTime();

      /* particles */

      particles.rotation.y =
        elapsed * 0.012;

      particles.rotation.x =
        Math.sin(elapsed * 0.2) *
        0.025;

      /* rings */

      ringGroup.rotation.z =
        elapsed * 0.08;

      ringGroup.rotation.y =
        Math.sin(elapsed * 0.3) *
        0.15;

      /* camera */

      mouse.x +=
        (target.x - mouse.x) *
        0.025;

      mouse.y +=
        (target.y - mouse.y) *
        0.025;

      camera.position.x =
        mouse.x * 0.2;

      camera.position.y =
        -mouse.y * 0.12;

      camera.lookAt(0, 0, 0);

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    /* =====================================================
       GSAP
    ===================================================== */

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-badge",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          ".hero-role",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-tech",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-photo",
          {
            x: 120,
            opacity: 0,
            scale: 0.85,
            duration: 1.3,
          },
          "-=0.9"
        )
        .from(
          ".code-card",
          {
            x: 60,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.7"
        )
        .from(
          ".available-card",
          {
            x: 60,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".stats",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );

      /* Floating hologram */

      gsap.to(hologramRef.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Floating card */

      gsap.to(cardRef.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Ring */

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      /* Scan line */

      gsap.to(".scan-line", {
        y: 520,
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });
    }, section);

    /* =====================================================
       RESIZE
    ===================================================== */

    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      particleGeometry.dispose();
      particleMaterial.dispose();

      ringGeometry.dispose();
      ringMaterial.dispose();

      renderer.dispose();

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#01030a] text-white"
    >
      {/* =================================================
          THREE CANVAS
      ================================================= */}

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_72%_48%,rgba(0,174,255,0.13),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(0,64,255,0.1),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_bottom,transparent_70%,#01030a_100%)]" />



      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <main className="relative z-10 mx-auto flex min-h-screen max-w-362 items-center px-6 pb-28 pt-32 lg:px-10">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative z-20">

            {/* Badge */}

            <div className="hero-badge mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-black/70 px-5 py-3 shadow-[0_0_25px_rgba(0,229,255,0.08)]">

              <span className="text-xl">
                👋
              </span>

              <span className="text-sm text-gray-200">
                Hello, I'm
              </span>

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_#22c55e]" />

            </div>

            {/* Name */}

            <h1 className="hero-title text-[62px] font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[90px]">

              Rahul{" "}

              <span className="bg-linear-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Kumar
              </span>

            </h1>

            {/* Role */}

            <AnimateSkill/>

            <div className="mt-6 h-0.5 w-12 bg-cyan-400 shadow-[0_0_15px_#00e5ff]" />

            {/* Description */}

            <p className="hero-description mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">

              I build exceptional and responsive web
              applications that provide{" "}

              <span className="font-semibold text-cyan-400">
                seamless user experiences.
              </span>

            </p>

            {/* Buttons */}

            <div className="hero-buttons mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group relative overflow-hidden rounded-xl bg-linar-to-r from-blue-500 to-indigo-600 px-7 py-4 font-semibold shadow-[0_0_30px_rgba(0,119,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(0,174,255,0.4)]"
              >

                <span className="relative z-10">
                  View My Work
                  <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </span>

              </a>

              <a
                href="#contact"
                className="rounded-xl border border-cyan-400/60 bg-black/70 px-7 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]"
              >
                Contact Me
              </a>

            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            <div className="hero-tech mt-12">

              <p className="mb-5 text-sm text-gray-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-4">

                <Tech
                  icon="⚛"
                  name="React"
                />

                <Tech
                  icon="⬡"
                  name="Node.js"
                />

                <Tech
                  icon="EX"
                  name="Express"
                />

                <Tech
                  icon="◆"
                  name="MongoDB"
                />

                <Tech
                  icon="≋"
                  name="Tailwind"
                />

                <Tech
                  icon="◇"
                  name="Three.js"
                />

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="relative w-full flex min-h-125 items-center justify-center lg:justify-end">

            {/* Big glow */}

            <div className="absolute right-[5%] top-1/2 h-120 w-120 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

            {/* Hologram circle */}

            <div
              ref={ringRef}
              className="absolute right-[5%] top-1/2 h-120 w-120 -translate-y-1/2 rounded-full border border-cyan-400/20"
            />

            {/* Secondary circle */}

            <div className="absolute right-[8%] top-1/2 h-105 w-105 -translate-y-1/2 rounded-full border border-blue-500/10" />

            {/* =================================================
                HOLOGRAM
            ================================================= */}

            <div
              ref={hologramRef}
              className="hero-photo absolute left-0"
            >

              <div className="">

                {/* glow behind person */}

                <div className="absolute -inset-16 left-0 rounded-full" />

                {/* Your hologram image */}

                <img
                  src="/rahul.webp"
                   fetchPriority="high"
                   decoding="async"
                   alt="Portfolio"
                  className="relative h-155 w-auto max-w-[90vw] object-contain"
                />

                {/* Scan effect */}

                <div className="scan-line pointer-events-none absolute left-[15%] top-0 h-0.5 w-[70%] bg-cyan-300 opacity-70 shadow-[0_0_20px_#00e5ff]" />

              </div>

            </div>

            {/* =================================================
                CODE CARD
            ================================================= */}

            <div className="code-card absolute right-0 top-[0%] z-30 hidden w-72 rounded-xl border border-cyan-400/30 bg-black/70 p-5 font-mono text-xs shadow-[0_0_30px_rgba(0,174,255,0.1)] xl:block">

              <div className="mb-4 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <p className="text-cyan-400">
                const developer = {"{"}
              </p>

              <p className="pl-4 text-gray-400">
                name:
                <span className="text-blue-400">
                  "Rahul Kumar"
                </span>,
              </p>

              <p className="pl-4 text-gray-400">
                stack:
                <span className="text-blue-400">
                  ["MERN", "Three.js"]
                </span>,
              </p>

              <p className="pl-4 text-gray-400">
                passion:
                <span className="text-blue-400">
                  "Build Amazing Apps"
                </span>
              </p>

              <p className="text-cyan-400">
                {"}"}
              </p>

            </div>

            {/* =================================================
                AVAILABLE CARD
            ================================================= */}

            <div
              ref={cardRef}
              className="available-card absolute bottom-20 right-0 z-40 w-75 rounded-2xl border border-cyan-400/25 bg-black/70 p-5 shadow-[0_0_35px_rgba(0,174,255,0.12)]"
            >

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_#22c55e]" />

                <span className="text-xs font-medium text-green-400">
                  Available for work
                </span>

              </div>

              <p className="mt-3 text-lg font-semibold">
                Let's build something
              </p>

              <p className="text-lg font-semibold">

                <span className="text-cyan-400">
                  amazing
                </span>{" "}
                together!

              </p>

              <div className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                ➤
              </div>

            </div>

            {/* Code / Build text */}

            <div className="absolute -right-2.5 top-[40%] z-30 hidden text-right font-mono text-xs tracking-[0.35em] text-cyan-500/80 xl:block">

              <p>CODE</p>
              <p>CREATE</p>
              <p>BUILD</p>
              <p>REPEAT</p>

              <div className="ml-auto mt-3 h-px w-16 bg-cyan-400" />

            </div>

          </div>
        </div>
      </main>

    </section>
  );
};

/* =====================================================
   TECHNOLOGY COMPONENT
===================================================== */

const Tech = ({ icon, name }) => {
  return (
    <div className="group flex flex-col items-center gap-2">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/25 bg-black/70 text-xl text-cyan-400 shadow-[0_0_15px_rgba(0,174,255,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/70 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]">

        {icon}

      </div>

      <span className="text-xs text-gray-400 transition-colors group-hover:text-cyan-400">
        {name}
      </span>

    </div>
  );
};

/* =====================================================
   STAT COMPONENT
===================================================== */

const Stat = ({ number, label }) => {
  return (
    <div className="flex items-center justify-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
        ✦
      </div>

      <div>
        <p className="text-2xl font-bold">
          {number}
        </p>

        <p className="text-[10px] text-gray-500">
          {label}
        </p>
      </div>

    </div>
  );
};

export default Hero;