/* eslint-disable @next/next/no-img-element */

export default function ProductCard(props) {
  return (
    
      <div className="">
        <div className="overflow-hidden mb-7
                        md:mb-4">
          <img
            className="w-full  hover:scale-110 transition-transform duration-500"
            src="/images/product.webp"
            alt=""
          />
        </div>
        <p className="mb-[0.3rem] text-gray-500">Wool cup holder</p>
        <p className="text-lg">Rs. 1,499.08</p>
      </div>
  
  );
}
