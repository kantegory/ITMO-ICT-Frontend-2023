import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "../../components/index";
import style from "./Main.module.sass";
import { Item } from "../../components/index";

type ItemData = {
  id: number;
  title: string;
  img: string;
  price: number;
  brand: string;
  gender: string;
};

export type CartItem = {
  title: string;
  price: number;
  img: string;
};

export const Main = () => {
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [data, setData] = useState<ItemData[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/clothes")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching cart items", error);
      });
  }, [cartItems]);

  const addToCart = (item: ItemData) => {
    axios
      .post("http://localhost:3000/cart", item)
      .then(() => {
        alert("Item is added to cart");
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error);
      });
  };

  const filteredItems: ItemData[] =
    selectedGender === "all"
      ? data
      : data.filter((item: ItemData) => item.gender === selectedGender);

  return (
    <div className={style.wrapper}>
      <Header setSelectedGender={setSelectedGender} cartItems={cartItems} />
      <div className={style.feed}>
        <p className={style.title}>Items</p>
        <div className={style.itemSelection}>
          {filteredItems.map((item: ItemData) => {
            const props = {
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              brand: item.brand,
              addToCart: () => addToCart(item),
            };
            return <Item {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};
