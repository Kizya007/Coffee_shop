import "../assets/Footer.scss";
import logo from "../assets/img/logo.png";
import Facebook from "../assets/icon/Facebook";
import Twitter from "../assets/icon/Twitter";
import Insta from "../assets/icon/Insta";
import Nega from "../assets/icon/Nega";
import ArrowRight from "../assets/icon/ArrowRight";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer-list">
        <a href="" className="footer-list__item">
          Home
        </a>
        <a href="" className="footer-list__item">
          Menu
        </a>
        <a href="" className="footer-list__item">
          About us
        </a>
        <a href="" className="footer-list__item">
          Our story
        </a>
        <a href="" className="footer-list__item">
          Blog
        </a>
        <a href="" className="footer-list__item">
          Contact us
        </a>
      </ul>
      <div className="line"></div>
      <div className="footer-bottom">
        <span className="footer-bottom__text">
          © 2021 Finsweet | All rights reserved.
        </span>
        <ul className="footer-bottom__list">
          <li className="footer-bottom__item">
            <Facebook />
          </li>
          <li className="footer-bottom__item">
            <Twitter />
          </li>
          <li className="footer-bottom__item">
            <Insta />
          </li>
          <li className="footer-bottom__item">
            <Nega />
          </li>
        </ul>
        <a className="footer-bottom__link" href="">
          Contact Us <ArrowRight />
        </a>
      </div>
    </div>
  );
}
export default Footer;
