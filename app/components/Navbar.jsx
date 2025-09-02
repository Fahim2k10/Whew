"use client";

import Link from "next/link";
import { jaro } from "../fonts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", icon: "/icons/home.svg", label: "Home" },
    { href: "/play", icon: "/icons/circle.svg", label: "Play" },
    { href: "/", icon: "/icons/upload.svg", label: "Upload" },
    { href: "/", icon: "/icons/github.svg", label: "Github" },
  ];

  return (
    <div className="h-24 w-screen px-20 flex items-center justify-between max-sm:px-5">
      {/* Left Section */}
      <div className="flex items-center relative">
        <h1 className={`text-5xl ${jaro.className} relative`}>
          WHEW
          <img
            src="/lines/nav.svg"
            alt="line"
            className="w-30 absolute left-0 top-full"
          />
        </h1>
        <img
          src="/icons/music.svg"
          alt="music"
          className="h-10 w-10 mt-1 ml-2"
        />
      </div>

      {/* Right Section (Links for desktop) */}
      <div className="flex gap-8">
        {links.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <motion.img
              src={item.icon}
              alt="nav-icon"
              className="w-10 cursor-pointer max-sm:hidden"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        ))}

        {/* Hamburger Icon (Mobile Only) */}
        <img
          src="/icons/hamburger.svg"
          alt="hamburger"
          className="h-10 mt-1 ml-2 sm:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Bottom Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed bottom-0 left-0 w-full bg-accent rounded-t-2xl shadow-xl z-50 p-6 flex flex-col gap-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 pb-2">
                {links.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium"
                  >
                    <img src={item.icon} alt={item.label} className="w-6 h-6" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
