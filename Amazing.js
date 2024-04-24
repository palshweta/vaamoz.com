import React from "react";

const Amazing = () => {
  return (
    <section>
      <div className="flex h-1/2 w-1/2 px-20 py-20">
        <div className="text-[#0084ff] font-bold text-xl">
          <p>EXPLORE AMAZING FEATURES</p>
          <div className="">
            <div className="text-2xl text-black">
              <p>What’s More</p>
              <div className="text-[#505b6d] text-base font-normal">
                <p>
                  We bring you promo-codes from some of the biggest brands
                  delivering you the finest quality of food and products that
                  will make you want more. The best part is that all the
                  promo-codes are updated weekly. So keep checking out our
                  ‘Wowchers’ section for new promo-codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 py-52 h-1/2 w-1/2">
        <div className=" text-[#0084ff] text-lg font-bold ">
          <p>TAKE A LOOK AT OUR</p>
        </div>
        <div className="text-2xl font-bold">
          <p>Some Facts</p>
          <div className="text-base font-normal ">
            <p>
              Our easy to use savings app has been carefully curated to give you
              a lifestyle experience unlike any other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amazing;
