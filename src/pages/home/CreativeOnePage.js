import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpg";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import OurTeam from "../../components/Team/OurTeam";
import ContactUs from "../../components/ContactUs/ContactUs";
import CTAOne from "../../components/CTA/CTAOne";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreOne from "../../components/WhoWeAre/WhoWeAreOne";


const CreativeOnePage = () => {
  const home = useRef();
  const about = useRef();
  const service = useRef();
  const team = useRef();
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
     <WhoWeAreOne
      title="We're Scoda Agency"
      tagline="THE WAY WE WORK IS FUN"
      verticalWord="Design"
      horizontalWord="Creative."
    >
      We are a fully in-house digital agency focusing on branding, marketing,
      web design and development with clients ranging from start-ups. We pride
      ourselves on partnering with clients in order to give the most transparent
      and educational experience.
    </WhoWeAreOne>
       
      </div> 
      
        <OurServices
          title="What We Do"
          tagline="We develop big ideas that sell."
          serviceImg={serviceOneImg}
          ref={service}
        />
    

       <div ref={team}>
      <OurTeam title="MEET OUR TEAM" tagline="WE ARE STRONGER" bg="white"   />
      
      </div>
    
      

        <div ref={contact}>
         
      <CTAOne
      tagline="careers"
      title="Let's write your story, together."
      textButton="Contact us"
      linkButton="contactus"
      
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAOne>
    <FooterOne />
    </div>
    
   
    </Loader>
  );
};

export default CreativeOnePage;
