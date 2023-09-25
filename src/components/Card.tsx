import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";

const Card = () => {
  const [bsProducts, setBsProducts] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:3009/get-data`).then((res) => {
      setBsProducts(res.data.data);
    });
  }, []);

  return (
    <div className="w-[90%] flex justify-evenly">
      {bsProducts.map((item) => {
        if (item.type === "base") {
          return (
            <div className=" w-[24%] px-10 py-3 flex items-center justify-center flex-col duration-300 border-[1px] border-solid border-zinc-300 hover:border-dark-orange ">
              <img src={item.image} alt="img" />
              <h3 className=" text-xl">{item.category}</h3>
              <p>{item.watchInfo.info1}</p>
              <p>{item.watchInfo.info2}</p>
              <p>{item.watchInfo.info3}</p>
              <p>{item.watchInfo.info4}</p>
              <Button text="VIEW MORE"/>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
