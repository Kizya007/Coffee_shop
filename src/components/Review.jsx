import "../assets/Review.scss";
import Reviewimg from "../assets/img/Reviewimg.png";
import nigger from "../assets/img/nigger.png";

function Review() {
  return (
    <div className="review">
      <div className="left-block">
        <p className="left-block__title">``</p>
        <p className="left-block__text">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start adding your own words. You can move the text by
          dragging and dropping the text
        </p>
        <div className="person">
          <div className="person-name">
            <p>Joheny Andro</p>
            <p>Bhubaneswar, Odisha</p>
            <div className="line">
              <div className="line-black"></div>
              <div className="line-white"></div>
            </div>
          </div>
          <div className="person-img">
            <img src={nigger} alt="" />
          </div>
        </div>
      </div>
      <div className="right-block">
        <div className="right-block__img">
          <img src={Reviewimg} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Review;
