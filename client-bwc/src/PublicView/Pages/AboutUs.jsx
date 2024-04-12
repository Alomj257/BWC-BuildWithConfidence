import React from "react";
import AboutHome from "../Components/About/AboutHome";
import Address from "../Components/About/AddressConcern/Address";
// import Articles from "../Components/About/Articles";
// import Faq from "../Components/About/Faq";
// import ConsumerFaq from "../Components/About/Faq/ConsumerFaq";
// import TradepersonFaq from "../Components/About/Faq/TradepersonFaq";
import HowItWorks from "../Components/About/HowItWorks";
import JoinNow from "../Components/About/JoinNow";

const AboutUs = () => {
  return (
    <div>
      <AboutHome />
      <Address />
      {/* <Articles /> */}
      {/* <Faq />
      <ConsumerFaq />
      <TradepersonFaq /> */}
      <HowItWorks />
      <JoinNow />
    </div>
  );
};

export default AboutUs;
