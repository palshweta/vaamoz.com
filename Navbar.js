<<<<<<< HEAD
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className=" flex fixed top-0 h-[10vh] w-full justify-between px-24 py-8 bg-gradient-to-r from-[#641a79] to-[#2f0749] text-white">
        <div className="image">
          <img
            src="https://vaamoz.com/assets/landing/icon/logo_2hbg.png"
            alt="logo"
            style={{ height: 35 }}
          />
        </div>
        <div className="flex gap-10 item-center">
=======
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [menuItem, setMenuItem] = useState([
    {
      id: "1",
      lable: "Home",
      link: "",
    },
    {
      id: "2",
      lable: "Brands on vaamoz",
      link: "",
    },
    {
      id: "3",
      lable: "Partner with us",
      link: "",
    },
    {
      id: "4",
      lable: "Career",
      link: "",
    },
    {
      id: "5",
      lable: "Blog",
      link: "",
    },
  ])

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  }
  return (
    <nav className="fixed z-10 w-full px-4 lg:px-4 py-4 bg-gradient-to-r from-[#641a79] to-[#2f0749] text-white">
      <div className="flex text-xs gap-10">
        <div className="">
          <Image 
            src={"/logo_2hbg.png"}
            alt="logo"
            width={100} height={100}
            layout="responsive"
          />
        </div>
        <div className=" hidden lg:flex lg:text-[16px] gap-10 item-center">
>>>>>>> 447222d (vaamoz)
          <div className="flex justify-center gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Brands On Vaamoz</Link>
            <Link href={"/"}>Partner With Us</Link>
            <Link href={"/"}>Career</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Get In Touch</Link>
            <Link href={"/"}> Login</Link>
          </div>
        </div>
<<<<<<< HEAD
      </nav>
      </>
=======
        <button onClick={toggleMobileNav} className="lg:hidden">
          <Image src={"/menu.png"} alt={"."} width={20} height={20} />
        </button>

      </div>
      {mobileNavActive ? <div className="bg-gradient-to-r from-[#641a79] to-[#2f0749] flex flex-col gap-4 py-4 transition-all duration-1000 ease-in-out ">
        {
          menuItem.map((item, index) => (
            <div key={item.id} className="">
              <span>{item?.lable}</span>
              {index === 0 && <br />}
              {index === 0 ? "..." : null}
            </div>
          ))
        }
      </div> : null}
    </nav>

>>>>>>> 447222d (vaamoz)
  );
};

export default Navbar;
