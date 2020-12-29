import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const ResizableImage = ({ mainImage, width, aspectRatio }) => {
  return (
    <>
      {mainImage && mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(width)
            .height(Math.floor(aspectRatio * width))
            .auto("format")
            .url()}
          alt={mainImage.alt}
        />
      )}
    </>
  );
};

export default ResizableImage;
