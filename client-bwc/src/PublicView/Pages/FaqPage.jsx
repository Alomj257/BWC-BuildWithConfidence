import React from "react";
import PublicLayout from "../Components/utils/PublicLayout";
import Faq from "../Components/About/Faq";
import ConsumerFaq from "../Components/About/Faq/ConsumerFaq";
import TradepersonFaq from "../Components/About/Faq/TradepersonFaq";

const FaqPage = () => {
  return (
    <PublicLayout>
      <Faq />
      <ConsumerFaq />
      <TradepersonFaq />
    </PublicLayout>
  );
};

export default FaqPage;
