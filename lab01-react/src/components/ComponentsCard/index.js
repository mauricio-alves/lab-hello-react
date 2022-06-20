import compImg from "../../assets/images/icon2.png";
import style from "../DeclarativeCard/declarativeCard.module.css";

function ComponentsCard() {
  return (
    <div className={style.container}>
      <img src={compImg} alt="logo 2" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
  );
}

export default ComponentsCard;
