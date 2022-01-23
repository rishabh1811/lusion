import React from "react";

export default function Topbar() {
  return (
    <>
      <div className="container-fluid bg-dark py-2">
        <div className="flex  text-white justify-between text-sm">
          <div className="flex ">
            <p className="mr-8 font-jost">About us</p>
            <p className="mr-8">Our Policy</p>
          </div>

          <div>
            <p>INR</p>
          </div>
        </div>
      </div>
    </>
  );
}
