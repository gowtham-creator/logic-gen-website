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
    <div className="overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Your main content goes here */}
        <ScrollElement
          viewport={{ amount: 0.2, margin: '0px 0px -100px 0px', once: true }}
        >
          <Hero />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.3, margin: '0px 0px -150px 0px', once: true }}
        >
          <FeaturesSection />
        </ScrollElement>
        <HowItWorks />
        <ScrollElement
          viewport={{ amount: 0.3, margin: '0px 0px -100px 0px', once: true }}
        >
          <FAQSection />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.3, margin: '0px 0px -100px 0px', once: true }}
        >
          <DemoCTA />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.3, margin: '0px 0px -100px 0px', once: true }}
        >

          <Spotlight />
        </ScrollElement>
        <ScrollElement
          viewport={{ amount: 0.3, margin: '0px 0px -150px 0px', once: true }}
        >
          <Footer />
        </ScrollElement>
      </main>
    </div>
  );
}
