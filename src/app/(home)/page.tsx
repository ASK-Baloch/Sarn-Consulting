import HeroCarousel from "../components/Craousal"
import BlogsListing from "../components/BlogsListing"
import HeroSection from "../components/hero/HeroSection"
import Softwares from "../components/Software"
import Testimonial from "../components/testimonial/Testimonial"
import Services from "../components/Services"
import MeetingShedule from "../components/MeetinShedule"



const page = () => {
  return (
    <div className="">
      <HeroCarousel />
      <HeroSection />
      <Testimonial />
      <Services/>
      <Softwares />
      <MeetingShedule/>
      <BlogsListing />
    </div>
  )
}

export default page
