<<<<<<< HEAD
=======
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// function PauseOnHover() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="h-[100vh]">
//       <div className="slider-container">
//         <Slider {...settings}>
//         <div className=" p-6 lg:h-[300px] h-[500px] rounded-lg  justify-center">
//             <div className="border shadow-md lg:h-[300px] h-[500px] text-center  p-2  rounded-lg">
//               <div className=" px-40 ">
//             <Image 
//             src="/images.jpeg"
//             width={90}
//             height={90}
//             alt="logo"
//           />
//               </div>
          
//               <div className="text-lg font-bold">
//               <h3> Hassle Free Experience</h3>
//               </div>
//               <p>
//                 Let us handle the complexities of your life as we give you the
//                 most user friendly app that can be used by all. No complicated
//                 tabs, no ads, just explore and have fun.{" "}
//               </p>
//             </div>
//           </div>

//           <div className=" p-4 lg:h-[300px] h-[500px] justify-center ">
//             <div className="border shadow-md lg:h-[300px] h-[500px] text-center  p-2 rounded-lg ">
//             <div className=" px-40 ">
//             <Image className="bg-gradient-to-r from-sky-500 to-indigo-500  p-3 shadow-indigo-500/20 rounded-full"
//             src="/categoriesicon.png"
//             width={70}
//             height={70}
//             alt="categoriesicon"
//           />
//           </div>
//             <div className="text-lg font-bold">
//               <h3>20+ Categories </h3>
//               </div>
//               <p>
//                 We offer you the most extensive list of lifestyle categories.
//                 Take your pick from the best restaurants, relaxing spas, classy
//                 salons.
//               </p>
//             </div>{" "}
//           </div>
//           <div className=" p-4 lg:h-[300px] h-[500px]">
//             <div className="border shadow-md lg:h-[300px] h-[500px]  p-2 text-center rounded-lg">
//             <div className="px-40 ">
//             <Image className="bg-gradient-to-r from-violet-500 to-fuchsia-500  p-3 shadow-indigo-500/50 rounded-full"
//             src="/unlimited1.png"
//             width={70}
//             height={70 }
//             alt="logo"
//           />
//           </div>
//             <div className="text-lg font-bold">
//               <h3>Unlimited Uses </h3>
//               </div>
//               <p>
//                 Make the most of the Vaamoz app as we offer you the best deals
//                 and offers that you can claim not just once, nor twice, but
//                 unlimited times.{" "}
//               </p>
//             </div>{" "}
//           </div>
//           <div className=" p-4 lg:h-[300px] h-[500px] ">
//             <div className="border shadow-md lg:h-[300px] h-[500px] p-2 text-center rounded-lg">
//             <div className="px-40 ">
//             <Image className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 shadow-indigo-400/50 rounded-full"
//             src="/big.brnad.png"
//             width={70}
//             height={70}
//             alt="logo"
//           />
//           </div>
//           <div className="text-lg font-bold">
//               <h3>Big Brands</h3>
//             </div>
//               <p>
//                 It’s time to make a lifestyle change as we bring you the biggest
//                 brands like Radisson, JCO, Arbab, Sohum Spa, Behrouz Biryani,
//                 and many more for you to choose from.{" "}
//               </p>
//             </div>{" "}
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default PauseOnHover;

>>>>>>> 447222d (vaamoz)
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 447222d (vaamoz)

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
<<<<<<< HEAD
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="h-full">
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" p-4 h-[150px] ">
            <div className="border shadow-md h-[150px] p-2 text-center rounded-lg">
              <h3> Hassle Free Experience</h3>
              <p>
                Let us handle the complexities of your life as we give you the
                most user friendly app that can be used by all. No complicated
=======
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[100vh]">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="p-6 lg:h-[300px] h-[500px] rounded-lg  justify-center">
            <div className="border shadow-md lg:h-[300px] h-[500px] text-center  p-2  rounded-lg">
              <div className="px-40 ">
                <Image 
                  src="/images.jpeg"
                  width={90}
                  height={90}
                  alt="logo"
                />
              </div>
              <div className="text-lg font-bold">
                <h3> Hassle Free Experience</h3>
              </div>
              <p>
                Let us handle the complexities of your life as we give you the
                most user-friendly app that can be used by all. No complicated
>>>>>>> 447222d (vaamoz)
                tabs, no ads, just explore and have fun.{" "}
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <div className=" p-4 h-[150px] ">
            <div className="border shadow-md h-[150px] p-2 text-center rounded-lg">
              <h3>20+ Categories </h3>
=======

          <div className="p-4 lg:h-[300px] h-[500px] justify-center ">
            <div className="border shadow-md lg:h-[300px] h-[500px] text-center  p-2 rounded-lg ">
              <div className="px-40 ">
                <Image className="bg-gradient-to-r from-sky-500 to-indigo-500  p-3 shadow-indigo-500/20 rounded-full"
                  src="/categoriesicon.png"
                  width={70}
                  height={70}
                  alt="categoriesicon"
                />
              </div>
              <div className="text-lg font-bold">
                <h3>20+ Categories </h3>
              </div>
>>>>>>> 447222d (vaamoz)
              <p>
                We offer you the most extensive list of lifestyle categories.
                Take your pick from the best restaurants, relaxing spas, classy
                salons.
              </p>
            </div>{" "}
          </div>
<<<<<<< HEAD
          <div className=" p-4 h-[150px] ">
            <div className="border shadow-md h-[150px] p-2 text-center rounded-lg">
              <h3>Unlimited Uses </h3>
=======

          <div className="p-4 lg:h-[300px] h-[500px]">
            <div className="border shadow-md lg:h-[300px] h-[500px]  p-2 text-center rounded-lg">
              <div className="px-40 ">
                <Image className="bg-gradient-to-r from-violet-500 to-fuchsia-500  p-3 shadow-indigo-500/50 rounded-full"
                  src="/unlimited1.png"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </div>
              <div className="text-lg font-bold">
                <h3>Unlimited Uses </h3>
              </div>
>>>>>>> 447222d (vaamoz)
              <p>
                Make the most of the Vaamoz app as we offer you the best deals
                and offers that you can claim not just once, nor twice, but
                unlimited times.{" "}
              </p>
            </div>{" "}
          </div>
<<<<<<< HEAD
          <div className=" p-4 h-[150px] ">
            <div className="border shadow-md h-[150px] p-2 text-center rounded-lg">
              <h3>Big Brands</h3>
=======

          <div className="p-4 lg:h-[300px] h-[500px] ">
            <div className="border shadow-md lg:h-[300px] h-[500px] p-2 text-center rounded-lg">
              <div className="px-40 ">
                <Image className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 shadow-indigo-400/50 rounded-full"
                  src="/big.brnad.png"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </div>
              <div className="text-lg font-bold">
                <h3>Big Brands</h3>
              </div>
>>>>>>> 447222d (vaamoz)
              <p>
                It’s time to make a lifestyle change as we bring you the biggest
                brands like Radisson, JCO, Arbab, Sohum Spa, Behrouz Biryani,
                and many more for you to choose from.{" "}
              </p>
            </div>{" "}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PauseOnHover;
