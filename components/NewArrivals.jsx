import Grid from "./Grid";
import ProductCard from "./ProductCard";

export default function NewArrivals(props) {
  return (
    <>
      <div className="container-fluid">
        <h1 className="mb-10 text-4xl text-center">New Arrivals</h1>

          <Grid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </Grid>

       <div className="text-center my-8">
            <button
              className="border border-dark 
                                px-8 py-4 
                              bg-dark text-white 
                              hover:bg-white hover:text-dark 
                                transition duration-300
                                xs:px-6 xs:py-3"
            >
              View all products
            </button>
       </div>
      </div>
    </>
  );
}
