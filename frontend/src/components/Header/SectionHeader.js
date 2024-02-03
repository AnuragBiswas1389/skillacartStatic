import '../../App.css'

function SectionHeader(props) {
  return (
    <section className=" bg-white pb-2 mb-2 gap-2 ml-4  sm:pb-2 lg:pb-2 ">
      <div className="rounded-md w-full">
        <div className="flex flex-row justify-between items-baseline ">
          <h1 className=" mt-4 sm:mt-2 max-w-sm flex items-center-center  text-3xl sm:text-green-600 font-bold text-black">
            {`${props.title}`} <br />
          </h1>
          {/* <!-- featured product more button --> */}
          <div className= {`${props.inlineButton?"block":"hidden"} sm:block  flex-col items-end mr-4 mt-0 justify-center`}>
            <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">
              more
            </button>
          </div>
        </div>
        {/* <!-- featured product more button --> */}
        <div className={`${props.inlineButton?"hidden":"block"} sm:hidden flex flex-col items-end mr-4 mt-0`}>
          <button className="bg-green-600 text-lg w-16 h-8 font-bold rounded-md text-white">
            more
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;