function SmScroll(props) {
    return (
        <section className="pb-4  mb-2 sm:mb-0 sm:h-auto   m-0 featProdScroll shadow-md sm:border-b sm:border-b-green-600" >   
        <div className="blackGradientSM rounded-md w-full">
            <div className="flex flex-row justify-between items-baseline " >
                <h1 className=" ml-4 mt-4 sm:mt-2 headingGreen max-w-sm flex items-center-center  text-2xl sm:text-3xl font-bold text-white">
                    Featured Products <br />
                </h1>
                {/*<!-- featured product more button --> */}
            <div className=" hidden sm:block  flex-col items-end mr-4 mt-0 justify-center">
                <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">more</button>
            </div>
            </div>
        {/* <!-- featured product more button --> */}
            <div className=" sm:hidden flex flex-col items-end mr-4 mt-0 ">
                <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">more</button>
            </div>
        </div>
        {/* <!-- product section  --> */}
        <div className=" mb-2 pl-0 ">
            <div className="mt-5 sm:mt-0 w-full flex pt-2 overflow-x-auto space-x-4 justify-start noScroll sm:flex-row sm:justify-evenly ">    
            <article className="relative sm:m-2 m-auto pl-2">
                <div className="w-48 sm:h-52 sm:w-58 ">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover " src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto">
                <div className=" w-48 sm:h-52 sm:w-58 ">
                {/* <!-- insert prduct/section view link here --> */}
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                        <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article> 
            <article className="relative m-auto md:hidden">
                <div className="  w-48 sm:h-52 sm:w-62">
            {/* <!-- insert prduct/section view link here --> */}
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto md:hidden">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto sm:hidden md:hidden lg:block">
                <div className="  w-48 sm:h-52 sm:w-62">
                {/* <!-- insert prduct/section view link here --> */}
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto sm:hidden md:hidden lg:block ">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article> 
            {/* <!-- products for extra large screens  --> */}
            <article className="relative m-auto hidden xl:block">
                <div className="  w-48 sm:h-52 sm:w-62">
                {/* <!-- insert prduct/section view link here --> */}
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto hidden  2xl:block ">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            <article className="relative m-auto hidden  2xl:block ">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article> 
            <article className="relative m-auto hidden  2xl:block ">
                <div className="  w-48 sm:h-52 sm:w-62">
                <a href="http://">
                    <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="/assets/images/Component 14.png" alt="" />
                </a>
                </div> 
            </article>
            </div>
        </div>
        </section>
    )
}

export default SmScroll;