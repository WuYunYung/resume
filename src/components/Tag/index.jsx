import React from "react";

const Tag = function ({ children }) {
  return (
    <div className=" bg-gray-200 text-gray-600 px-2 rounded-sm font-light text-sm inline-block">
      {children}
    </div>
  );
};

export default React.memo(Tag);
