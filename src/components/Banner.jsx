import "../assets/Banner.scss";
import Coffee from "../assets/img/Coffee.png";
import ArrowRightBlack from "../assets/icon/ArrowRightBlack";

function Banner() {
  return (
    <div className="banner container">
      <div className="banner-left">
        <h1 className="banner-left__title">
          We serve high quality foods of all kinds.
        </h1>
        <p className="banner-left__subtitle">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start adding your own words. You can move the text.
        </p>
        <a className="banner-left__link" href="">
          View menu
          <ArrowRightBlack />
        </a>
        <div className="information">
          <div className="information-opening">
            <h4 className="information-opening__title">Opening Times</h4>
            <p className="information-opening__subtitle">Sunday to Saturday  l  09:00 AM to 11:00 PM</p>
          </div>
          <div className="information-location">
            <h4 className="information-location__title">Location</h4>
            <p className="information-location__subtitle">Master canteen, BBSR , Odisha 752054</p>
          </div>
          <div className="information-call">
            <h4 className="information-call__title">Call us</h4>
            <p className="information-call__subtitle">+9776462441</p>
          </div>
        </div>
      </div>
      <div className="banner-right">
        <img src={Coffee} />
      </div>
    </div>
  );
}
export default Banner;
