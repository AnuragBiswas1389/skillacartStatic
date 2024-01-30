import '../../App.css'


function SmCateContainer(props) {
  return (
  <section className=" pb-2">
  {/* <!-- product categories for mobile screen --> */}
  <section className="categories sm:hidden mt-2 pb-8 shadow-md sm:rounded-md sm:border sm:border-green-600  ">   
    <div className="blackGradientSM pb-2  w-full sm:rounded-md sm:mr-2">
      <div className="flex flex-row justify-start " >
          <h1 className="md:hidden max-w-sm ml-2 pl-2  text-2xl mt-2 sm:text-3xl font-bold text-white sm:text-black">
              Categories <br />
          </h1>
      </div>
      {/* <!-- categories all button --> */}
      <div className=" sm:hidden flex flex-col items-end mr-4 mt-0 ">
          <button className="bg-green-600 text-lg w-16 h-7 font-semibold rounded-md text-white">All</button>
      </div>
    </div> 
    {/* <!-- product section  --> */}
    <div className="mx-auto max-w-screen-xl px-2">
      <div className="mt-5 grid s:grid-cols-3 xs:grid-cols-2 sm:grid-cols-3 sm:overflow-hidden gap-2 items-center ">
        <article className="relative m-auto md:border md:border-green-600 md:shadow-md rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28 bg-white rounded-lg ">
          <a href="http://">
            <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover " src="../images/Component 14.png" alt="" />
          </a>
          </div> 
        </article>
        <article className="relative m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28 bg-white rounded-lg  ">
          <a href="http://">
            <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover " src="../images/Component 14.png" alt="" />
          </a>
          </div> 
        </article>
        <article className="relative m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
            <div className="aspect-square overflow-hidden  h-28 w-28">
              <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="../images/Component 14.png" alt="" />
            </a>
            </div> 
        </article>
        <article className="relative sm:m-2 m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
            <div className="aspect-square overflow-hidden  h-28 w-28 ">
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover " src="../images/Component 14.png" alt="" />
            </a>
            </div> 
        </article>
        <article className="relative m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28">
            {/* <!-- insert prduct/section view link here --> */}
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="../images/Component 14.png" alt="" />
            </a>
          </div> 
        </article>
        <article className="relative m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28">
            {/* <!-- insert prduct/section view link here --> */}
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="../images/Component 14.png" alt="" />
            </a>
          </div> 
        </article>
        <article className="relative m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28">
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="../images/Component 14.png" alt="" />
            </a>
          </div> 
        </article>
        <article className="relative sm:m-2 m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28 ">
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover " src="../images/Component 14.png" alt="" />
            </a>
          </div> 
        </article>
        <article className="relative xs:hidden s:block   m-auto sm:border sm:border-green-600 sm:shadow-xl rounded-md">
          <div className="aspect-square overflow-hidden  h-28 w-28 ">
            {/* <!-- insert prduct/section view link here --> */}
            <a href="http://">
              <img className="  group-hover:scale-125 rounded-lg h-full w-full object-cover transition-all duration-300" src="../images/Component 14.png" alt="" />
            </a>
          </div> 
        </article>
        </div>
      </div>
  </section>
  </section>
  );
}

export default SmCateContainer;