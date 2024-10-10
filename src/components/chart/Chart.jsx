import "./chart.scss";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Iker", value: 400 },
  { name: "Sandy", value: 300 },
  { name: "Fer", value: 300 },
  { name: "Alexei", value: 200 },
  { name: "Lore", value: 278 },
  { name: "Estefi", value: 189 },
];

const COLORS = ["#f38181", "	#800080", "#DA70D6", "#574b90", "#FFC300","#E30B5C"];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart-container">
  <div className="chart-title">{title}</div>
  <ResponsiveContainer width="100%" aspect={aspect}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius="80%"
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
    </PieChart>
  </ResponsiveContainer>
</div>
  );
};

export default Chart;
