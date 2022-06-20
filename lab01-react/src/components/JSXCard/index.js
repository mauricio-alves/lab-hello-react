import jsxImg from "../../assets/images/icon4.png";
import style from "../DeclarativeCard/declarativeCard.module.css";

function JsxCard() {
  return (
    <div className={style.container}>
      <img src={jsxImg} alt="logo 2" />
      <h2>JSX</h2>
      <p>Statically-typed. Designed to run on modern browsers.</p>
    </div>
  );
}

export default JsxCard;
