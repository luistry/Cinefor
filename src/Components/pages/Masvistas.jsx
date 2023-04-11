import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container, CardActions, Link, Button } from "@mui/material";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Peliculas from "../Peliculas";
import VistaOverview from "./VistaOverview";

const Masvistas = () => {
  const [vista, setvista] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2301a5c6f81c1e19ea56e643adbe7950&page=1&language=es-MX&region=MX&include_adult=false";

    const ConsultaApi = async () => {
      const { data } = await axios(url);
      setvista(data.results);
    };

    ConsultaApi();
  }, []);

  const toggleOverview = (id) => {
    setShowOverview(true);
    setSelectedId(id);
    navigate(`/overview/${id}`);
  };

  return (
    <div>
      <Typography variant="h2" textAlign="center" sx={{ fontFamily: "sans-serif", marginTop: "1rem" }} color="initial">Peliculas mas vistas</Typography>
      <div style={{ paddingTop: "80px" }}>
        {vista.length > 0 ? (
          <Container>
            <Grid container spacing={2} justifyContent="center">
              {vista.map((pelicula) => (
                <Grid item xs={6} md={3} key={pelicula.id}>
                  <Peliculas pelicula={pelicula} />
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
          <p>Cargando películas...</p>
        )}
        {showOverview && <VistaOverview />}
      </div>
    </div>
  );
};

export default Masvistas;
