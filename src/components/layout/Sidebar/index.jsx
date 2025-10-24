import { Icon } from "../../common/Icon";
import "./index.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-icons">
          <Icon src="/icons/yoga.svg" alt="Yoga" className={"sidebar-icon"} />
          <Icon src="/icons/swim.svg" alt="Swim" className={"sidebar-icon"} />
          <Icon src="/icons/bike.svg" alt="Bike" className={"sidebar-icon"} />
          <Icon
            src="/icons/dumbell.svg"
            alt="Dumbell"
            className={"sidebar-icon"}
          />
        </div>
        <div className="sidebar-copyright">Copyright, SportSee 2020</div>
      </div>
    </div>
  );
};
