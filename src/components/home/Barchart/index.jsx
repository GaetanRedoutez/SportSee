import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./index.css";

export const Barchart = ({ data }) => {
  const chartData = data.map((item, index) => ({
    day: index + 1,
    kilogram: item.kilogram,
    calories: item.calories,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  const renderLegend = () => {
    return (
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot legend-dot-weight"></div>
          <span>Poids (kg)</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-dot-calories"></div>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    );
  };
  return (
    <div className="barchart-container">
      <div className="chart-header">
        <h2 className="chart-title">Activité quotidienne</h2>
        {renderLegend()}
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
          barCategoryGap="20%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#e0e0e0" }}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickCount={4}
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
            position={{ y: 0 }}
            animationDuration={200}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
