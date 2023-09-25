import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselMain from "../components/CarouselMain";
import CarouselLogo from "../components/CarouselLogo";
import Timer from "../components/Timer";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <section>
      <CarouselMain />
      <div className=" w-full h-80 flex items-center justify-center">
        <div className=" w-3/4">
          <CarouselLogo />
        </div>
      </div>

      <div className=" w-full px-28 flex items-center justify-center">
        <div className=" w-full h-[165px] pr-80 flex items-center justify-evenly bg-cover bg-[100%] bg-[url('https://multikart-react-reactpixelstrap.vercel.app/assets/images/offer-banner.jpg')]">
          <Timer />
          <h2 className=" uppercase">
            Save <span className=" text-dark-orange">30% off</span> Digital
            Watch
          </h2>
        </div>
      </div>

      <div className=" w-full px-10 py-[3%] flex items-center justify-evenly">
        <Card />
      </div>

      <div className="w-full h-[95vh] px-14 py-16 bg-[#FDF1EF]">
        <TrendingProducts/>
      </div>
    </section>
  );
};

export default Home;
