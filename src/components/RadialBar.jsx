import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { Tooltip } from '@nivo/tooltip';
import mockRadialData from "../data/mockData"; 

const RadialBarChart = () => {
  return (
    <>
      <ResponsiveRadialBar
        data={mockRadialData}
        keys={['count', 'death_ratio']}
        indexBy="airline"
        margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
        maxValue="auto"
        innerRadius={0.2}
        padAngle={0.1}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        borderWidth={1}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={Tooltip}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {mockRadialData.map(({ airline, count, death_ratio }) => (
          <div key={airline} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: '#1f77b4', marginRight: '5px' }}></div>
            <span>{airline}</span>
          </div>
        ))}
      </div>
    </> 
  );
}

export default RadialBarChart;
