import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./index.css";

/**
 * Linechart component displays a line chart representing the average session duration.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.data - The data array for the chart. Each object in the array should have:
 *   @param {number} props.data[].day - The day of the week as a number (1-7).
 *   @param {number} props.data[].sessionLength - The session length in minutes.
 *
 * @returns {JSX.Element} A responsive line chart with custom tooltips and styling.
 */
export const Linechart = ({ data }) => {
  const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="linechart-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="linechart-container">
      <h3 className="linechart-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 70, right: 10, left: 10, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={(d) => dayLabels[d - 1] ?? d}
            tick={{ fill: "rgba(255,255,255,0.6)" }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "rgba(0,0,0,0.1)", strokeWidth: 40 }}
            animationDuration={200}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 8,
              stroke: "rgba(255,255,255,0.3)",
              strokeWidth: 10,
              fill: "#fff",
            }}
          />{" "}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
