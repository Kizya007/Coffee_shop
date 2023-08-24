import Header from "./components/Header";
import "./assets/Global.scss";
import About from "./components/About";
import Serving from "./components/Serving";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import menu1 from "./assets/img/menu1.png";
import menu2 from "./assets/img/menu2.png";
import menu3 from "./assets/img/menu3.png";
import menu4 from "./assets/img/menu4.png";
import menu5 from "./assets/img/menu5.png";
import menu6 from "./assets/img/menu6.png";

function Home() {
  let products = [
    {
      img: <img src={menu1} />,
      name: "Drp Cofee",
      price: "$8.85",
    },
    {
      img: <img src={menu2} />,
      name: "Choco Cup Cake",
      price: "$4.85",
    },
    {
      img: <img src={menu3} />,
      name: "Chicken Burger",
      price: "$8.85",
    },
    {
      img: <img src={menu4} />,
      name: "French Fries",
      price: "$3.85",
    },
    {
      img: <img src={menu5} />,
      name: "Sandwitch",
      price: "$5.85",
    },
    {
      img: <img src={menu6} />,
      name: "Drp Cofee<",
      price: "$2.85",
    },
  ];
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Serving />
      <Menu a={1} products={products} />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
