import ReviewImg from "../ReviewImg/ReviewImg";
import StarRating from "../../Rating/starRating/StarRating";

function ReviewCard(props) {
  return (
    <ul class="mt-1">
      <li class="py-2 text-left border px-4 m-2 shadow-md border-green-600 rounded-md">
        <div class="flex items-start">
          {/* <!-- user profile image --> */}
          <img
            class="block h-12 mt-4 w-12  max-w-full flex-shrink-0 rounded-full align-middle"
            src="https://componentland.com/images/Ju6-1negUEjTnBKw_ZP4r.png"
            alt=""
          />
          <div class="ml-6 overflow-x-auto">
            <div class="flex items-center">
              {/* <!-- user rating section --> */}
              <StarRating rating={props.rating}></StarRating>
            </div>
            {/* <!-- user name of the profile --> */}
            <p class="mt-1 text-md font-bold text-gray-900  ">John Lester</p>
            {/* <!-- date of the review --> */}
            <p class="mt-1 text-sm text-gray-600">March 01, 2022</p>
          </div>
        </div>
        {/*  {/* <!-- user review text here --> */}
        <section>
          <p class="mt-5 text-base text-gray-900 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sapiente ab dolores, ad dignissimos perspiciatis.
          </p>
        </section>
        {/* <!-- user uploaded review image section --> */}
        <section class="flex pt-2 w-full overflow-x-auto space-x-6 noScroll ">
          <ReviewImg></ReviewImg>
          <ReviewImg></ReviewImg>
          <ReviewImg></ReviewImg>
          <ReviewImg></ReviewImg>
          <ReviewImg></ReviewImg>
        </section>
      </li>
    </ul>
  );
}


export default ReviewCard;