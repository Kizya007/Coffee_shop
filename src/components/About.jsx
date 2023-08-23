import About1 from "../assets/img/About1.png";
import About2 from "../assets/img/About2.png";
import IconAbout from "../assets/icon/IconAbout";
import "../assets/About.scss";
import ArrowRightBlack from "../assets/icon/ArrowRightBlack";

function About() {
  return (
    <div className="about-us">
      <div className="left-block">
        <p className="title">
          KNOW MORE ABOUT US <div className="line"></div>
        </p>
        <p className="subtitle">We source sustainable & line caught Foods</p>
        <p className="text">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start adding your own words. You can move the text by
          dragging and dropping the text anywhere on the page.
        </p>
        <ul className="cards">
          <li className="card">
            <IconAbout />
            <span className="card-title">10+ People</span>
            <p className="card-subtitle">We are Small Team</p>
            <p className="card-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </li>
          <li className="card">
            <IconAbout />
            <span className="card-title">2014</span>
            <p className="card-subtitle">We are From</p>
            <p className="card-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </li>
          <li className="card">
            <IconAbout />
            <span className="card-title">200k</span>
            <p className="card-subtitle">We Served</p>
            <p className="card-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </li>
        </ul>
        <button className="about-us__btn">
          View Menu <ArrowRightBlack />
        </button>
      </div>
      <div className="about-img__left">
        <img src={About1} alt="" />
      </div>
      <div className="about-img__right">
        <img src={About2} alt="" />
      </div>
    </div>
  );
}
export default About;
