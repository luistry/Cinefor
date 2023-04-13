import { Card, CardContent, Typography, CardMedia, Button, Grid, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Masvistas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2301a5c6f81c1e19ea56e643adbe7950&page=1&language=es-MX&region=MX&include_adult=false";

    const fetchData = async () => {
      const { data } = await axios(url);
      setPeliculas(data.results);
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ margin: "1rem" }}>
      <Grid container spacing={2}>
        {peliculas.map((pelicula, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pelicula.id}>
            <Card
              sx={{
                maxWidth: "300px",
                margin: "0 auto",
                marginBottom: "1rem",
                backgroundColor: "#f8f8f8",
                boxShadow: "none",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                transform: index === hoveredIndex ? 'scale(1.05)' : 'scale(1)',
                "&:hover": {
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(-2px)",
                },
                "@media (max-width: 260px)": {
                  maxWidth: "100%",
                  borderRadius: "0",
                  boxShadow: "none",
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardMedia
                component="img"
                sx={{
                  height: "430px",
                  "@media (max-width: 960px)": {
                    height: "400px",
                  },
                  "@media (max-width: 600px)": {
                    height: "auto",
                    maxWidth: "100%",
                    margin: "0 auto",
                    display: "block"
                  },
                }}
                image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <CardContent
                sx={{
                  padding: "16px",
                  "@media (max-width: 260px)": {
                    padding: "8px",
                  },
                }}
              >
                <Typography variant="subtitle1" noWrap>
                  {pelicula.title}
                </Typography>
                <Typography variant="body2">
                  Fecha de lanzamiento: {pelicula.release_date}
                </Typography>
                <Typography variant="body2">
                  Puntuación: {pelicula.vote_average}
                </Typography>
                <Link to={`/overview/${pelicula.id}`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary">
                    Ver más
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Masvistas;
