import HeroCarousel from "../components/Craousal"
import ResponsiveNavbar from "../components/ResponsiveNav"
import BlogsListing from "../components/BlogsListing"

const page = () => {
  return (
    <div>
      <ResponsiveNavbar/>
      <HeroCarousel/>
      <BlogsListing />
    </div>
  )
}

export default page
