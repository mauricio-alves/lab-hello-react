import singleImg from "../../assets/images/icon3.png";
import style from "../DeclarativeCard/declarativeCard.module.css";

function SingleWayCard() {
  return (
    <div className={style.container}>
      <img src={singleImg} alt="logo 3" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
  );
}

export default SingleWayCard;
