import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { PeliculasContext } from "../Context/PeliculaProvider";
import { Link as RouterLink } from "react-router-dom";

const Peliculas = ({ pelicula }) => {
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    id
  } = pelicula;
  const { peliculas } = useContext(PeliculasContext);
  const baseURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={`${baseURL}${poster_path}`}
          alt={title}
        />
        <CardContent>
          <Typography variant="subtitle" color="initial">
            {title}
          </Typography>
          <Typography variant="body2" color="initial">
           Rating: {vote_average}⭐
          </Typography>
          <Typography variant="body2" color="initial">
            Fecha de Salida: {release_date}
          </Typography>
          <Typography variant="body2" color="initial">
            Id: {id}
          </Typography>
          <Button component={RouterLink} to={`/overview/${id}`} variant="contained" size="small">
            Ver más
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Peliculas;
