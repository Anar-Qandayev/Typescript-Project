import { Carousel } from "@trendyol-js/react-carousel";
import { Link } from "react-router-dom";

const CarouselLogo = () => {
  return (
    <div>
      <Carousel show={4.5} slide={3} swiping={true}>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/1.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/2.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/3.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/4.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/5.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/6.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/7.png"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/trendyol/"
          rel="noreferrer"
        >
          <img
            className=" pointer-events-none"
            src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/logos/8.png"
            alt=""
          />
        </Link>
      </Carousel>
    </div>
  );
};

export default CarouselLogo;
