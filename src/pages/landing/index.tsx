import { useRef } from "react";

import Footer from "@/components/layout/Footer";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import LandingNavbar from "./LandingNavbar";
import LandingSection1 from "./LandingSection1";
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";
import LandingSection4 from "./LandingSection4";

export default function LandingPage() {
  const contentObserverRef = useRef<HTMLDivElement>(null);
  const isContentInView = useIntersectionObserver(contentObserverRef, {
    threshold: 0.3,
  });

  return (
    <>
      <LandingNavbar isNavbarTransparent={!isContentInView} />
      <LandingSection1 />
      <LandingSection2 />
      <div ref={contentObserverRef}>
        <LandingSection3 />
        <LandingSection4 />
        <Footer />
      </div>
    </>
  );
}
