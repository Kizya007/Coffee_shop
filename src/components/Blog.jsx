import "../assets/Blog.scss";
import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";

function Blog() {
  return (
    <div className="blog">
      <p className="blog-title">Read Our Lastest Blog</p>
      <div className="blog-list">
        <ul className="blog-list__item">
          <li className="blog-list__title">21 Jun 2021</li>
          <li className="blog-list__subtitle">
            Extra Thick Homemad Pizza Sauce
          </li>
          <li className="blog-list__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </li>
          <div className="blog-list__img">
            <img src={blog1} alt="" />
          </div>
        </ul>
        <ul className="blog-list__item">
          <li className="blog-list__title">21 Jun 2021</li>
          <li className="blog-list__subtitle">
            Extra Thick Homemad Pizza Sauce
          </li>
          <li className="blog-list__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </li>
          <div className="blog-list__img">
            <img src={blog2} alt="" />
          </div>
        </ul>
        <ul className="blog-list__item">
          <li className="blog-list__title">21 Jun 2021</li>
          <li className="blog-list__subtitle">
            Extra Thick Homemad Pizza Sauce
          </li>
          <li className="blog-list__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </li>
          <div className="blog-list__img">
            <img src={blog3} alt="" />
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Blog;
