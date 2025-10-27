import TeamBannerCarousel from "@/components/team-banner-carousel"
import AboutUs from "@/components/about-us"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Team Banner Carousel Section */}
      <section className="pt-16">
        <TeamBannerCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16">
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16">
        <ContactSection />
      </section>
    </div>
  )
}
