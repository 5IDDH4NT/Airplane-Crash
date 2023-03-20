import { Box } from "@mui/material";
import Header from "../../components/Header";
import BubbleChart from "../../components/BubbleChart";


const Bubble = () => {
  return (
    <Box m="20px">
      <Header title="Bubble Chart" subtitle="Airplane Crashes Since 1908" />
      <Box height="75vh">
        <BubbleChart />
      </Box>
    </Box>
  );
};

export default Bubble;
