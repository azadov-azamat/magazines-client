import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Brands from "@/components/homes/home-1/Brands";

import Categories from "@/components/homes/home-1/Categories";

import Hero from "@/components/homes/home-1/Hero";
import Lookbook from "@/components/homes/home-1/Lookbook";
import Marquee from "@/components/homes/home-1/Marquee";
import Products from "@/components/homes/home-1/Products";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Market Lochin - Ultimate Reactjs Ecommerce Template",
  description: "Market Lochin - Ultimate Reactjs Ecommerce Template",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <Topbar1 /> */}
      <Header1 />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <Lookbook />
      <Brands />
      <Features />
      <Footer1 />
    </>
  );
}
