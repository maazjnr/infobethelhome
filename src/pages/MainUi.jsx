import { Nav, Home, AboutUs, OurService, Contact, About } from "@/Components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainUi() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <OurService />
      <Contact />
      <About />
    </>
  );
}

export default MainUi;
