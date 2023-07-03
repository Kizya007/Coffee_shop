import "../assets/Contact.scss";
import Map from "../assets/img/Map.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-text">
        <ul className="contact-text__list">
          <li className="title">Working Hour</li>
          <li className="text">Sunday to Saturday</li>
          <li className="text">09:00 AM to 11:00 PM</li>
        </ul>
        <ul className="contact-text__list">
          <li className="title">Location</li>
          <li className="text">Street - 127, New York,</li>
          <li className="text">United States</li>
          <li className="text">546544</li>
        </ul>
        <ul className="contact-text__list">
          <li className="title">Contact us </li>
          <li className="text">+123456789</li>
          <li className="text">hey@yourdomain.com</li>
        </ul>
      </div>
      <div className="contact-img">
        <img src={Map} alt="" />
      </div>
    </div>
  );
}
export default Contact;
