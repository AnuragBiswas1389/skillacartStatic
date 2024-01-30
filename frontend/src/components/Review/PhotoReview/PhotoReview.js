function PhotoReview(props) {
    return (
      <section>
        <div class="pl-4 sm:pl-20 text-left   ">
          <h1 class="max-w-sm   text-2xl sm:text-3xl font-bold text-black">
            Review with photos
            <br />
          </h1>
          {/* <!-- user uploaded review image section --> */}
          <section class="flex pt-2 w-full overflow-x-auto space-x-6 noScroll">
            <section class="flex-shrink-0 rounded-md border-2 w-40 h-40 ">
              <img
                src="https://componentland.com/images/JHxMnVrtPMdcNU1s_7g7f.png"
                class="bg-purple-200 "
              />
            </section>
            <section class="flex-shrink-0 rounded-md border-2 w-40 h-40 ">
              <img
                src="https://componentland.com/images/JHxMnVrtPMdcNU1s_7g7f.png"
                class="bg-purple-200 "
              />
            </section>
            <section class="flex-shrink-0 rounded-md border-2 w-40 h-40 ">
              <img
                src="https://componentland.com/images/JHxMnVrtPMdcNU1s_7g7f.png"
                class="bg-purple-200 "
              />
            </section>
            <section class="flex-shrink-0 rounded-md border-2 w-40 h-40 ">
              <img
                src="https://componentland.com/images/JHxMnVrtPMdcNU1s_7g7f.png"
                class="bg-purple-200  "
              />
            </section>
          </section>
        </div>
      </section>
    );
}

export default PhotoReview;