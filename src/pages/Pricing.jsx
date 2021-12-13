import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/pricing/Container";
import Hero from "../components/pricing/Hero";

const Pricing = () => {
  return (
    <div>
      <Navbar title="Virtual Conference Pricing" />
      <Container>
        <Hero />
      </Container>
    </div>
  );
};

export default Pricing;
