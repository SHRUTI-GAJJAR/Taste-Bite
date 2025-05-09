import { useState } from "react";
import fallbackImage from "../../assets/image/NOTFOUND!.png";

const ImageWithFallback = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handelFallBack = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <img
      src={imgSrc}
      onError={handelFallBack}
      className="object-cover group-hover:scale-105 transition h-full w-full object-center"
      alt={alt}
    />
  );
};

export default ImageWithFallback;
