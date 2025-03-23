import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectCarousel from "./components/ProjectCarousel";
import ScaffoldingTypes from "./components/ScaffoldingTypes";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Features from "./components/Features";
import TechnologicalAdvantages from "./components/TechnologicalAdvantages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToContact from "./components/ScrollToContact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectCarousel />
        <ScaffoldingTypes />
        <CustomerTestimonials />
        <Features />
        <TechnologicalAdvantages />
        <Contact />
      </main>
      <Footer />
      <ScrollToContact />
    </div>
  );
}

export default App;
