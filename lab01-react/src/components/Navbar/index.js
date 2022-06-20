import IronLogo from "../../assets/images/ironhack-logo-xs.png";
import menuLogo from "../../assets/images/menu-top-xs.png";

import style from "./navbar.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      <img src={IronLogo} alt="Ironhack logo" />
      <img src={menuLogo} className={style.navImg} alt="Menu logo" />
    </div>
  );
}

export default Navbar;
