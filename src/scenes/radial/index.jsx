import { Box } from "@mui/material";
import Header from "../../components/Header";
import RadialBarChart from "../../components/RadialBar";

const RadialBar = () => {
  return (
    <Box m="20px">
      <Header title="Radial Bar Chart" subtitle="Aircraft Count vs Death Ratio" />
      <Box height="75vh">
        <RadialBarChart />
      </Box>
    </Box>
  );
};

export default RadialBar;
