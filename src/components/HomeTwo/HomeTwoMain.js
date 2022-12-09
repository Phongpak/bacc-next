import React from "react";
import ThemeChanger from "../Common/ThemeChanger";
import OctionTwoSlider from "../Elements/Slider/OctionTwoSlider";
import TrendingSection from "../HomeOne/TrendingSection";
import PopularSection from "../HomeOne/PopularSection";
import WalletSection from "../HomeOne/WalletSection";
import WorkProcessSection from "../HomeOne/WorkProcessSection";
import HeroSectionTwo from "./HeroSectionTwo";
import TopCreatorTwo from "./TopCreatorTwo";

const HomeTwoMain = () => {
  return (
    <main>
      <HeroSectionTwo />
      <TrendingSection />
      <TopCreatorTwo />
      <WorkProcessSection />
      {/* <PopularSection /> */}
      {/* <OctionTwoSlider /> */}
    </main>
  );
};

export default HomeTwoMain;
