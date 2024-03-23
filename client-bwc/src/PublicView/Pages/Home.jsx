import React from "react";
import Welcome from "../Components/Home/Welcome/Welcome";
import Popular from "../Components/Home/Popular/Popular";
import OurServices from "../Components/Home/OurServices/OurServices";
import SayClient from "../Components/Home/SayClient/SayClient";
import PublicFooter from "../Components/Home/PublicFooter/PublicFooter";

const Home = () => {
  return (
    <>
      <div className="">
        <Welcome />
        <Popular />
        <OurServices />
        <SayClient />
        <PublicFooter />
      </div>
    </>
  );
};

export default Home;
