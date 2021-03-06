import React from "react";
import Banner from "./Banner.js";
import Info from "./Info/Info.js";
import Services from "./Services/Services.js";
import MakeAppointment from "./MakeAppointment/MakeAppointment.js"
import Testimonials from './Testimonial/Testimonial.js'
import Contact from "./Contact/Contact.js"
import Footer from '../Shared/Footer/Footer.js'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment/>
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
