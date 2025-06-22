// components/LocomotiveWrapper.js
"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveWrapper = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return <div data-scroll-container>{children}</div>;
};

export default LocomotiveWrapper;
