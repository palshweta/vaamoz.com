import React from "react";
import Image from "next/image";


const Brands = () => {
  return (
<<<<<<< HEAD
    <>
    <div className="">
    <div className="flex-row justify-center pt-56">
      <div className="flex justify-center ">
      <p className="text-3xl font-extrabold">We bring you the most powerful app you’ll need </p>
      </div>

        <p className="text-base p-2 text-center">No need to juggle between 10 different apps</p>
    </div>

  
      <div className="p-16 gap-5 flex flex-wrap justify-center ">      
          <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
            <h2 className="text-[#212529] text-[15px]">Huge Savings</h2>
          </div>
        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
          
            <h2 className="text-[#212529] text-[15px] justify-end">
              One Stop Shop
            </h2>
        </div>
        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
          
            <h2 className="text-[#212529] text-[15px] justify-end">
              Discounts on the Total Bill
            </h2>
          </div>

        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
          
            <h2 className="text-[#212529] text-[15px] justify-end">
              Unlimited offers
            </h2>
          </div>
        </div>
      <div className="flex justify-center p-20">
        <div className="relative w-64 h-64">
     
        <div className= "pt-10">
          <div className=" text-sm p-2 bg-gradient-to-r from-[#641a79] to-[#2f0749] text-white rounded-md">
          <button className="">Explore more brands on vaamoz</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
=======

    <div className="">
        <div className="flex justify-center p-16 ">
          <p className="text-3xl font-extrabold">We bring you the most powerful app you’ll need </p>
        </div>

        <p className="text-base p-2 text-center">No need to juggle between 10 different apps</p>

      <div className="p-16 gap-5 flex flex-wrap justify-center ">
        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
          <div className="p-4 rounded-full">
          <Image className="bg-[#f03858] p-2 shadow-[#f03858] "
          src="/1_2.png"
         width={70}
         height={70}
         alt="."
          />
         </div>
          <h2 className="text-[#212529] text-[15px] p-6">Huge Savings</h2>
        </div>
        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
        <div className="p-4 rounded-full">
          <Image className="bg-[#693cb8] p-2  shadow-[#693cb8]"
          src="/2_2.png"
         width={70}
         height={70}
         alt="."
          />
         </div>
          <h2 className="text-[#212529] text-[15px] p-2">
            One Stop Shop
          </h2>
        </div>
        <div className="p-10 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
        <div className=" px-10 rounded-full">
          <Image className="bg-[#4dd1ed] p-2  shadow-[#4dd1ed] "
          src="/3.png"
         width={70}
         height={70}
         alt="."
          />
         </div>
          <h2 className="text-[#212529] text-[15px] justify-end p-6">
            Discounts on the Total Bill
          </h2>
        </div>

        <div className="p-14 bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
        <div className="px-4 rounded-full">
          <Image className="p-2 bg-[#ffc107]  shadow-[#ffc107] "
          src="/4.png"
         width={70}
         height={70}
         alt="."
          />
         </div>
          <h2 className="text-[#212529] text-[15px] justify-end p-6">
            Unlimited offers
          </h2>
        </div>
      </div>

        <div className="flex justify-center px-40">
          <Image
            src={"/brands2.png"} alt={"."} width={100} height={100} 
            layout="responsive" 
             />
          </div>

          <div className="flex justify-center p-10">
          {/* <div className="relative w-64 h-64"> */}
            <div className="p-2 text-sm text-white rounded-md">
              <button className="glow">Explore more brands on vaamoz</button>
              </div>
            {/* </div> */}
          </div>

        </div>


>>>>>>> 447222d (vaamoz)
  );
};

export default Brands;

