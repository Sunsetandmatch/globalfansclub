"use client"

import Header from "@/components/header"
import VideoHero from "@/components/video-hero"
import AboutUs from "@/components/about-us"
import GuestSpeakersSection from "@/components/guest-speakers-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MailingListSection from "@/components/mailing-list-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <VideoHero />

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Guest Speakers Section */}
      <section id="guest-speakers">
        <GuestSpeakersSection />
      </section>

      {/* Mailing List Section */}
      <section id="mailing-list">
        <MailingListSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  )
}
