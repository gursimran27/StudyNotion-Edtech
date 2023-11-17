
import "./Scroll.css";
import { motion, useScroll ,useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const location = useLocation()
  const [visible , setVisible]=useState(false)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


    // console.log(location.pathname);

    useEffect(()=>{
        if (location.pathname === "/about" || location.pathname === "/" || location.pathname === "/contact") {
        setVisible(true)
        }
        else{
         setVisible(false)
         }
    // console.log("useEffect executed",visible);
    },[location.pathname])



  return (

      <motion.div
        className={`
            ${visible? "" : "hidden"}
            progress-bar z-[1000] 
            `}
            style={{ scaleX }}
      />
  );
}
