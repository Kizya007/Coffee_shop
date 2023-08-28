import "../assets/Contact.scss";
import Map from "../assets/img/Map.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-text">
        <ul className="contact-text__list">
          <li className="title">Working Hour </li>
          <li className="text">
            Sunday to Saturday <br /> 09:00 AM to 11:00 PM
          </li>
        </ul>
        <ul className="contact-text__list">
          <li className="title">Location</li>
          <li className="text">
            Street - 127, New York, <br /> United States <br /> 546544
          </li>
        </ul>
        <ul className="contact-text__list">
          <li className="title">
            Contact us
            <li className="text">
              +123456789 <br /> hey@yourdomain.com
            </li>
          </li>
        </ul>
      </div>
      <div className="contact-img">
        <img src={Map} alt="" />
      </div>
    </div>
  );
}
export default Contact;
