import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutVariantB";
import Training from "./components/Training";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="absolute inset-0 noise-texture" />
        <Hero />
        <About />
        <Training />
        <News />
        <FAQ />
        <Registration />
      </main>
      <Footer />
      <Popup />
    </>
  );
}
