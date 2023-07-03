import QuafeCake from "../assets/icon/QuafeCake";
import Cofee from "../assets/icon/Cofee";
import FastFood from "../assets/icon/FastFood";
import CocktailsIcon from "../assets/icon/CocktailsIcon";
import Grill from "../assets/icon/Grill";
import Snacks from "../assets/icon/Snacks";
import "../assets/Serving.scss";

function Serving() {
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
        <li className="product-card">
          <QuafeCake />
          <p className="product-card__title">Quafe Cake</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
        <li className="product-card">
          <Cofee />
          <p className="product-card__title">Cofee</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
        <li className="product-card">
          <FastFood />
          <p className="product-card__title">Fast Food</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
        <li className="product-card">
          <CocktailsIcon />
          <p className="product-card__title">Cocktails</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
        <li className="product-card">
          <Grill />
          <p className="product-card__title">Grill</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
        <li className="product-card">
          <Snacks />
          <p className="product-card__title">Snacks</p>
          <span className="product-card__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </li>
      </ul>
    </div>
  );
}
export default Serving;
