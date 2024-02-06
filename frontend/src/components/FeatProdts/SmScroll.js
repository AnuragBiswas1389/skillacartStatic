import MdProdCard from "../ProductCard/MdProdCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function SmScroll(props) {
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
    <section className="pb-4  mb-2 sm:mb-0 sm:h-auto  m-0 featProdScroll">
      <div className="rounded-md w-full">
        <div className="flex flex-row justify-between items-baseline ">
          <h1 className=" ml-4 mt-4 sm:mt-2 max-w-sm flex items-center-center  text-3xl font-bold text-green-600">
            {props.title} <br />
          </h1>
          {/*<!-- featured product more button --> */}
          <div className="  flex-col items-end mr-4 mt-0 justify-center">
            <button
              className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white"
              onClick={handelButtonClick}
            >
              more
            </button>
          </div>
        </div>
      </div>
      {/* <!-- product section  --> */}
      <div className=" mb-2 pl-0 ">
        <div className="mt-5 pl-2 sm:mt-0 w-full flex pt-2 overflow-x-auto space-x-auto  justify-start noScroll sm:flex-row sm:justify-evenly ">
          {isloading &&
            Array.from({ length: 9 }, (_, i) => (
              <div className={` relative m-auto rounded-md`}>
                <div
                  className={`aspect-square overflow-hidden h-60 w-40 sm:w-48 ss:w-48 rounded-md mx-4 `}
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
                ${item.id <= 6 && item.id < 7 ? "  lg:block " : ""}
                ${item.id <= 7 ? "" : " 2xl:block "}
               
                `}
                dimension="h-60 w-40 sm:w-48 ss:w-48 mx-1"
              ></MdProdCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SmScroll;
