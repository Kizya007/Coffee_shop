import "../assets/Header.scss";
import Logo from "../assets/icon/Logo";
import ArrowRight from "../assets/icon/ArrowRight";

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <a href="" className="navigation-link">
          Home
        </a>
        <a href="" className="navigation-link">
          Menu
        </a>
        <a href="" className="navigation-link">
          About us
        </a>
        <a href="" className="navigation-link">
          Our Story
        </a>
        <a href="" className="navigation-link">
          Blog
        </a>
        <a href="" className="navigation-link">
          Contact
        </a>
        <div className="block-link">
          <a href="" className="link">
            Clone Project
          </a>
          <ArrowRight />
        </div>
      </nav>
    </header>
  );
}
export default Header;
