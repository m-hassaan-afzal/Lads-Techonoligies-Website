import React from "react";
import Masonry from "react-masonry-component";

const BlogWrapper = ({ type, children }) => {
  return {
    grid: children,
    sidebar: (
      <div className="col-md-8">
        <div className="row">{children}</div>
      </div>
    ),
    "sidebar-right": <div className="col-md-8">{children}</div>,
    "sidebar-left": (
      <div className="col-md-8 col-md-offset-1 right-col-rv">{children}</div>
    ),
    "masonry": (
      <Masonry id="blogMasonry" className="blog-masonry">
        {children}
      </Masonry>
    ),
  }[type];
};

export default BlogWrapper;
