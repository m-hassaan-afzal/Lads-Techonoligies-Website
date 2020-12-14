import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataCorporate from "../../data/Slider/corporate-business-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSingle from "../../components/Hero/HeroSliderSingle";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import OurTeamThree from "../../components/Team/OurTeamThree";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const CorporateBusiness = () => (
  <Loader>
    <HeaderOne />
    <HeroSliderSingle data={dataCorporate} />
    <WhoWeAreThree />
    <Portfolio filter="true" layout="wide" columns="two" items="6"/>
    <OurTeamThree />
    <TabsIconSection title="What We Offer" tagline="We Turn Heads" />
    <TestimonialsOne title="TESTIMONIALS" tagline="Happy clients" />
    <BlogSlider />
    <FooterOne />
  </ Loader>
);

export default CorporateBusiness;
