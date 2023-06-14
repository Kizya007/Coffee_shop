import "../assets/Menu.scss";
import menu1 from "../assets/img/menu1.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";
import menu6 from "../assets/img/menu6.png";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <p className="menu-header__title">OUR MENU</p>
        <p className="menu-header__subtitle">Discover our menu chart</p>
        <p className="menu-header__text">Most Popular Picks</p>
      </div>
      <span className="menu-header__right">
        Through True Rich Attended does no end it his mother since favourable
        real had half every him case in packages enquire we up ecstatic..
        Through True Rich Attended does no end it his mother
      </span>
      <div className="menu-list">
        <div className="menu-list__item">
          <img src={menu1} />
          <div className="">
            <span>Drp Cofee</span>
            <span>$08.85</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
