import React from "react";

export default function Grid({ children }) {
  return (
    <>
      <div
        className="grid grid-cols-4 gap-x-8 gap-y-10
                        1190:grid-cols-3
                        lg:grid-cols-4
                        md:grid-cols-2 md:gap-x-5 md:gap-y-9"
      >
        {children}
      </div>
    </>
  );
}
