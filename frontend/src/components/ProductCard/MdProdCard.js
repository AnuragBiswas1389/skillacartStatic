import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";

function MdProdCard(props) {
  
  let dimension;
  if (!props.dimension) {
    dimension = "h-60 w-48 ";
  } else {
    dimension = props.dimension;
  }

  return (
    <div
      className={`relative m-auto rounded-md shadow-xl 
      ${props.border ? "border border-green-600 " : " "}  
      ${props.ParentClassName} ${props.parentClassName}`}
    >
      <Link to={props.href}>
        <div className={`aspect-square overflow-hidden ${dimension}`}>
          <LazyLoadImage
            src={props.src}
            width="100%"
            height="100%"
            placeholderSrc="/assets/images/DefPlaceholder.svg"
            style={{
              borderRadius: "0.5rem",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          {/* <img
            className="rounded-lg h-full w-full object-cover"
            src={`${props.src}`}
            alt={`${props.alt}`}
          ></img> */}
        </div>
      </Link>
    </div>
  );
}

export default MdProdCard;
