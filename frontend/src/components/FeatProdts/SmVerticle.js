import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import MdProdCard from "../ProductCard/MdProdCard";
import { useNavigate } from "react-router-dom";

function SmVerticle(props) {
  const [productsData, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.29.174:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();

  function handelButtonClick() {
    navigate("/product", { replace: false });
    console.log("button clicked");
  }

  return (
    <section className="featProdVertical1 pb-4 mt-2 mb-2  sm:pb-6  ">
      <div className=" rounded-md w-full">
        <div className="flex flex-row justify-between items-baseline ">
          <h1 className=" mt-4 ml-4 sm:mt-2 max-w-sm flex items-center-center  text-3xl text-green-600 font-bold">
            {props.title} <br />
          </h1>
          {/* <!-- featured product more button --> */}
          <div className={` flex-col items-end mr-4 mt-0 justify-center`}>
            <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">
              more
            </button>
          </div>
        </div>
      </div>
      {/* <!-- product section  --> */}
      <div className="mx-auto sm:mx-0 w-full sm:overflow-hidden px-4 ">
        <div className="mt-5 grid s:grid-cols-2 xs:grid-cols-1 sm:flex sm:flex-row sm:justify-evenly gap-2 items-center">
          {isloading &&
            Array.from({ length: 8 }, (_, i) => (
              <div className={` relative m-auto rounded-md`}>
                <div
                  className={`aspect-square overflow-hidden h-60 w-40 sm:w-48 ss:w-48 rounded-sm mx-auto
                    ${i < 4 ? " " : "block"}
                    ${i <= 4 && i < 4 ? "hidden sm:block" : ""}
                  `}
                >
                  <Skeleton
                    width={"100%"}
                    height={"100%"}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  ></Skeleton>
                </div>
              </div>
            ))}

          {productsData.map((item) => {
            console.log(item.id);
            return (
              <MdProdCard
                src={item.src}
                alt={item.name}
                ParentClassName={`
                ${item.id < 4 ? " " : "sm:hidden"}
                ${item.id <= 4 && item.id < 5 ? "md:block " : ""}
                ${item.id <= 6 && item.id < 7 ? " hidden lg:block " : ""}
                ${item.id <= 7 ? "" : " 2xl:block "}
               
                `}
                dimension="h-60 w-40 sm:w-48 ss:w-48"
              ></MdProdCard>
            );
          })}

          {/* <MdProdCard
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
          ></MdProdCard> */}

          {/* <!-- hidden for xs screens --> */}
          {/* <MdProdCard
            ParentClassName="xs:hidden s:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- add more items that will appear in medium screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- add more items that will appear in large screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- items for extra lage screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* for extra lage screens */}
          {/* <MdProdCard
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
          ></MdProdCard> */}
        </div>
      </div>
    </section>
  );
}

export default SmVerticle;
