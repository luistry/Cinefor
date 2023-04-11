import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
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
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          height="400"
          image={`${baseURL}${poster_path}`}
          alt={title}
          sx={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
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
