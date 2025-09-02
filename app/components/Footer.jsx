import { jaro, space } from "../fonts";

import React from 'react'


const Footer = () => {
  return (
    <div className={`absolute bottom-5 max-md:-bottom-50 right-10 text-center ${space.className} text-sm text-white/40 max-md:pb-5` }>
        <h3 className={`text-2xl ${jaro.className} text-white/40`}>MADE WITH</h3>
        <p>nextjs</p>
        <p>tailwind</p>
        <p>motion</p>
        <p>convex-db</p>
        <p>cloudinary</p>
        <p>rizz</p>
    </div>
  )
}

export default Footer