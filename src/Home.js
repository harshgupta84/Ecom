import React from "react";
import styled from "styled-components";
import FetureProducts from "./components/FetureProducts";
import HeroSection from "./components/HeroSection";
import Services from './components/Services'
import Trusted from './components/Trusted'
import Contact from "./Contact";
const Home = () => {
  return <Wrapper className="test">
  <HeroSection/>
 <FetureProducts/>
  <Services/>
  <Trusted/>
  <Contact value="Connect with us"/>
  </Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
