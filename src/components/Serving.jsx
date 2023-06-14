import QuafeCake from "../assets/icon/QuafeCake";
import Cofee from "../assets/icon/Cofee";
import FastFood from "../assets/icon/FastFood";
import CocktailsIcon from "../assets/icon/CocktailsIcon";
import Grill from "../assets/icon/Grill";
import Snacks from "../assets/icon/Snacks";
import "../assets/Serving.scss";

function Serving() {
  return (
    <div className="serving">
      <span className="serving-title">
        WHAT WE ARE SERVING <div className="create-line"></div>
      </span>
      <div className="serving-subtitle">
        <p className="serving-subtitle__left">
          We all have to eat, so why not do it beautifully?
        </p>
        <span className="serving-subtitle__right">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </span>
      </div>
      <div className="serving-grid__list">
        <div className="serving-grid">
          <QuafeCake />
          <p className="serving-grid__title">Quafe Cake</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </div>
        <div className="serving-grid">
          <Cofee />
          <p className="serving-grid__title">Cofee</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
          <div className="create-line__serving"></div>
        </div>
        <div className="serving-grid">
          <FastFood />
          <p className="serving-grid__title">Fast Food</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </div>
        <div className="serving-grid">
          <CocktailsIcon />
          <p className="serving-grid__title">Cocktails</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </div>
        <div className="serving-grid">
          <Grill />
          <p className="serving-grid__title">Grill</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </div>
        <div className="serving-grid">
          <Snacks />
          <p className="serving-grid__title">Snacks</p>
          <span className="serving-grid__subtitle">
            Through True Rich Attended no end it his mother since favourable
            real had half every him.
          </span>
        </div>
      </div>
    </div>
  );
}
export default Serving;
