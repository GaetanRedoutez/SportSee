import { formatNumber } from "../../../utils/formatNumber";
import { Icon } from "../../common/Icon";
import "./index.css";

/**
 * Card component displays a card with an icon, a value, a unit, and a label.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The source URL or path for the icon image.
 * @param {string} props.color - The color to be applied to the icon.
 * @param {number|string} props.value - The numerical or string value to display.
 * @param {string} props.unit - The unit of the value (e.g., "kg", "%").
 * @param {string} props.label - The label or name describing the card content.
 * @returns {JSX.Element} The rendered Card component.
 */
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
