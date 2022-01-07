import React, { useState,useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpg";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import AboutAppStyle from "../../components/AboutUs/AboutAppStyle";
import OurTeam from "../../components/Team/OurTeam";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import CounterOne from "../../components/Counters/CounterOne"
import CTAOne from "../../components/CTA/CTAOne";
import FooterOne from "../../components/Footer/FooterOne";




const CreativeOnePage = () => {
  const home = useRef();
  const about = useRef();
  const feature = useRef();
  const service = useRef();
  const team = useRef();
  const Testimonial = useRef();
  const contact = useRef();


  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
        case "feature":
        feature.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
     
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        
    }
  };

  return (
    <Loader>
      <HeaderTwo scrollToSection={scrollToSection} />
      <HeroSliderSection data={dataCreative} ref={home} />
    <div ref={about}
   >
     {/* <WhoWeAreOne
      title="We’r Full Fledged Digital Agency Creating Awesome Things"
      tagline="We Love What We Do"
      verticalWord="Design"
      horizontalWord="Creative."
    >
      We develop innovative and creative products and services that provide total communication and information solutions. Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.
    </WhoWeAreOne> */}
    <AboutAppStyle ref={feature} />
    <CounterOne />
       
      </div> 
      <div ref={service}>
        <OurServices
          title="What We Do"
          tagline="We develop big ideas that sell."
          serviceImg={serviceOneImg}
          
        />
       
       </div>

       <div ref={team}>
      <OurTeam title="MEET OUR TEAM" tagline="WE ARE STRONGER" bg="dark"   />
      
      </div>

      <div ref={Testimonial}>
        
      </div>
     
      <TestimonialsOne title="Testimonials" tagline="Happy clients" />

      {/* <TestimonialItem /> */}
      


      
     
      

        <div ref={contact}>
        
      <CTAOne
      tagline="careers"
      title="Let's write your story, together............"
      textButton="Contact us"
      linkButton="contactus"
      
    >
     We believe in “learn one, do one, teach one”. Each new member of Our team is assigned a mentor for their professional, personal and career development. Lets Work Together send us your resume:
      
    </CTAOne>
    <FooterOne />
    </div>
    
   
    </Loader>
  );
};

export default CreativeOnePage;
