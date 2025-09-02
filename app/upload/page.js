"use client";

import { jaro, space } from "../fonts.js";
import NeoBtn from "../components/NeoBtn";

export default function Home() {
  return (
    <div
      className={`min-h-[calc(100vh-96px)] w-screen flex items-center justify-center flex-col px-4 ${space.className}`}
    >
      <div className="relative w-full flex justify-center mb-6">
        {/* Upload Form Container */}
        <div className="w-[50vw] max-md:w-full max-md:h-auto max-w-2xl bg-accent neobrutal p-6 flex flex-col gap-4">
          <h2
            className={`text-4xl max-md:text-2xl mb-4 text-black text-center ${jaro.className}`}
          >
            Upload Your Song 🎵
          </h2>

          {/* Song Name */}
          <label className="font-bold text-black">
            Song Name
            <input
              type="text"
              placeholder="Enter song name"
              className="neobrutal w-full mt-2 p-2 border-4 border-black rounded-md bg-white"
            />
          </label>

          {/* Your Name */}
          <label className="font-bold text-black">
            Your Name
            <input
              type="text"
              placeholder="Enter your name"
              className="neobrutal w-full mt-2 p-2 border-4 border-black rounded-md bg-white"
            />
          </label>

          {/* MP3 Upload */}
          <label className="font-bold text-black">
            Upload MP3
            <input
              type="file"
              accept=".mp3"
              className="neobrutal w-full mt-2 p-2 border-4 border-black rounded-md bg-white 
                file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md 
                file:bg-black file:text-white hover:file:bg-gray-800"
            />
          </label>
        </div>

        {/* Shapes */}
        <img
          src="/shapes/star.svg"
          alt="star"
          className="w-35 max-md:w-20 absolute left-95 max-md:left-10 -top-35 max-md:-top-20"
        />
        <img
          src="/shapes/cone.svg"
          alt="cone"
          className="w-25 max-md:w-15 absolute left-70 max-md:left-5 top-110 max-md:top-110"
        />
        <img
          src="/shapes/cuboid.svg"
          alt="cuboid"
          className="w-30 max-md:w-15 absolute right-110 max-md:right-10 -top-45 max-md:-top-20"
        />
        <img
          src="/shapes/cylinder.svg"
          alt="cylinder"
          className="w-30 max-md:w-20 absolute right-120 max-md:right-30 top-130 max-md:top-130"
        />
        <img
          src="/shapes/ring.svg"
          alt="ring"
          className="w-30 max-md:w-20 absolute right-70 max-md:right-3 top-50 max-md:top-110"
        />
      </div>

      {/* Upload Button */}
      <button
        onClick={()=> console.log("yes")}
        className="py-2 px-8 bg-primary rounded-md neobrutal rotate-5"
      >
        <h3 className={`text-5xl ${jaro.className} relative max-md:text-2xl`}>
          UPLOAD
        </h3>
      </button>
      
    </div>
  );
}
