import MdProdCard from "../ProductCard/MdProdCard";

function SmVerticle(props) {
  return (
    <section className="featProdVertical1 pb-4 mt-2 mb-2  sm:pb-6  shadow-xl sm:border-y sm:border-y-green-600 ">
      <div className="blackGradientSM rounded-md w-full">
        <div className="flex flex-row justify-between items-baseline ">
          <h1 className=" ml-4 mt-4 headingGreen max-w-sm flex items-center-center  text-2xl sm:text-3xl font-bold text-white">
            {props.title} <br />
          </h1>
          {/* {/* <!-- featured product more button --> */}
          <div className="hidden flex sm:block  flex-col items-end mr-4 mt-0 justify-center">
            <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">
              more
            </button>
          </div>
        </div>
        {/* <!-- featured product more button --> */}
        <div className="block sm:hidden flex flex-col items-end mr-4 mt-0 ">
          <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">
            more
          </button>
        </div>
      </div>
      {/* <!-- product section  --> */}
      <div className="mx-auto sm:mx-0 w-full sm:overflow-hidden px-4 ">
        <div className="mt-5 grid s:grid-cols-2 xs:grid-cols-1 sm:flex sm:flex-row sm:justify-evenly gap-2 items-center">
          <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          {/* <!-- hidden for xs screens --> */}
          <MdProdCard
            ParentClassName="xs:hidden s:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          {/* <!-- add more items that will appear in medium screens  --> */}
          <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          {/* <!-- add more items that will appear in large screens  --> */}
          <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          {/* <!-- items for extra lage screens  --> */}
          <MdProdCard
            ParentClassName="hidden xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          {/* for extra lage screens */}
          <MdProdCard
            ParentClassName="hidden 2xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>
          <MdProdCard
            ParentClassName="hidden 2xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>
        </div>
      </div>
    </section>
  );
}

export default SmVerticle;
