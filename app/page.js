import Image from "next/image";
import Navbar from "./components/Navbar";
import { space } from "./fonts";
import NeoBtn from "./components/NeoBtn";

export default function Home() {
  return (
    <div className="h-[calc(100vh-96px)] w-screen flex items-center justify-center flex-col">
      <div className="relative w-screen flex justify-center">
        <h2
          className={` ${space.className} text-8xl max-md:text-5xl text-white mb-2 text-center`}
        >
          Radio, <br className="block md:hidden" /> <span className="text-primary">Reimagined</span>
        </h2>
        <img
          src="/lines/point.svg"
          alt="line"
          className="w-50 absolute top-63 z-40 right-[50vw] max-md:w-30 "
        />
        <img
          src="/shapes/star.svg"
          alt="line"
          className="w-35 absolute left-105 -top-35 max-md:left-10 max-md:w-20"
        />
        <img
          src="/shapes/cone.svg"
          alt="line"
          className="w-25 absolute left-70 top-60 max-md:left-5 max-md:w-15 max-md:top-85"
        />
        <img
          src="/shapes/cuboid.svg"
          alt="line"
          className="w-30 absolute right-95 -top-45 max-md:right-10 max-md:w-15"
        />
        <img
          src="/shapes/cylinder.svg"
          alt="line"
          className="w-30 absolute right-190 top-80 max-md:right-20 max-md:w-20"
        />
        <img
          src="/shapes/ring.svg"
          alt="line"
          className="w-30 absolute right-120 top-50 max-md:right-3 max-md:w-20"
        />
      </div>

      <p className={` ${space.className} text-2xl text-secondary pb-8 max-md:text-xl`}>
        drop where u @ and we got u twin
      </p>
      <NeoBtn href={"/play"} text={"PLAY"} className="mb-24"></NeoBtn>
    </div>
  );
}
