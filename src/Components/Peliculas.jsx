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

      <Card      onMouseEnter={handleMouseEnter}      onMouseLeave={handleMouseLeave}      sx={{         maxWidth: "300px",         margin: "0 auto",         marginBottom: "1rem",          backgroundColor: "#f8f8f8",          boxShadow: "none",          borderRadius: "8px",    "&:hover": {          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",        transform: "translateY(-2px)",      transition: "all 0.3s ease",
          },
          "@media (max-width: 260px)": {
            maxWidth: "100%",
            borderRadius: "0",
            boxShadow: "none",
          },
        }}
      >
<CardMedia
  component="img"
  image={`${baseURL}${poster_path}`}
  alt={title}
  sx={{
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    height: "600px",
    "@media (max-width: 960px)": {
      height: "500px",
    },
    "@media (max-width: 600px)": {
      height: "400px",
    },
  }}
/>


        <CardContent
          sx={{
            padding: "16px",
            "@media (max-width: 260px)": {
              padding: "8px",
            },
          }}
        >
          <Typography variant="subtitle" color="initial" sx={{ fontSize: "18px" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="initial" sx={{ fontSize: "14px" }}>
           Rating: {vote_average}⭐
          </Typography>
          <Typography variant="body2" color="initial" sx={{ fontSize: "14px" }}>
            Fecha de Salida: {release_date}
          </Typography>
          <Typography variant="body2" color="initial" sx={{ fontSize: "14px" }}>
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
