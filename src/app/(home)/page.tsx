import HeroCarousel from "../components/Craousal"
import ResponsiveNavbar from "../components/ResponsiveNav"
import BlogsListing from "../components/BlogsListing"
import HeroSection from "../components/HeroSection"

const page = () => {
  return (
    <div>
      <ResponsiveNavbar/>
      <HeroCarousel/>
      <HeroSection/>
      <BlogsListing />
    </div>
  )
}

export default page
