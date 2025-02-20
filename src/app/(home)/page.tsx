import HeroCarousel from "../components/Craousal";
import BlogsListing from "../components/BlogsListing";
import HeroSection from "../components/hero/HeroSection";
import Softwares from "../components/Software";
import Testimonial from "../components/testimonial/Testimonial";
import Services from "../components/Services/Services";
import MeetingShedule from "../components/Services/MeetinShedule";
import ServicesBoxes from "../components/ServicesBoxes";
import ContactForm from "../components/ContactForm";
import FactsAndStats from "../components/FactsAndFigures";


const page = () => {
  return (
    <div className="">
      <HeroCarousel />
      {/* <HeroSection /> */}
      <Services />
      <ServicesBoxes />
      <Softwares />
      <MeetingShedule />
      <Testimonial />
      <BlogsListing />
      <FactsAndStats/>
      <ContactForm/>
    </div>
  );
};

export default page;
