import { Helmet } from "react-helmet-async";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Container,
  Typography,
  Paper,
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
// sections
import NPKVariationsGraph from "../sections/@dashboard/app/AppWebsiteVisits";
import React from "react";
import { TitleTracker } from "src/App";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  // const theme = useTheme();
  const { setTitleOnNav } = React.useContext(TitleTracker);
  React.useLayoutEffect(() => {
    setTitleOnNav("Your panel");
  }, []);

  return (
    <>
      <Helmet>
        <title> MIIDO | DASHBOARD </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Crop Day
              </Typography>
              <Typography variant="h2">120</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Crop Day
              </Typography>
              <Typography variant="h2">
                120 <span style={{ fontSize: 14 }}>ppm/ha</span>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Crop Day
              </Typography>
              <Typography variant="h2">
                12 <span style={{ fontSize: 14 }}>ppm/ha</span>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {/* <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} /> */}
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Average moisturizer
              </Typography>
              <Typography variant="h2">64 %</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <NPKVariationsGraph
              title="NPK variations"
              subheader="Last 120 days"
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Team A",
                  type: "area",
                  fill: "gradient",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Team B",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Team C",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={5}>
              <Box>
                <Box display={"flex"} justifyContent={"space-between"} p={3}>
                  {" "}
                  <Typography variant="h3">Fertilizer plan</Typography>
                  <Typography variant="h4" color="primary">
                    View Details
                  </Typography>
                </Box>
                <Box my={4} />
                <Box display={"flex"} justifyContent={"space-between"} p={3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    525
                  </Typography>
                </Box>
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />
                {/* <Box sx={{ my: 3 }} /> */}
                <Box display={"flex"} justifyContent={"space-between"} p={3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    332
                  </Typography>
                </Box>
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />
                {/* <Box sx={{ my: 3 }} /> */}
                <Box display={"flex"} justifyContent={"space-between"} p={3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    494
                  </Typography>
                </Box>
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />

                <Box display={"flex"} justifyContent={"space-between"} p={3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    3
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={5}>
              <Box>
                <Box display={"flex"} justifyContent={"space-between"} p={2}>
                  {" "}
                  <Typography variant="h3">Fertilizer Market</Typography>
                  <Typography variant="h4" color="primary">
                    View All
                  </Typography>
                </Box>
                <p style={{ marginLeft: 7 }}>
                  Compare prices of fertilizers in our Market place
                </p>
                <Box display={"flex"} justifyContent={"space-between"} p={2}>
                  <Typography
                    variant="subtitle1"
                    style={{ color: "lightgray" }}
                  >
                    Create new supplier
                  </Typography>
                  <IconButton
                    style={{ borderRadius: 10, background: "#F0F1F7" }}
                  >
                    <Iconify icon="mdi-light:plus" />
                  </IconButton>
                </Box>
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />
                <Box display={"flex"} justifyContent={"space-between"} p={2}>
                  <Typography variant="body1">
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label="UreaBrand"
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"white"}
                    sx={{
                      background: "#CC6429",
                      borderRadius: 2,
                      px: 3,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    $180
                  </Typography>
                </Box>
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />
                <Box display={"flex"} justifyContent={"space-between"} p={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label="UreaBrand"
                  />

                  <Typography
                    variant="body1"
                    color={"white"}
                    sx={{
                      background: "#C9CC29",
                      borderRadius: 2,
                      px: 3,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    $180
                  </Typography>
                </Box>{" "}
                <hr style={{ border: 0, borderTop: "1px solid #ccc" }} />
                <Box display={"flex"} justifyContent={"space-between"} p={2}>
                  <FormControlLabel
                    defaultChecked
                    control={
                      <Checkbox
                        defaultChecked
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label="UreaBrand"
                  />
                  <Typography
                    variant="body1"
                    color={"white"}
                    sx={{
                      background: "#29CC97",
                      borderRadius: 2,
                      px: 3,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    $180
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
