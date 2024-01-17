import { useState } from "react";

import { Header } from "../../components/index";
import style from "./Main.module.sass";
import tempData from "../../../temp.json";
import { Item } from "../../components/index";

type ItemData = {
  title: string;
  img: string;
  price: number;
  brand: string;
  gender: string;
};

export const Main = () => {
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const addToCart = () => {
    alert("Item is added to cart");
  };

  const filteredItems: ItemData[] =
    selectedGender === "all"
      ? tempData
      : tempData.filter((item: ItemData) => item.gender === selectedGender);

  return (
    <div className={style.wrapper}>
      <Header setSelectedGender={setSelectedGender} />
      <div className={style.feed}>
        <p className={style.title}>Items</p>
        <div className={style.itemSelection}>
          {filteredItems.map((item: ItemData, index: number) => {
            const props = {
              key: index,
              title: item.title,
              img: item.img,
              price: item.price,
              brand: item.brand,
              addToCart: addToCart,
            };
            return <Item {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};
