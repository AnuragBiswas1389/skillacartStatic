function MdProdCard(props) {
  let dimension;
  if (!props.dimension) {
    dimension = "h-60 w-48 ";
  } else {
    dimension = props.dimension;
  }
  console.log(dimension)
  return (
    <div
      className={`relative m-auto rounded-md shadow-xl 
      ${
        props.border ? "border border-green-600 " : " "
      }  
      ${props.ParentClassName}`}
    >
      <div className={`aspect-square overflow-hidden ${dimension}`}>
        <a href="http://">
          <img
            className="rounded-lg h-full w-full object-cover"
            src="/assets/images/Component 14.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

export default MdProdCard;
