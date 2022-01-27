import { Drawer } from "@mui/material";
import { useState } from "react";
import { AiOutlineSearch , AiOutlineHeart , AiOutlineUser , AiOutlineShoppingCart } from "react-icons/ai"
import { HiMenuAlt2 } from "react-icons/hi"

export default function Navbar() {
    const [visible , setVisible] = useState(false);

    return (
      <>
        <div
          className="container-fluid flex justify-between py-7 bg-cream tracking-wide relative
                        lg:bg-white lg:py-4"
        >
          <div className="hidden lg:block">
            <HiMenuAlt2
              className="text-3xl"
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
          <div className="">
            <h2
              className="text-3xl text-center tracking-wider  
            lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              LUSION
            </h2>
          </div>
          <div className="lg:hidden">
            <ul className="flex gap-7 capitalize">
              <li className="">home</li>
              <li className="">shop</li>
              <li className="">products</li>
              <li className="">pages</li>
              <li className="">contact</li>
              <li className="">blog</li>
            </ul>
          </div>
          <div className="flex gap-x-6 text-xl lg:hidden">
            <AiOutlineSearch className="" />
            <AiOutlineUser className="" />
            <AiOutlineHeart className="" />
            <AiOutlineShoppingCart className="" />
          </div>
        </div>

        <Drawer anchor="left" open={visible} onClose={() => setVisible(false)}>
          <div className="">
            <ul className=" space-y-6 p-10 w-[40vw] capitalize text-center mt-6 text-lg
                              sm:w-[50vw] xs:w-[70vw]">
              <li className="">home</li>
              <li className="">shop</li>
              <li className="">products</li>
              <li className="">pages</li>
              <li className="">contact</li>
              <li className="">blog</li>
            </ul>
          </div>
        </Drawer>
      </>
    );
}
