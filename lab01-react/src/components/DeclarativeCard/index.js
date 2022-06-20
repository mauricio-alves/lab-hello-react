import toolImg from "../../assets/images/icon1.png";
import style from "./declarativeCard.module.css";

function DeclarativeCard() {
  return (
    <div className={style.container}>
      <img src={toolImg} alt="logo 1" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}

export default DeclarativeCard;
