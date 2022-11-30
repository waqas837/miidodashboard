import React from 'react';
import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './ProgramDeFertilzer.css';

const ProgamDeFertilizer2 = () => {
  const HorizonaLine = (
    <hr
      style={{
        border: 'none',
        borderTop: '1px dotted lightgray',
        color: 'gray',
        backgroundColor: 'lightgray',
        height: '2px',
        width: ' 100%',
      }}
    />
  );
  return (
    <div>
      <Paper elevation={5} sx={{ width: "80%", p: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}  >
            <Typography sx={{ fontWeight: 'bold', fontSize: 'larger', mb: 5}}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} componen={Box} textAlign="right">
          <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>
            &nbsp; &nbsp;
            <IconButton aria-label="Example">
            <Typography variant="button">Filter</Typography> <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography>Programa de fertilización según tu análisis de suelo</Typography>
          </Grid>
          {HorizonaLine}
        </Grid>
        <table>
          <tr>
            <th style={{ fontWeight: 'bold' }}>Requisitos de nutrientes</th>
            <th style={{ fontWeight: 'bold', textAlign: 'center' }}>N</th>
            <th style={{ fontWeight: 'bold', textAlign: 'center' }}>P</th>
            <th style={{ fontWeight: 'bold', textAlign: 'center' }}>K</th>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Urea 46%</td>
            <td style={{ textAlign: 'center' }}>365 Kg</td>
            <td style={{ textAlign: 'center' }}>86,956 Kg</td>
            <td style={{ textAlign: 'center' }}>48,7 Kg</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Soil UAN 32%</td>
            <td style={{ textAlign: 'center' }}>525 Kg</td>
            <td style={{ textAlign: 'center' }}>86,956 Kg</td>
            <td style={{ textAlign: 'center' }}>154,7 Kg</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Amonio de nitrato 34%</td>
            <td style={{ textAlign: 'center' }}>493 Kg</td>
            <td style={{ textAlign: 'center' }}>86,956 Kg</td>
            <td style={{ textAlign: 'center' }}>112,5 Kg</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>TOTAL</td>
            <td style={{ textAlign: 'center' }}>1.383 Kg</td>
            <td style={{ textAlign: 'center' }}>86,956 Kg</td>
            <td style={{ textAlign: 'center' }}>316,66 Kg</td>
          </tr>
        </table>

        <Box textAlign={'right'} marginTop={5}>
          <Button
            variant="contained"
            sx={{
              width: '30%',
              marginBottom: '10px',
              background: '#5C5C5C',
              '&:hover': { background: '#5C5C5C', color: 'white' },
            }}
          >
            Completar calendario de fertilización
          </Button>
          <br />
          <Button
            variant="contained"
            sx={{ width: '30%', background: '#5C5C5C', '&:hover': { background: '#5C5C5C', color: 'white' } }}
          >
            Completar calendario de fertilización
          </Button>
          <Box sx={{ transform: "translate(-50px, 50px)" }}>
          <Typography variant="caption">
            ¿Necesitas ayuda? por favor contáctanos al +56966163647
          </Typography>
        </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default ProgamDeFertilizer2;
