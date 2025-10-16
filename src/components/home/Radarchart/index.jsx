import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "./index.css";

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
