import React from "react";
import Masonry from "react-masonry-component";

const ShopWrapper = ({ layout, children }) => {
  if (layout === "standard") {
    return <div className="col-md-8">{children}</div>;
  } else if (layout === "masonry") {
    return <Masonry>{children}</Masonry>;
  } else {
    return children;
  }
};

export default ShopWrapper;
