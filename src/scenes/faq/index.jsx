import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          What was the purpose of the project, and what were the main goals or objectives? 
          </Typography>
          <Typography>
          The purpose of the project was to analyze a dataset of airplane crashes to identify patterns and insights that could help improve airline safety and reduce the number of accidents. 
          </Typography>
          <Typography>
          The main objectives were to identify the causes and frequency of airplane crashes, analyze the impact of different variables such as operator and aircraft type, and identify potential areas for improvement. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          What are some potential areas for future research or analysis based on the findings of this project? 
          </Typography>
          <Typography>
          Potential areas for future research or analysis based on the findings of this project include exploring the impact of natural calamities like weather conditions, technical failure, and terrorist attacks procedures on the likelihood of airplane crashes.
          <Typography>
          Another area of interest could be the use of predictive modelling to identify potential safety risks and prevent accidents before they occur. 
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          How can the insights from this project be applied to real-world scenarios, such as improving airline safety or reducing the number of plane crashes? 
          </Typography>
          <Typography>
          The insights from this project can be applied to real-world scenarios by helping airlines and aviation authorities to identify areas for improvement in their safety protocols, maintenance practices, and pilot training programs. The findings can also help to inform regulatory policies and procedures aimed at reducing the number of plane crashes. How can the insights from this project be applied to real-world scenarios, such as improving airline safety or reducing the number of plane crashes? 
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          What were some of the biggest challenges or limitations of the project, and how were they addressed? 
          </Typography>
          <Typography>
          Some of the biggest challenges and limitations of the project included dealing with missing and incomplete data, handling the large size of the dataset, and ensuring the accuracy and consistency of the data. 
          </Typography>
          <Typography>
          These were addressed through careful preprocessing, data cleaning, and quality assurance procedures. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          What is the overall significance or impact of this project, and how does it contribute to the field of aviation safety or data analytics more broadly? 
          </Typography>
          <Typography>
          The overall significance and impact of this project lies in its potential to improve airline safety and prevent accidents, which has important implications for the aviation industry and the broader public. 
          </Typography>
          <Typography>
          The project also demonstrates the value of data analytics and machine learning in addressing complex problems and generating insights that can inform policy and practice. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;