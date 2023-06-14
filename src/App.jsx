import Header from "./components/Header";
import "./assets/Global.scss";
import About from "./components/About";
import Serving from "./components/Serving";
import Menu from "./components/Menu";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Serving />
      <Menu />
    </div>
  );
}

export default Home;
