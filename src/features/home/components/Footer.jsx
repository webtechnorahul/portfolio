import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { gsap } from 'gsap';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

// 1. Interactive 3D Sphere Element
function AnimatedSphere() {
  const sphereRef = useRef();
  const { pointer } = useThree(); // Tracks mouse X/Y coordinates

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      // Continuous gentle rotation
      sphereRef.current.rotation.y = time * 0.15;
      sphereRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Make the sphere subtly follow the mouse cursor dynamically
      sphereRef.current.position.x = gsap.utils.interpolate(sphereRef.current.position.x, pointer.x * 1.5, 0.1);
      sphereRef.current.position.y = gsap.utils.interpolate(sphereRef.current.position.y, pointer.y * 0.8, 0.1);
    }
  });

  return (
    // Creates a geometric sphere with distortion capabilities
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.2}>
      <MeshDistortMaterial
        color="#3b82f6"       // Tailwind blue-500
        attach="material"
        distort={0.4}         // Amount of organic wave distortion
        speed={2}             // Speed of distortion animation
        wireframe={true}      // Futuristic matrix/wireframe mesh style
        opacity={0.25}
        transparent
      />
    </Sphere>
  );
}

// 2. Main Footer Component
export default function Footer() {
  const footerRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-neutral-950 text-neutral-200 overflow-hidden border-t border-neutral-800"
    >
      {/* Three.js Canvas Container with 3D Sphere */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pointer-events-auto">
          
          {/* Brand Section */}
          <div ref={(el) => (linksRef.current = el)} className="md:col-span-2">
            <h2 className="text-5xl font-extrabold tracking-tight text-white mb-4">
              Rk<span className="text-blue-500">.</span>
            </h2>
            <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
              Building next-generation digital experiences mixing code, 3D graphics, and immersive animations.
            </p>
          </div>

          {/* Navigation Links */}
          <div ref={(el) => (linksRef.current = el)}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    {item}
                    <FiArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div ref={(el) => (linksRef.current = el)}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-blue-600 transition-colors duration-300 text-neutral-400 hover:text-white flex items-center justify-center">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-blue-600 transition-colors duration-300 text-neutral-400 hover:text-white flex items-center justify-center">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-blue-600 transition-colors duration-300 text-neutral-400 hover:text-white flex items-center justify-center">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          ref={(el) => (linksRef.current = el)} 
          className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 pointer-events-auto"
        >
          <p>&copy; {new Date().getFullYear()} Rahul kumar. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
