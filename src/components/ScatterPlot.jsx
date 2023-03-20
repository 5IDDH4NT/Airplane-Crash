import { ResponsiveScatterPlot } from '@nivo/scatterplot' 

import { useTheme } from '@mui/material/styles'; 

import { format } from 'd3-format'; 

  

import mockScatterData from "../data/mockData.js"; 

  

const ScatterPlot = () => { 

    const theme = useTheme(); 

     

    return ( 

        <ResponsiveScatterPlot 

            data={mockScatterData} 

            xScale={{ type: 'linear', min: 'auto', max: 'auto' }} 

            yScale={{ type: 'linear', min: 'auto', max: 'auto' }} 

            margin={{ top: 60, right: 140, bottom: 70, left: 90 }} 

            xFormat={format('.2f')} 

            yFormat={format('.2f')} 

            axisTop={null} 

            axisRight={null} 

            colors={{ scheme: 'set1' }} 

            tooltip={({ node }) => ( 

                <strong> 

                  {`${node.data.serieId}: ${node.data.xFormatted}, ${node.data.yFormatted}`} 

                </strong> 

            )
            }

            theme={{ 

                fontFamily: theme.typography.fontFamily, 

                fontSize: theme.typography.fontSize, 

                textColor: theme.palette.text.primary, 

            }} 

        /> 

    ); 

}; 

  

export default ScatterPlot; 