import "../assets/Menu.scss";
import menu1 from "../assets/img/menu1.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";
import menu6 from "../assets/img/menu6.png";
import ArrowRightBlack from "../assets/icon/ArrowRightBlack";

function menu(props) {
  console.log(props);
  return (
    <div className="menu">
      <div className="header">
        <div className="header-menu">
          <p className="header-menu__title">
            OUR MENU <div className="create-line"></div>
          </p>
          <p className="header-menu__subtitle">Discover our menu chart</p>
          <p className="header-menu__text">Most Popular Picks</p>
        </div>
        <span className="header-menu__right">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </span>
      </div>
      <div className="menu-list">
        {props.products.map((product) => (
          <div className="menu-list__item">
            {product.img}
            <div className="information">
              <span className="information-name">{product.name}</span>
              <span className="information-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="menu-btn">
        View Menu <ArrowRightBlack />{" "}
      </button>
    </div>
  );
}
export default menu;
