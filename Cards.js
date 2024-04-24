// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Cards() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="h-full w-1/2">
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div className=" p-4 h-[150px] ">
//             <div className="border shadow-md h-[400px] p-2 text-center rounded-lg">
//               <div className="p-8">
//                 <h3>
//                   <sup>₹</sup> 900/1 Year
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className=" p-4 h-[150px] ">
//             <div className="border shadow-md h-[400px] p-2 text-center rounded-lg">
//               <div className="p-8">
//                 <h3>
//                   <sup>₹</sup> 900/1 Year
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* <div className=" p-4 h-[150px] ">
//             <div className="border shadow-md h-[400px] p-2 text-center rounded-lg">
//               <div className="p-8">
//                 <h3>
//                   <sup>₹</sup> 900/1 Year
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className=" p-4 h-[150px] ">
//             <div className=" p-4 h-[150px] ">
//               <div className="border shadow-md h-[400px] p-2 text-center rounded-lg">
//                 <div className="p-8">
//                   <h3>
//                     <sup>₹</sup> 900/1 Year
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Cards;




// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;

