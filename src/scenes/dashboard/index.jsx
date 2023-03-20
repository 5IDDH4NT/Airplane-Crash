import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox"; 
import PieChart from "../../components/PieChart";
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirlineSeatReclineExtraTwoToneIcon from '@mui/icons-material/AirlineSeatReclineExtraTwoTone';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScatterPlot from "../../components/ScatterPlot";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="AIRCRASH INSIGHT" />

        <Box>
          <Button
            sx={{
              /*backgroundColor: colors.blueAccent[700],*/
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} />*/}
            "The only time an aircraft has too much fuel on board is when it is on fire." - Sir Charles Kingsford Smith
          </Button>
          
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5,269"
            subtitle="Total Crashes"
            progress="1.00"
            icon={
              <FlightLandIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,44,551"
            subtitle="Total Aboard"
            progress="1.00"
            increase="100%"
            icon={
              <AirlineSeatReclineExtraTwoToneIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,05,479"
            subtitle="Total Fatalities"
            progress="0.73"
            increase="73%"
            icon={
              <HeartBrokenIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="39,072"
            subtitle="Total Survivor"
            progress="0.27"
            increase="27%"
            icon={
              <FavoriteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt= "35px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Airline Crashes due to various reason 
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                1908-2017
              </Typography>
            </Box>
            <Box>
              <IconButton>
                
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Top 10 Crashes by Types
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}  


        <Box  

          gridColumn="span 4"  

 
          gridRow="span 2"  

 
 

          backgroundColor={colors.primary[400]}  

 
 

          p="30px"  

 
 

        >  
         <Typography variant="h5" fontWeight="600">
            Top 10 crashes by Types
          </Typography>
            <PieChart size="70" /> 

 
 

          {/* <Typography variant="h5" fontWeight="600">  

 
 

            Campaign  

 
 

          </Typography>  

 
 

          <Box  

 
 

            display="flex"  

 
 

            flexDirection="column"  

 
 

            alignItems="center"  

 
 

            mt="25px"  

 
 

          >  

 
 
 

            <Typography  

 
 

              variant="h5"  

 
 

              color={colors.greenAccent[500]}  

 
 

              sx={{ mt: "15px" }}  

 
 

            >  

 
 

              $48,352 revenue generated  

 
 

            </Typography>  

 
 

            <Typography>Includes extra misc expenditures and costs</Typography>  

 
 

          </Box>  */} 

 
 

        </Box>  

 
 

        <Box  

 
 

          gridColumn="span 4"  

 
 

          gridRow="span 2"  

 
 

          backgroundColor={colors.primary[400]}  

 
 

        >  

 
 

          <Typography  

 
 

            variant="h5"  

 
 

            fontWeight="600"  

 
 

            sx={{ padding: "30px 30px 0 30px" }}  

 
 

          >  

 
 

            Aircrash Count in each year 

 
 

          </Typography>  

 
 

          <Box height="275px" mt="-25px">  

 
 

            <BarChart isDashboard={true} />  

 
 

          </Box>  

 
 

        </Box>  

 
 

        <Box  

 
 

          gridColumn="span 4"  

 
 

          gridRow="span 2"  

 
 

          backgroundColor={colors.primary[400]}  

 
 

          padding="30px"  

 
 

        >  

 
 

          <Typography  

 
 

            variant="h5"  

 
 

            fontWeight="600"  

 
 

            sx={{ marginBottom: "15px" }}  

 
 

          >  

 
 

            Geography Based Crashes  

 
 

          </Typography>  

 
 

          <Box height="200px">  

 
 

            <GeographyChart isDashboard={true} />  

 
 

          </Box>  

 
 

        </Box>  

 
 

      </Box>  

 
 

    </Box>  

 
 

  );  

 
 

};  
export default Dashboard;  

 
 

 

 