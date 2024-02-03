import '../../App.css'

import MdProdCard from '../ProductCard/MdProdCard'
import SectionHeader from '../Header/SectionHeader';


function SmCateContainer(props) {
  return (
    <section className=" pb-2">
      {/* <!-- product categories for mobile screen --> */}
      <section
        className="categories sm:hidden mt-2 pb-8 shadow-md sm:rounded-md sm:border sm:border-green-600  "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/images/${props.backgroundImage}`})`,
        }}
      >
        <div className="blackGradientSM pb-2  w-full sm:rounded-md sm:mr-2">
          <div className="flex flex-row justify-start ">
            <h1 className="md:hidden max-w-sm ml-2 pl-2  text-3xl mt-2 sm:text-3xl font-bold text-white sm:text-black ">
              Categories <br />
            </h1>
          </div>
          {/* <!-- categories all button --> */}
          <div className=" sm:hidden flex flex-col items-end mr-4 mt-0 ">
            <button className="bg-green-600 text-lg w-16 h-7 font-semibold rounded-md text-white">
              All
            </button>
          </div>
        </div>
        {/* <!-- product section  --> */}
        <div className="mx-auto max-w-screen-xl px-2">
          <div className="mt-2 grid s:grid-cols-3 xs:grid-cols-2 sm:grid-cols-3 sm:overflow-hidden gap-2 items-center ">
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
            <MdProdCard
              border={false}
              dimension={"h-28 w-28"}
              parentClass={"xs:hidden s:block "}
              src="/assets/images/Component 14.png"
            ></MdProdCard>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SmCateContainer;