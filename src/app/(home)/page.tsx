export const revalidate = 30;

import HeroCarousel from "../../components/Craousal";
import BlogsListing from "../../components/BlogsListing";
import Softwares from "../../components/Software";
import Testimonial from "../../components/testimonial/Testimonial";
import Services from "../../components/Services/Services";
import MeetingShedule from "../../components/Services/MeetinShedule";
import ServicesBoxes from "../../components/ServicesBoxes";
import ContactForm from "../../components/ContactForm";
import FactsAndStats from "../../components/FactsAndFigures";
import TeamSection from "@/components/Team";

const page = () => {
  return (
    <div className="">
      <HeroCarousel />
      <Services />
      <ServicesBoxes />
      <Softwares />
      <TeamSection />
      <MeetingShedule />
      <Testimonial />
      <BlogsListing />
      <FactsAndStats/>
      <ContactForm/>
    </div>
  );
};

export default page;
 