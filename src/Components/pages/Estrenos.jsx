import { Card, CardContent, Typography, CardMedia, Button, Grid, Container, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estrenos = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=2301a5c6f81c1e19ea56e643adbe7950&language=es-MX&page=1&region=MX";

    const fetchData = async () => {
      const { data } = await axios(url);
      setPeliculas(data.results);
    };

    fetchData();
  }, []);

  return (
    <Container sx={{margin: "1rem"}}>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pelicula.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardMedia
                component="img"
                sx={{
                  height: "80%",
                  width: "100%",
                }}
                image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <CardContent>
                <Typography variant="subtitle1" noWrap>{pelicula.title}</Typography>
                <Typography variant="body2">
                  Fecha de lanzamiento: {pelicula.release_date}
                </Typography>
                <Typography variant="body2">
                  Puntuación: {pelicula.vote_average}
                </Typography>
              </CardContent>
              <Box mt={1}>
                <Link to={`/overview/${pelicula.id}`}  style={{ textDecoration: "none" }} >
                  <Button variant="contained" color="primary">
                    Ver más
                  </Button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Estrenos;