import React from 'react';
import { VictoryBoxPlot, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import { mockBoxPlotData } from '../data/mockData';

const BoxPlot = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} height={400}>
      <VictoryAxis
        label="Year"
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 8, padding: 5 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Number of Fatalities"
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 8, padding: 5 },
        }}
      />
      <VictoryBoxPlot
        data={mockBoxPlotData}
        x="year"
        y="fatalities"
        boxWidth={15}
        style={{
          max: { stroke: 'tomato' },
          maxLabels: { fill: 'tomato', fontSize: 8, padding: 10 },
          min: { stroke: 'blue' },
          minLabels: { fill: 'blue', fontSize: 8, padding: 10 },
        }}
        labels={({ datum }) => `Year: ${datum.year}\nNumber of Fatalities: ${datum.fatalities}`}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ stroke: 'gray', strokeWidth: 1 }}
            style={{ fontSize: 8, fill: 'gray' }}
          />
        }
      />
    </VictoryChart>
  );
};

export default BoxPlot;
