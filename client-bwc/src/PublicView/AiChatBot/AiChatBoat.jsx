import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const AiChatBoat = () => {
  useEffect(() => {
    alanBtn({
      key: "9d5a947be841b96a314257e432c73ef72e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          window.history.back();
        }
      },
    });
  }, []);
  return <div></div>;
};

export default AiChatBoat;
