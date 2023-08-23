import QuafeCake from "../assets/icon/QuafeCake";
import Cofee from "../assets/icon/Cofee";
import FastFood from "../assets/icon/FastFood";
import CocktailsIcon from "../assets/icon/CocktailsIcon";
import Grill from "../assets/icon/Grill";
import Snacks from "../assets/icon/Snacks";
import "../assets/Serving.scss";
import { useEffect } from "react";
import { useState } from "react";

function Serving() {
  // let [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const jsonData = await response.json();
  //     setUsers(jsonData);
  //   };

  //   fetchData();
  //   console.log(users);
  // }, []);
  let products = [
    {
      img: <QuafeCake />,
      title: "Quafe Cake",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
    {
      img: <Cofee />,
      title: "Cofee",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
    {
      img: <FastFood />,
      title: "Fast food",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
    {
      img: <CocktailsIcon />,
      title: "Cocktails",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
    {
      img: <Grill />,
      title: "Grill",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
    {
      img: <Snacks />,
      title: "Snacks",
      subtitle:
        "Through True Rich Attended no end it his mother since favourable real had half every him",
    },
  ];
  return (
    <div className="product">
      <span className="product-title">
        WHAT WE ARE SERVING <div className="line"></div>
      </span>
      <div className="product-subtitle">
        <p className="product-subtitle__left">
          We all have to eat, so why not do it beautifully?
        </p>
        <span className="product-subtitle__right">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </span>
      </div>
      <ul className="product-cards">
        {products.map((product) => (
          <li className="product-card">
            {product.img}
            <p className="product-card__title">{product.title}</p>
            <span className="product-card__subtitle">{product.subtitle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Serving;
