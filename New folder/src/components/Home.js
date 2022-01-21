import About from "./about/About";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import Toggle from "./toggle/Toggle";
import Certified from "./CertifiedFrom/Certified";
import { useState } from "react";

const Home = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Toggle nav1={setNav} nav2={nav} />
      <Intro nav={nav} />
      <Certified />
      <About />
    </>
  );
};

export default Home;
