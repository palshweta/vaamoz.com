import React from "react";
import Image from "next/image";
import "./styles.css";

const MainContent = () => {
  return (
<<<<<<< HEAD
    <section className="flex pt-[16vh] bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')]  bg-cover bg-no-repeat p-6  ">
      <div className=" flex flex-col p-8  gap-4 lg:w-1/2 w-full ">
        <div className=" text-[50px] FFFFF font-extrabold  text-white ">
=======
    <section className="flex flex-col lg:flex-row h-[100vh] lg:w-full bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')]  bg-cover bg-no-repeat p-6  ">
      <div className=" flex flex-col pt-16 gap-4 lg:w-1/2 w-full ">
        <div className="text-[31px] lg:text-[50px] font-extrabold text-white ">
>>>>>>> 447222d (vaamoz)
          <p className="  text-[#ffc849] ">ONE MEMBERSHIP</p>
          <p className=" ">FOR ALL YOUR </p>
          <p className=" ">LIFESTYLE NEEDS </p>
        </div>
<<<<<<< HEAD
        <div className="text-[25px]   text-white">
=======
        <div className="lg:text-[25px]   text-white">
>>>>>>> 447222d (vaamoz)
          <div className="text-[#ffc849] font-extrabold">
            <p className="">800+ Brands</p>
            <p className="">Upto 60% OFF on the total bill</p>
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-[30px] font-bold text-white pt-20 flex gap-4 flex-wrap">
=======
        <div className="lg:text-[22px] font-bold text-white  pt-2  lg:pt-20 flex gap-4 flex-wrap">
>>>>>>> 447222d (vaamoz)
          <p>
            Membership Starting At{" "}
            <span className="text-[#ffc849]">&#8377; 249</span>{" "}
          </p>
<<<<<<< HEAD
          <button className=" text-[12px]  px-10 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse">
=======
          <button className=" text-[22px] px-10 py-2 rounded-3xl  bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse">
>>>>>>> 447222d (vaamoz)
            BUY NOW
          </button>
        </div>

        <div className="flex justify-start gap-6  ">
          <Image
            src="/apple-store-img.png"
            width={100}
            height={100}
<<<<<<< HEAD
            alt="logo"
=======
            alt="logo" 
>>>>>>> 447222d (vaamoz)
          />
          <Image src="/playstore-app.png" width={100} height={100} alt="logo" />
        </div>
      </div>
<<<<<<< HEAD
      <Image
=======
      <Image className=""
>>>>>>> 447222d (vaamoz)
        src="/shopping.png"
        width={100}
        height={100}
        alt="shopping"
<<<<<<< HEAD
        className="w-1/2 h-1/2 "
=======
        layout="responsive"
>>>>>>> 447222d (vaamoz)
      />
    </section>
  );
};

export default MainContent;
