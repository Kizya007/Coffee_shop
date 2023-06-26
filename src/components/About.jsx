import About1 from "../assets/img/About1.png";
import About2 from "../assets/img/About2.png";
import IconAbout from "../assets/icon/IconAbout";
import "../assets/About.scss";
import ArrowRightBlack from "../assets/icon/ArrowRightBlack";

function About() {
  return (
    // .about {
    //   .left-block { 

    //   }
    // }
    // about us
    <div className="about">
      {/* left-block */}
      <div className="about-left">
        {/* about-title
        h1 - h2 */}
        <span className="about-left__title">KNOW MORE ABOUT US <div className="create-line"></div></span>
          {/* в каком теге держат сабтайтл разобратся */}
        <p className="about-left__subtitle">
          We source sustainable & line caught Foods
        </p>
        <p className="about-left__text">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start adding your own words. You can move the text by
          dragging and dropping the text anywhere on the page.
        </p>
        {/* abouts-us__cards */}
        <div className="about-block">
          {/* abouts-us__card */}
          <div className="about-block__information">
            <IconAbout />
            <span className="information__title">10+ People</span>
            <p className="information__subtitle">We are Small Team</p>
            <p className="information__text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="about-block__information">
            <IconAbout />
            <span className="information__title">2014</span>
            <p className="information__subtitle">We are From</p>
            <p className="information__text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="about-block__information">
            <IconAbout />
            <span className="information__title">200k</span>
            <p className="information__subtitle">We Served</p>
            <p className="information__text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
        </div>
        <button className="about-btn">
          View Menu <ArrowRightBlack />
        </button>
      </div>
      <div className="about-img__left">
        <img src={About1} />
      </div>
      <div className="about-img__right">
        <img src={About2} />
      </div>
    </div>
  );
}
export default About;
