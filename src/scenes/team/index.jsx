import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCrashes } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const AccidentReport = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "operator", headerName: "Operator", width: 150 },
    { field: "fatalities", headerName: "Fatalities", width: 150 },
    { field: "types", headerName: "Types", width: 150 },
    { field: "aboard", headerName: "Aboard", width: 120 },
    { field: "summary", headerName: "Summary", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Crashes" subtitle="Complete Report of Crashes" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            overflowX: "auto",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataCrashes}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10, 20, 50]}
        />
      </Box>
    </Box>
  );
};



export default AccidentReport;
