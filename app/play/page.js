"use client";

import { jaro, space } from "../fonts";
import { useState } from "react";
import React from "react";

const Page = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {!play ? (
        <Search func={() => setPlay(true)} />
      ) : (
        <Player func={() => setPlay(false)} />
      )}
    </>
  );
};

const Search = ({ func }) => {
  return (
    <div
      className={`min-h-[calc(100vh-96px)] w-screen flex items-center justify-center flex-col px-4 ${space.className}`}
    >
      <div className="relative w-full flex justify-center mb-6">
        {/* Upload Form Container */}
        <div className="w-[60vw] max-md:w-full max-md:h-auto max-w-2xl bg-accent neobrutal p-6 flex flex-col gap-4">
          <h2
            className={`text-2xl max-md:text-xl mb-4 text-black ${space.className}`}
          >
            drop where u @ and we got u twin
          </h2>

          {/* Location */}
          <label className="font-bold text-black">
            Location
            <input
              type="text"
              placeholder="Enter ur location"
              className="neobrutal w-full mt-2 p-2 border-4 border-black rounded-md bg-white"
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
          className="w-25 max-md:w-15 absolute left-70 max-md:left-5 top-90 max-md:top-110"
        />
        <img
          src="/shapes/cuboid.svg"
          alt="cuboid"
          className="w-30 max-md:w-15 absolute right-110 max-md:right-10 -top-45 max-md:-top-20"
        />
        <img
          src="/shapes/cylinder.svg"
          alt="cylinder"
          className="w-30 max-md:w-20 absolute right-120 max-md:right-30 top-100 max-md:top-130"
        />
        <img
          src="/shapes/ring.svg"
          alt="ring"
          className="w-30 max-md:w-20 absolute right-70 max-md:right-3 top-50 max-md:top-110"
        />
      </div>

      {/* Upload Button */}
      <button
        onClick={func}
        className="py-2 px-8 bg-primary rounded-md neobrutal rotate-5"
      >
        <h3 className={`text-5xl ${jaro.className} relative max-md:text-2xl`}>
          BET
        </h3>
      </button>
    </div>
  );
};

const Player = ({ func }) => {
  const song = {
    song: "Saiyara",
    genre: "Pop",
    weather: "Sunny",
  };

  return (
    <div
      className={`min-h-[calc(100vh-96px)] w-screen flex flex-col items-center justify-center px-4 relative ${space.className} pb-10`}
    >
      {/* Card */}
      <div className="w-[50vw] max-md:w-full bg-accent neobrutal p-6 flex flex-col gap-6 relative z-10 mb-6">
        {/* Header */}
        <div className="flex justify-between text-lg text-black font-bold">
          <span>{song.genre}</span>
          <span>{song.weather}</span>
        </div>

        {/* Song name */}
        <h2
          className={`text-5xl max-md:text-3xl text-black ${jaro.className}`}
        >
          {song.song}
        </h2>

        {/* Progress bar */}
        <div className="w-full h-1 bg-black"></div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8">
          <button className="border border-black rounded-full w-10 h-10 flex items-center justify-center">
            ■
          </button>
          <button className="text-4xl">▶</button>
          <button className="text-4xl">⏭</button>
        </div>
      </div>

      {/* Return Button */}
      <button
        onClick={func}
        className="py-2 px-8 bg-primary rounded-md neobrutal rotate-5 relative z-10"
      >
        <h3 className={`text-5xl ${jaro.className} relative max-md:text-2xl`}>
          RETURN
        </h3>
      </button>

      {/* Floating Shapes */}
      <img
        src="/shapes/star.svg"
        alt="star"
        className="w-35 max-md:w-20 absolute left-85 max-md:left-10 top-35 max-md:top-20"
      />
      <img
        src="/shapes/cone.svg"
        alt="cone"
        className="w-25 max-md:w-15 absolute left-70 max-md:left-5 top-140 max-md:top-140"
      />
      <img
        src="/shapes/cuboid.svg"
        alt="cuboid"
        className="w-30 max-md:w-15 absolute right-110 max-md:right-10 top-25 max-md:top-35"
      />
      <img
        src="/shapes/cylinder.svg"
        alt="cylinder"
        className="w-30 max-md:w-20 absolute right-120 max-md:right-30 top-150 max-md:top-150"
      />
      <img
        src="/shapes/ring.svg"
        alt="ring"
        className="w-30 max-md:w-20 absolute right-70 max-md:right-15 top-70 max-md:top-170"
      />
    </div>
  );
};

export default Page;
