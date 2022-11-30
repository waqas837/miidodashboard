import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import "./ProgramDeFertilzer.css";

const ProgamDeFertilizer3 = () => {
  const HorizonaLine = (
    <hr
      style={{
        border: "none",
        borderTop: "1px dotted lightgray",
        color: "gray",
        backgroundColor: "lightgray",
        height: "2px",
        width: "100%",
      }}
    />
  );
  return (
    <div>
      <Paper elevation={5} sx={{ width: "80%", p: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: "larger", mb: 5 }}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} textAlign="right">
            <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>
            &nbsp; &nbsp;
            <IconButton aria-label="Example">
              <Typography variant="button">Filter</Typography>{" "}
              <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>
          {/* line will be here */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            component={Box}
            display="flex"
            justifyContent={"space-around"}
            flexWrap="wrap"
          >
            <Typography>Detalles del análisis de suelo</Typography>
            <Typography>Customer name</Typography>
            <Typography>Date</Typography>
            <Typography>Priority</Typography>
          </Grid>
          {HorizonaLine}
        </Grid>
        <table>
          <tr>
            <th style={{ fontWeight: "bold" }}>Nutriente</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Requrimiento real
            </th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Aplicación actual
            </th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Requerimiento completo
            </th>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>N</td>
            <td style={{ textAlign: "center" }}>2.847,39 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>P</td>
            <td style={{ textAlign: "center" }}>525 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>K</td>
            <td style={{ textAlign: "center" }}>493 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Ca</td>
            <td style={{ textAlign: "center" }}>1.383 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>100%</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>S</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Fe</td>
            <td style={{ textAlign: "center" }}>1.383 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>0</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Mn</td>
            <td style={{ textAlign: "center" }}>1.383 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>0</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Zn</td>
            <td style={{ textAlign: "center" }}>1.383 Kg</td>
            <td style={{ textAlign: "center" }}>86,956 Kg</td>
            <td style={{ textAlign: "center" }}>0</td>
          </tr>
        </table>

        <Box textAlign={"right"} marginTop={5}>
          <Button
            variant="contained"
            sx={{
              width: "30%",
              marginBottom: "10px",
              background: "#5C5C5C",
              "&:hover": { background: "#5C5C5C", color: "white" },
            }}
          >
            Completar calendario de fertilización
          </Button>
        </Box>
        <Box sx={{ transform: "translate(-30px, 40px)" }}>
          <Typography variant="caption">
            ¿Necesitas ayuda? por favor contáctanos al +56966163647
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default ProgamDeFertilizer3;
