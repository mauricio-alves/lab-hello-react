import Button from "../Button";
import Content from '../Content';
import Navbar from "../Navbar";
import style from "./header.module.css";

function Header() {
  return (
    <div className={style.container}>
      <Navbar />
      <Content />
      <Button />
    </div>
  );
}

export default Header;
