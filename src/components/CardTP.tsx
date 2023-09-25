import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const CardTP = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:3009/get-data`).then((res) => {
        setProducts(res.data.data);
    });
  }, []);
  return (
    <div className=" w-full h-80 flex flex-wrap items-center justify-evenly">
      {products.map((item) => {
        if (item.type === "trendingProducts") {
          return (
            <div className=" w-[24%] pl-5 py-3 flex items-center justify-start bg-white" >
              <img className=" w-36 h-52 duration-500 hover:scale-105 mr-1" src={item.img} alt="" />
              <hgroup>
                <div className="flex">
                <BsFillStarFill className="text-orange-400 text-[14px]"/>
                <BsFillStarFill className="text-orange-400 text-[14px]"/>
                <BsFillStarFill className="text-orange-400 text-[14px]"/>
                <BsFillStarFill className="text-orange-400 text-[14px]"/>
                <BsFillStarFill className="text-gray-300 text-[14px]"/>
                </div>
                <p>{item.category}</p>
                <h4>
                    {item.price}
                  <span className=" text-[14px] text-gray-400 line-through ml-1">{item.oldPrice}</span>
                </h4>
                <div className=" flex">
                  <div className=" w-5 h-5 bg-blue-200 rounded-[50%]"></div>
                  <div className=" w-5 h-5 bg-[#FDF1EF] rounded-[50%]"></div>
                  <div className=" w-5 h-5 bg-gray-300 rounded-[50%]"></div>
                </div>
              </hgroup>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CardTP;
