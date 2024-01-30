import "./App.css";

import Product from './Routes/ProductGrid'
import ProdView from "./Routes/ProdView";

function App() {


  return (
    <ProdView></ProdView>
  )
  // return (
  //   <div>
  //     <Nav></Nav>
  //     <LgCateContainer></LgCateContainer>
  //     <Carousel />
  //     <SmCateContainer></SmCateContainer>
  //     <SmScroll></SmScroll>
  //     <PromoImg></PromoImg>
  //     <SmVerticle></SmVerticle>

  //     <section class="md:flex md:flex-row md:w-full lg:w-full lg:gap-3 justify-between ">
  //       {/* implement some conditional logic here!! */}
  //       <div class="sm:hidden">
  //         <SmVerticle></SmVerticle>
  //       </div>
  //       {/* implement some conditional login here!! */}
  //       <div class="hidden sm:block bg-white w-full border border-y-green-600">
  //         <SectionHeader></SectionHeader>
  //         <div class="bg-white py-2 max-w-screen-xl sm:overflow-hidden px-1">
  //           <div class=" bg-white  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center pb-4">
  //             {/* for all screens*/}
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>
  //             <MdProdCard></MdProdCard>

  //             {/* pass class lg:hidden xl:block */}
  //             <MdProdCard ParentClassName="lg:hidden xl:block"></MdProdCard>

  //             {/* pass class md:hidden xl:block */}
  //             <MdProdCard ParentClassName="md:hidden xl:block"></MdProdCard>
  //           </div>
  //         </div>
  //       </div>

  //       {/* section for larger screens.. logic here? */}
  //       <LgImg></LgImg>
  //     </section>

  //     {/* featured product gird */}
  //     <section className=" bg-white pb-2 sm:pb-2 mt-0  lg:pb-6  shadow-xl mb-0">
  //       <SectionHeader></SectionHeader>
  //       <div class=" bg-white mx-auto max-w-screen-xl px-4 sm:px-4 lg:px-4 ">
  //         <div class="mt-5 grid s:grid-cols-2 xs:grid-cols-1 gap-2 items-center lg:mt-5 sm:grid-cols-4 lg:grid-cols-6 lg:gap-2">
  //           <GridProd />
  //           <GridProd />
  //           <GridProd />
  //           <GridProd />
  //           <GridProd />
  //           <GridProd />
  //         </div>
  //       </div>
  //     </section>

  //     <section className="sm:flex sm:flex-row sm:w-full lg:w-full lg:gap-3 sm:gap-1 justify-between ">
  //       <RespImg></RespImg>
  //       {/* implement some logic? */}
  //       {/* <!-- product section  --> */}
  //       <div class="hidden sm:block bg-white w-full">
  //         <section class=" bg-white  gap-2 rounded-md border border-y-green-600">
  //           <div class="bg-white  max-w-screen-xl sm:overflow-hidden">
  //             <div class=" bg-white  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center pb-1">
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //               ></MdProdCard>
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //               ></MdProdCard>
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //               ></MdProdCard>
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //               ></MdProdCard>

  //               {/* implement some logic */}
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="sm:hidden md:block"
  //               ></MdProdCard>
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="sm:hidden md:block"
  //               ></MdProdCard>

  //               {/* implement some logic */}
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="md:hidden sm:hidden"
  //               ></MdProdCard>

  //               {/* implement some logic */}
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="hidden sm:hidden xl:block"
  //               ></MdProdCard>

  //               {/* implement some logic */}
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="sm:hidden md:hidden lg:block"
  //               ></MdProdCard>
  //               <MdProdCard
  //                 dimension="w-48 sm:h-52 sm:w-58"
  //                 border={true}
  //                 ParentClassName="sm:hidden md:hidden lg:block"
  //               ></MdProdCard>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     </section>

  //     {/* Product display grid */}
  //     <section class="bg-white py-12 text-gray-700 sm:py-9 ">
  //       <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  //         <div class="mx-auto max-w-md text-center">
  //           <h2 class=" text-2xl font-bold sm:text-3xl">
  //             Our featured Aroma Range
  //           </h2>
  //           <p class="mt-4 text-base text-gray-700">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
  //             faucibus massa dignissim tempus.
  //           </p>
  //         </div>
  //         <div class="mt-10 mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
  //           <GridProd Display={true}  />
  //           <GridProd Display={true} />
  //           <GridProd Display={true} />
  //           <GridProd Display={true} />
  //           <GridProd Display={true} />
  //           <GridProd Display={true} />
  //         </div>
  //       </div>
  //     </section>


  //     {/* footer */}
  //     <Footer></Footer>
  //   </div>
  // );
}

export default App;
