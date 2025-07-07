import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Mission } from "./components/Mission";
import { AboutUs } from "./components/AboutUs";
import { OperationsArea } from "./components/OperationsArea";
import { CotizacionPreview } from "./components/CotizacionPreview";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Services />
        <Mission />
        <AboutUs />
        <OperationsArea />
        <CotizacionPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;