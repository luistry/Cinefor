import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const Busqueda = ({ searchTerm }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    const buscarPeliculas = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=2301a5c6f81c1e19ea56e643adbe7950&query=${searchTerm}&language=es-MX&region=MX&include_adult=false`;
      const { data } = await axios(url);
      setPeliculas(data.results);
    };
    buscarPeliculas();
  }, [searchTerm]);

  return (
    <div>
      <Typography variant="h3" textAlign={"center"} sx={{ my: 2 }}>
        Resultados de búsqueda para "{searchTerm}"
      </Typography>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pelicula.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="450"
                image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {pelicula.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pelicula.overview}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Busqueda;
