import Carousel from 'react-bootstrap/Carousel'; 
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from 'react';

const CarouselMain = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage
            img={
              "https://multikart-react-reactpixelstrap.vercel.app/assets/images/home-banner/10.jpg"
            }
            head={"Welcome To Fashion"}
            name={"MEN'S SHOES"} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            img={
              "https://multikart-react-reactpixelstrap.vercel.app/assets/images/home-banner/11.jpg"
            }
            head={"Every Time"}
            name={"MITTNALIER"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            img={
              "https://multikart-react-reactpixelstrap.vercel.app/assets/images/home-banner/9.jpg"
            }
            head={"Welcome To Fashion"}
            name={"MEN'S SHOES"}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselMain