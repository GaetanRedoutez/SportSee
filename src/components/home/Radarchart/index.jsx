import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "./index.css";

/**
 * Radarchart component renders a radar chart visualization using the provided data.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.data - The data array used to populate the radar chart. Each object in the array
 * should have a `kind` property (string) for the axis label and a `value` property (number) for the data value.
 *
 * @example
 * const data = [
 *   { kind: 'Force', value: 80 },
 *   { kind: 'Vitesse', value: 90 },
 *   { kind: 'Endurance', value: 70 },
 * ];
 * <Radarchart data={data} />
 *
 * @returns {JSX.Element} A responsive radar chart component.
 */
export const Radarchart = ({ data }) => {
  return (
    <div className="radarchart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid radialLines={false} stroke="#fff" strokeOpacity={0.7} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#fff", fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
