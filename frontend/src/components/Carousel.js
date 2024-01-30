import "../App.css";
function Carousel(proprs) {
  return (
    <div>
      <div className="swiper carousel mySwiper h-64 ">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/user/erondu/3000x900"
              alt="apple watch photo"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/collection/190727/3000x900"
              alt="apple watch photo"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/collection/190728/3000x900"
              alt="apple watch photo"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Carousel;
