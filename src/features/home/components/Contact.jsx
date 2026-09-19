import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const Contact = () => {
  const page = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".cube", {
        y: -25,
        rotation: 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow", {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={page}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white md:px-16"
    >
      {/* Background Glow */}
      <div className="glow absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Contact Content */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div className="contact-item">

          <p className="mb-4 text-sm font-semibold tracking-[6px] text-blue-500">
            CONTACT ME
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Get In Touch
            <br />
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Have a project in mind, a question, or just want to say hello?
            I’d love to hear from you. Feel free to reach out anytime.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">

            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              value="yourmail@gmail.com"
              color="blue"
            />

            <ContactInfo
              icon={<FaPhone />}
              title="Phone"
              value="+91 98765 43210"
              color="purple"
            />

            <ContactInfo
              icon={<FaLocationDot />}
              title="Location"
              value="India — Available for remote work"
              color="cyan"
            />

          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-4">
            <SocialIcon icon={<FaGithub />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form rounded-3xl border border-blue-500/40 bg-white/[0.03] p-7 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:p-10">

          <div className="mb-8 flex items-center gap-4">

            <div className="rounded-xl bg-blue-500/10 p-4 text-2xl text-blue-400">
              <FaPaperPlane />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Send Me a Message
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Fill the form and I’ll get back to you soon.
              </p>
            </div>

          </div>

          <form className="space-y-5">

            <Input placeholder="Your Name" />

            <Input
              type="email"
              placeholder="Your Email"
            />

            <Input
              placeholder="Your Phone (Optional)"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-gray-800 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
            />

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-4 font-semibold transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
            >
              <FaPaperPlane />

              Send Message

              <FaArrowUpRightFromSquare className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

          </form>
        </div>
      </div>

      {/* Floating 3D Style Cube */}
      <div className="cube absolute right-10 top-32 hidden h-16 w-16 rotate-12 rounded-xl border border-blue-400/50 bg-gradient-to-br from-blue-500/30 to-purple-600/30 shadow-xl shadow-blue-500/30 lg:block" />

    </section>
  );
};

const Input = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full rounded-xl border border-gray-800 bg-black/60 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
  />
);

const ContactInfo = ({
  icon,
  title,
  value,
  color,
}) => {

  const colors = {
    blue: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    purple: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    cyan: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
  };

  return (
    <div className="flex items-center gap-5">

      <div
        className={`rounded-xl border p-4 text-xl ${colors[color]}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-400">
          {value}
        </p>
      </div>

    </div>
  );
};

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="rounded-full border border-gray-700 p-3 text-lg transition duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-400"
  >
    {icon}
  </a>
);

export default Contact;