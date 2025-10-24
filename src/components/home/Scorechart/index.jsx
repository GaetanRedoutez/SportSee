import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "./index.css";

export const ScoreChart = (user) => {
  const percentage = Math.round(user.data.score * 100);

  const data = [
    {
      name: "Score",
      value: percentage,
      fill: "#ff0000",
    },
  ];

  return (
    <div className="scorechart-container">
      <h3 className="scorechart-title">Score</h3>

      <ResponsiveContainer width="100%" height="90%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: "#ffffff" }}
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="scorechart-center-text">
        <p className="scorechart-percentage">{percentage}%</p>
        <p className="scorechart-label">de votre</p>
        <p className="scorechart-label">objectif</p>
      </div>
    </div>
  );
};
