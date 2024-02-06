import { useState, useEffect } from "react";
import LgCateItem from "./LgCateItem";

import "../../App.css";

function LgCateContainer(props) {
  const [categoryData, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="hidden sm:block flex-row mb-2">
      <div className="mt-0 flex flex-row overflow-hidden gap-2 items-center ">
        {categoryData.map((item) => {
          return (
            <LgCateItem
              name={item.name}
              src={item.src}
              id={item.id}
              href={item.href}
              key={item.id}
            ></LgCateItem>
          );
        })}
      </div>
    </section>
  );
}

export default LgCateContainer;
