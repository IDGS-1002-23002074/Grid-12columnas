import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import './styles.css';

const perfil = [
  { texto: 'Estudiante de desarrollo de software', columnas: 12 },
  { texto: 'Creativa', columnas: 6 },
  { texto: 'Responsable', columnas: 6 },
  { texto: 'Perseverante', columnas: 4 },
  { texto: 'Curiosa', columnas: 4 },
  { texto: 'Organizada', columnas: 4 },
  { texto: 'Trabajo en equipo', columnas: 3 },
  { texto: 'Aprendo rápido', columnas: 3 },
  { texto: 'Me gusta resolver problemas', columnas: 3 },
  { texto: 'Comprometida', columnas: 3 }
];

function App() {
  return (
    <Box className="page">
      <Container maxWidth="lg" className="container">
        <Box className="profile-grid" aria-label="Atributos personales">
          <Grid container columns={12} spacing={1}>
            {perfil.map((atributo, index) => (
              <Grid item xs={12} sm={atributo.columnas} key={atributo.texto}>
                <Paper
                  elevation={0}
                  className="attribute"
                  component="section"
                  aria-label={`Atributo ${index + 1}: ${atributo.texto}`}
                >
                  <Typography component="p" className="attribute-text">
                    {atributo.texto}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;