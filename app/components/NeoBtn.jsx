"use client"

import Link from "next/link";
import React from "react";
import { jaro } from "../fonts";

const NeoBtn = ({ href, text,}) => {
  return (
        <Link href={href}>
          <button className="py-2 px-8 bg-primary rounded-md neobrutal rotate-5">
            <h3
              className={`text-5xl ${jaro.className} relative max-md:text-2xl`}
            >
              {text}
            </h3>
          </button>
        </Link>
  );
};

export default NeoBtn;
