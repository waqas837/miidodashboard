import React from "react";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TablePagination,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { TitleTracker } from "src/App";

const FormPage = () => {
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { setTitleOnNav } = React.useContext(TitleTracker);
  React.useLayoutEffect(() => {
    setTitleOnNav("Análisis de nutrientes");
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const HorizonaLine = (
    <hr
      style={{
        border: "none",
        borderTop: "1px dotted lightgray",
        color: "gray",
        backgroundColor: "lightgray",
        height: "2px",
        width: " 100%",
      }}
    />
  );
  return (
    <div>
      <Paper>
        <Grid container spacing={3} component={Box} textAlign="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: "larger", mb: 5,color: "#A0A3B4", }}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>
            &nbsp; &nbsp;
            <IconButton aria-label="Example">
            <Typography variant="button">Filter</Typography> <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              display="flex"
              justifyContent={"space-between"}
              flexWrap="wrap"
              sx={{ width: "90%", border: "red", m: "auto" }}
            >
              <Typography sx={{color: "#A0A3B4"}}>Detalles del análisis de suelo</Typography>
              <Typography sx={{color: "#A0A3B4"}}>Customer name</Typography>
              <Typography sx={{color: "#A0A3B4"}}>Date</Typography>
              <Typography sx={{color: "#A0A3B4"}}>Priority</Typography>
            </Box>
          </Grid>
          {HorizonaLine}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Detalles del análisis de suelo</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Tipo de suelo</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>

          {HorizonaLine}

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>PH</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>Conductividad eléctrica</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>
          {/* mui select-drop-down */}
          {/* row 1 */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>PH</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>
          {/* row 2 */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>PH</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>
          {/* row 3 */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>PH</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <p>He</p>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} component={Box} mb={5}>
            <p>PH</p>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "80%" }}
            />
          </Grid>

          <TablePagination
            sx={{ textAlign: "right", width: "100%" }}
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Paper>
    </div>
  );
};

export default FormPage;
