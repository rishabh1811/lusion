import { AiOutlineSearch , AiOutlineHeart , AiOutlineUser , AiOutlineShoppingCart } from "react-icons/ai"

export default function Navbar() {
    

    return (
      <>
        <div className="container-fluid flex justify-between py-7 bg-cream tracking-wide">
          <div className="">
            <h2 className="text-3xl text-center tracking-wider">
              LUSION
            </h2>
          </div>
          <div className="">
            <ul className="flex gap-7 capitalize">
              <li className="">home</li>
              <li className="">shop</li>
              <li className="">products</li>
              <li className="">pages</li>
              <li className="">contact</li>
              <li className="">blog</li>
            </ul>
          </div>
          <div className="flex gap-x-6 text-xl">
            <AiOutlineSearch className="" />
            <AiOutlineUser className="" />
            <AiOutlineHeart className="" />
            <AiOutlineShoppingCart className="" />
          </div>
        </div>
      </>
    );
}
