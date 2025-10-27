import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamBannerCarousel from "@/components/team-banner-carousel"

// Assuming this is the structure of the page
const ShopPage = () => {
  return (
    <div>
      <Header />
      {/* Main content of the shop page */}
      <TeamBannerCarousel />
      <Footer />
    </div>
  )
}

export default ShopPage
