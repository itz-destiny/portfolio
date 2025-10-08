"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Hero = () => {
  return (
    <section className="relative pb-40 pt-56 w-full h-full">
      {/* Background Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="white" />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center mx-auto max-w-7xl px-6 lg:px-12 space-y-12 lg:space-y-0 lg:space-x-16">
        
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border border-neutral-800 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <TextGenerateEffect
            words="Transforming Concepts into Digital Realities"
            className="text-left text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          />

          <p className="mt-4 md:tracking-wider text-sm sm:text-base md:text-lg lg:text-xl">
            Hi! I&apos;m Destiny, a{" "}
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              <ContainerTextFlip
                className="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
                words={[
                  "Web Developer",
                  "Web Designer",
                  "Programmer",
                  "AI Enthusiast",
                ]}
              />
            </span>{" "}
            based in Nigeria.
          </p>

          <a href="#about" className="mt-6">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
