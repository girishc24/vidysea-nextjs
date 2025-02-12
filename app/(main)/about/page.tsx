import Image from "next/image";
import { AboutWhoWeAre, GlobalImpact, OurPartners } from "./_components";

export default function About() {
  return (
    <div>
        <AboutWhoWeAre />
        <GlobalImpact />
        <OurPartners />
    </div>
  );
}
