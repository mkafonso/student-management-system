// https://recharts.org/en-US/examples/SimpleRadarChart
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Mensalidade",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Outros1",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Casas",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Subsídios",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Outros2",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Outros3",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class RadarChartComponent extends PureComponent {
  render() {
    return (
      <RadarChart
        cx={250}
        cy={250}
        outerRadius={90}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Gastos"
          dataKey="A"
          stroke="#4D4D4D"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
