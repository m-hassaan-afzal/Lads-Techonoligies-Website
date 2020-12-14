import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import PriceTablesTwo from "../../components/PriceTables/PriceTablesTwo";
import FooterOne from "../../components/Footer/FooterOne";

const PricingTables = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Pricing Tables" />
    <PriceTablesTwo
      title="PRICING DEFAULT"
      tagline="Choose your plan"
      btnType="circle"
    />
    <PriceTablesTwo
      title="PRICING ROUNDED"
      tagline="Choose your plan"
      btnType="circle"
      tableType="rounded"
    />
    <FooterOne />
  </Loader>
);

export default PricingTables;
