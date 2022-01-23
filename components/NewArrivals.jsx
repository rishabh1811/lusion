import ProductCard from "./ProductCard";

export default function NewArrivals(props) {
  return (
    <>
      <div className="container-fluid">
        <h1 className="mb-10 text-4xl text-center">New Arrivals</h1>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

       <div className="text-center my-8">
            <button
              className="border border-dark 
                                px-8 py-4 
                              bg-dark text-white 
                              hover:bg-white hover:text-dark 
                                transition duration-300"
            >
              View all products
            </button>
       </div>
      </div>
    </>
  );
}
