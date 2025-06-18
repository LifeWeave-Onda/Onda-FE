import { useRef } from "react";

import Footer from "@/components/layout/Footer";
import ResponsiveRenderer from "@/components/layout/ResponsiveRenderer";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import LandingMobile from "./LandingMobile";
import LandingNavbar from "./LandingNavbar";
import LandingSection1 from "./LandingSection1";
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";
import LandingSection4 from "./LandingSection4";

export default function LandingPage() {
  return <ResponsiveRenderer mobile={<LandingMobile />} pc={<LandingPC />} />;
}

function LandingPC() {
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
