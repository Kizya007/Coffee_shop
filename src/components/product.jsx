import menu1 from "../assets/img/menu1"

function product() {
  return (
    <div className="menu-list__item">
      <img src={menu1} />
      <div className="information">
        <span className="information-name">Drp Cofee</span>
        <span className="information-price">$8.85</span>
      </div>
    </div>
  );
}
export default product;
