import React from "react";
import Header from "../header/Header";
import Sponsors from "../sponsors/Sponsors";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import Videos from "../videos/Videos";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";


const  BaseLayout = (props) => {
    return(
      <> <Header />
      <Sponsors />
      <Services />
      <Testimonials />
      <Videos />
      <Footer />
      <Copyright />

      {props.children} </>

    );
}

export default BaseLayout;




