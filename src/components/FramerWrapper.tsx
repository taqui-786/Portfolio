"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type FramerMotionProps = {
    children: React.ReactNode,
    className?:any,
    y?:number
    x?:number
    delay?:number
    duration?: number
    scale?:number
}
function FramerWrapper({children,delay = 0.25 ,y = 15, x = 0,duration = 0.20,scale = 0, className}:FramerMotionProps) {
    const [animateConfig, setAnimateConfig] = useState({
        opacity:1, y:0, x:0
    })
  return (
    <AnimatePresence>
      <motion.div
      initial={scale === 0 ?{opacity:0, y:y, x:x,}:{opacity:0, y:y, x:x, scale:scale}}
      animate={scale === 0 ? {opacity:1, y:0, x:0} : {opacity:1, y:0, x:0, scale: 1}}
      exit={{opacity:0, y:15}}
      transition={{delay:delay, duration:duration}}
      className={className}
      >{children}</motion.div>
    </AnimatePresence>
  );
}

export default FramerWrapper;