import React from "react";
import {
  Navbar,
  Hero,
  AboutUs,
  Services,
  Products,
  Testimonials,
  ContactUs,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App bg-zinc-800 text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
