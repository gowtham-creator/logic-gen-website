import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQSection from "./components/FAQs";
import DemoCTA from "./components/TalkDemo";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";
import ScrollElement from "@/components/uilayouts/scroll-animation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Your main content goes here */}
        <ScrollElement
          viewport={{ amount: 0.5, margin: '0px 0px 40px 0px', once: true }}
        >
          <Hero />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.8, margin: '0px 0px 0px 0px', once: true }}
        >
          <FeaturesSection />
        </ScrollElement>
        <HowItWorks />
        <ScrollElement
          viewport={{ amount: 0.8, margin: '0px 0px 0px 0px', once: true }}
        >
          <FAQSection />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.8, margin: '0px 0px 0px 0px', once: true }}
        >
          <DemoCTA />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.8, margin: '0px 0px 0px 0px', once: true }}
        >

          <Spotlight />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.8, margin: '0px 0px 0px 0px', once: true }}
        >
          <Footer />
        </ScrollElement>
      </main>
    </div>
  );
}
