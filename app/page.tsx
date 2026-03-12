import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HomeHero } from "@/components/sections/home-hero"
import { Mission } from "@/components/sections/mission"
import { MentorSlideshow } from "@/components/sections/mentor-slideshow"
import { Partnership } from "@/components/sections/partnership"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeHero />
        <Mission />
        <MentorSlideshow />
        <Partnership />
      </main>
      <Footer />
    </div>
  )
}
