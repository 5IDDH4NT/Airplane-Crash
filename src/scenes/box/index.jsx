import { Box } from "@mui/material";
import Header from "../../components/Header";
import BoxPlot  from "../../components/BoxPlot";
//import { mockData } from "../data/mockData";

const Box1 = () => {
  return (
    <Box m="20px">
      <Header title="Box Plot" subtitle="Airplane Crashes Since 1908" />
      <Box height="75vh">
        <BoxPlot />
      </Box>
    </Box>
  );
};

export default Box1;
