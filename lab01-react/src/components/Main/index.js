import DeclarativeCard from "../DeclarativeCard";
import ComponentsCard from "../ComponentsCard";
import SingleWayCard from "../SingleWayCard";
import JsxCard from "../JSXCard";

import style from './main.module.css'

function Main() {
  return (
    <div className={style.container}>
      <DeclarativeCard />
      <ComponentsCard />
      <SingleWayCard />
      <JsxCard />
    </div>
  );
}

export default Main;
