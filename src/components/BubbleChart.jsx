import React from 'react'; 

import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts'; 

import { Typography, createTheme, ThemeProvider } from '@mui/material'; 

import { parseISO, format } from 'date-fns'; 

import { mockBubbleData } from "../data/mockData"; 

  

const theme = createTheme({ 

  typography: { 

    fontFamily: ['Roboto', 'sans-serif'].join(','), 

  }, 

}); 

  

const BubbleChart = () => { 

  return ( 

    <ThemeProvider theme={theme}> 

      <div style={{ width: '100%', height: 400 }}> 

        <Typography variant="h4" align="center" sx={{ mb: 2 }}> 

          Airplane Crashes Since 1908 

        </Typography> 

        <ResponsiveContainer> 

          <ScatterChart 

            margin={{ top: 20, right: 20, bottom: 20, left: 20 }} 

          > 

            <CartesianGrid strokeDasharray="3 3" /> 

            <XAxis 

              type="number" 

              dataKey="fatalities" 

              name="Fatalities" 

              domain={['dataMin', 'dataMax']} 

              tickCount={10} 

              label={{ 

                value: 'Number of Fatalities', 

                position: 'insideBottomRight', 

                offset: 0, 

              }} 

            /> 

            <YAxis 

              type="number" 

              dataKey="year" 

              name="Year" 

              tickFormatter={(date) => format(parseISO(`${date}-01-01`), 'yyyy')} 

              domain={['dataMin', 'dataMax']} 

              tickCount={20} 

              label={{ 

                value: 'Year of the Crash', 

                angle: -90, 

                position: 'insideLeft', 

              }} 

            /> 

            <Tooltip cursor={{ strokeDasharray: '3 3' }} /> 

            <Legend /> 

            <Scatter 

              name="Number of Passengers" 

              data={mockBubbleData} 

              fill="#f50057" 

              line 

              lineType="fitting" 

              shape="circle" 

              dataKey="passengers" 

            /> 

          </ScatterChart> 

        </ResponsiveContainer> 

      </div> 

    </ThemeProvider> 

  ); 

}; 

  

export default BubbleChart; 

 