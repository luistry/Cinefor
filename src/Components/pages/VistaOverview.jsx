import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";

const VistaOverview = () => {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2301a5c6f81c1e19ea56e643adbe7950&language=es-MX`;

    const ConsultaApi = async () => {
      try {
        const { data } = await axios(url);
        setPelicula(data);
      } catch (error) {
        console.error(error);
      }
    };

    ConsultaApi();
  }, [id]);

  const { title, overview, release_date, genres, poster_path, vote_average } = pelicula;

  return (
    
    <Container style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      <Card sx={{ width: "60%" }}>
        <CardContent>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            {title}
          </Typography>
        
          <CardMedia
  component="img"
  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
  alt={`Poster de ${title}`}
  sx={{
    margin: "auto",
    maxHeight: "930px",
    maxWidth: "100%",
    "@media (max-width: 1260px)": {
      maxHeight: "950px",
    },
    "@media (max-width: 600px)": {
      height: "auto",
      maxHeight: "100%",
    },
  }}
/>




          <Typography
            variant="subtitle1"
            color="initial"
            textAlign={"center"}
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Fecha de estreno:
          </Typography>
          <Typography variant="body1" textAlign={"center"} color="initial">
            {release_date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="initial"
            textAlign={"center"}
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Géneros:
          </Typography>
          <Typography variant="body1" textAlign={"center"} color="initial">
            {genres && genres.map((genre) => genre.name).join(", ")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="initial"
            textAlign={"center"}
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Calificación:
          </Typography>
          <Typography variant="body1" textAlign={"center"} color="initial">
            {vote_average}⭐
          </Typography>
          <Typography
            variant="subtitle1"
            color="initial"
            textAlign={"center"}
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Sinopsis:
          </Typography>
          <Typography variant="p" textAlign={"center"} component="div">
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VistaOverview;
