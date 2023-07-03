import "../assets/Menu.scss";
import menu1 from "../assets/img/menu1.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";
import menu6 from "../assets/img/menu6.png";
import ArrowRightBlack from "../assets/icon/ArrowRightBlack"

function Menu() {
  return (
    <div className="menu">
      <div className="header">
        <div className="header-menu">
          <p className="header-menu__title">OUR MENU <div className="create-line"></div></p>
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
        <div className="menu-list__item">
          <img src={menu1} />
          <div className="information">
            <span className="information-name">Drp Cofee</span>
            <span className="information-price">$8.85</span>
          </div>
        </div>
        <div className="menu-list__item">
          <img src={menu2} />
          <div className="information">
            <span className="information-name">Choco Cup Cake</span>
            <span className="information-price">$4.85</span>
          </div>
        </div>
        <div className="menu-list__item">
          <img src={menu3} />
          <div className="information">
            <span className="information-name">Chicken Burger</span>
            <span className="information-price">$8.85</span>
          </div>
        </div>
        <div className="menu-list__item">
          <img src={menu4} />
          <div className="information">
            <span className="information-name">French Fries</span>
            <span className="information-price">$7.85</span>
          </div>
        </div>
        <div className="menu-list__item">
          <img src={menu5} />
          <div className="information">
            <span className="information-name">Sandwitch</span>
            <span className="information-price">$3.97</span>
          </div>
        </div>
        <div className="menu-list__item">
          <img src={menu6} />
          <div className="information">
            <span className="information-name">Drp Cofee</span>
            <span className="information-price">$8.85</span>
          </div>
        </div>
      </div>
      <button className="menu-btn">View Menu <ArrowRightBlack/> </button>
    </div>
  );
}
export default Menu;
