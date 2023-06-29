import Header from "./components/Header";
import "./assets/Global.scss";
import About from "./components/About";
import Serving from "./components/Serving";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Serving />
      <Menu />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
