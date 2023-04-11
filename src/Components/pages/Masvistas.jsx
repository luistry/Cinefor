import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container, CardActions, Link, Button } from "@mui/material";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import VistaOverview from "./VistaOverview";

const Masvistas = () => {
  const [vista, setvista] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
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
             <Typography variant="h2" textAlign="center" sx={{ fontFamily: "sans-serif", marginTop: "1rem" }} color="initial">Peliculas mas vistas</Typography>   <div style={{ paddingTop: "80px" }}>
   
      
      {vista.length > 0 ? (
        <Container>
          <Grid container sx={{ gap: { xs: 0.5, lg: 1.5 } }}>
            {vista.map(({ id, title, poster_path, vote_average, vote_count, overview }, index) => (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <div>
                  <Link component={RouterLink} to={`/overview/${id}`} style={{ textDecoration: "none" }}>
                    <Card sx={{ justifyContent: "space-around", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", margin: "auto" }}>
                      <CardMedia component="img" height="450" image={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster de ${title}`} />
                      <CardContent>
                        <Typography variant="subtitle1" noWrap component="div">
                          {title}
                        </Typography>
                        <Typography variant="subtitle2" color="initial">
                          Votaciones: {vote_count}
                        </Typography>
                        <Typography variant="subtitle2" color="initial">
                          Rating: {vote_average}⭐
                        </Typography>
                        <Typography variant="body2" noWrap component="div">
                          {showOverview && selectedId === id ? overview : `${overview.substring(0, 100)}...`}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant="contained" size="small" onClick={() => toggleOverview(id)}>
                          Ver mas...
                        </Button>
                      </CardActions>
                    </Card>
                  </Link>
                </div>
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
