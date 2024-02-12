import React from "react";
// import TradepersonProfile from "../../components/TradepersonProfile/TradepersonProfile";
import TradepersoneTable from "../../components/TradepersonTable/TradepersonTable";
import MemeberShip from "../../components/FinancialContract/Membership/MemeberShip";

function TradePerson() {
  // return <TradepersonProfile />;
  return (
    <>
      <TradepersoneTable />
      <MemeberShip />
    </>
  );
}

export default TradePerson;
