import React from "react";
import { useRouter } from "next/router";
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";
import Background from "@/components/Background";
import Profile from "@/components/Profile";
import Stat from "@/components/Profile/Stat";
import CreateCamp from "@/components/Profile/MyCampaign";

function index() {
  const router = useRouter();
  const [impactOccurred] = useHapticFeedback();
  return (
    <Background>
      <div className="flex flex-col space-y-10">
        <Profile />
        <Stat />
        <CreateCamp />
      </div>
    </Background>
  );
}

export default index;