import { formatNumber } from "../../../utils/formatNumber";
import { Icon } from "../../common/Icon";
import "./index.css";

export const Card = ({ icon, color, value, unit, label }) => (
  <div className="card-content">
    <Icon src={icon} alt={label} className="card-icon" color={color} />
    <div className="card-text">
      <div className="card-data">
        {formatNumber(value)}
        {unit}
      </div>
      <div className="card-name">{label}</div>
    </div>
  </div>
);
