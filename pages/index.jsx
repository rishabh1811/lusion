import { useEffect, useRef } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import Offers from "../components/Offers";
import ProductsWidget from "../components/ProductsWidget";
import ScrollHere from "../components/ScrollHere";
import Topbar from "../components/Topbar"


export default function Home() {

  return (<>
    <Topbar />
    <Navbar />
    <Carousel />
    <ProductsWidget />
    <Offers />
    <NewArrivals />
    <Footer />




    {/* <ScrollHere /> */}
  </>)
}


