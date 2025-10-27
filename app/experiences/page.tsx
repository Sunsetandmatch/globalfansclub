import Header from "@/components/header"
import Footer from "@/components/footer"
import EventsSection from "@/components/events-section"

export default function Experiences() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}
