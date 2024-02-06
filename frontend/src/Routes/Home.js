import "../App.css";

import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import LgCateContainer from "../components/Categories/LgCateContainer";
import Carousel from "../components/Carousel/Carousel";
import SmCateContainer from "../components/Categories/SmCateContainer";
import SmScroll from "../components/FeatProdts/SmScroll";
import PromoImg from "../components/Promotion/PromoImg";
import SmVerticle from "../components/FeatProdts/SmVerticle";
import SectionHeader from "../components/Header/SectionHeader";
import MdProdCard from "../components/ProductCard/MdProdCard";
import LgImg from "../components/Promotion/LgImg";
import GridProd from "../components/ProductCard/GridProd";
import RespImg from "../components/Promotion/RespImg";
import GridHeader from "../components/Header/GridHeader";

import Footer from "../components/Footer/Footer";
import OfferSlider from "../components/Carousel/OfferSlider";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Nav></Nav>
      <LgCateContainer></LgCateContainer>
      <Carousel isRounded={false} autoPlay={true}></Carousel>
      <SmCateContainer></SmCateContainer>
      <SmScroll title="New Products"></SmScroll>
      <PromoImg
        src="/assets/images/image.webp"
        alt="skillacart at skillacart"
      ></PromoImg>
      <SmVerticle title="Featured Products"></SmVerticle>
      <OfferSlider autoPlay={true} effect="slide"></OfferSlider>
      <section class="md:flex md:flex-row md:w-full lg:w-full lg:gap-3 justify-between ">
        {/* implement some conditional logic here!! */}
        <div class="sm:hidden">
          <SmVerticle title="Trending Products"></SmVerticle>
        </div>

        {/* implement some conditional login here!! */}
        <div class="hidden sm:block bg-white w-full border border-y-green-600">
          <SectionHeader title="Specially For You"></SectionHeader>
          <div class="bg-white py-2 max-w-screen-xl sm:overflow-hidden px-1">
            <div class=" bg-white  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center pb-4">
              {/* for all screens*/}
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>
              <MdProdCard src="/assets/images/Component 14.png"></MdProdCard>

              {/* pass class lg:hidden xl:block */}
              <MdProdCard
                ParentClassName="lg:hidden xl:block"
                src="/assets/images/Component 14.png"
              ></MdProdCard>

              {/* pass class md:hidden xl:block */}
              <MdProdCard
                ParentClassName="md:hidden xl:block"
                src="/assets/images/Component 14.png"
              ></MdProdCard>
            </div>
          </div>
        </div>

        {/* section for larger screens.. logic here? */}
        <LgImg></LgImg>
      </section>

      {/* featured product gird */}
      <section className=" bg-white pb-2 sm:pb-2 mt-0  lg:pb-6  shadow-xl mb-0">
        <SectionHeader title="New Arrivals"></SectionHeader>
        <div class=" bg-white mx-auto max-w-screen-xl px-4 sm:px-4 lg:px-4 ">
          <div class="mt-5 grid s:grid-cols-2 xs:grid-cols-1 gap-2 items-center lg:mt-5 sm:grid-cols-4 lg:grid-cols-6 lg:gap-2">
            <GridProd />
            <GridProd />
            <GridProd />
            <GridProd />
            <GridProd />
            <GridProd />
          </div>
        </div>
      </section>

      <section className="sm:flex sm:flex-row sm:w-full lg:w-full lg:gap-3 sm:gap-1 justify-between ">
        <RespImg></RespImg>
        {/* implement some logic? */}
        {/* <!-- product section  --> */}
        <div class="hidden sm:block bg-white w-full">
          <section class=" bg-white  gap-2 rounded-md border border-y-green-600">
            <div class="bg-white  max-w-screen-xl sm:overflow-hidden">
              <div class=" bg-white  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center pb-1">
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                ></MdProdCard>
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                ></MdProdCard>
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                ></MdProdCard>
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                ></MdProdCard>

                {/* implement some logic */}
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="sm:hidden md:block"
                ></MdProdCard>
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="sm:hidden md:block"
                ></MdProdCard>

                {/* implement some logic */}
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="md:hidden sm:hidden"
                ></MdProdCard>

                {/* implement some logic */}
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="hidden sm:hidden xl:block"
                ></MdProdCard>

                {/* implement some logic */}
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="sm:hidden md:hidden lg:block"
                ></MdProdCard>
                <MdProdCard
                  dimension="w-48 sm:h-52 sm:w-58"
                  border={true}
                  ParentClassName="sm:hidden md:hidden lg:block"
                ></MdProdCard>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Product display grid */}
      <section class="bg-white py-12 text-gray-700 sm:py-9 ">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <GridHeader
              genericTitle={true}
              text="Selected products with love"
            ></GridHeader>
          </div>
          <div class="mt-10 mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
