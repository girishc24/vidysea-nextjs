import Image from "next/image";
import { WeSimplify,OurVision, AboutWhoWeAre, GlobalImpact, OurPartners } from "./_components";

export default function About() {
  return (
    <div>
        <WeSimplify />
        <OurVision />
        <AboutWhoWeAre />
        <GlobalImpact />
        <OurPartners />
    </div>
  );
}
