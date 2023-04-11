import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Stack, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";


const NavBar = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const ConsultarApi = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=2301a5c6f81c1e19ea56e643adbe7950&page=1&language=es-MX&region=MX&include_adult=false";
      const { data } = await axios(url);
      setPeliculas(data.results);
    };
    ConsultarApi();
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredPeliculas = peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <AppBar position="static" sx={{ bgcolor: "black", textAlign: "center" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", md: "4rem" },
          flexGrow: 1,
          margin: "auto",
        }}
        color="white"
      >
        ⭐Cinefor⭐
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ flexGrow: 1, margin: "auto" }} spacing={2}>
  <Button
    variant="text"
    color="inherit"
    sx={{ "&:hover": { color: "gold" }, p: 2 }} // Agregar p: 2 para añadir padding
    startIcon={<HomeIcon />}
    component={Link}
    to="/"
  >
    Home
  </Button>
  <Button
    variant="text"
    color="inherit"
    sx={{ "&:hover": { color: "gold" }, p: 2 }} // Agregar p: 2 para añadir padding
    startIcon={<PersonalVideoIcon />}
    component={Link}
    to="/Masvistas"
  >
    Mas Vistas
  </Button>
  <Button
    variant="text"
    color="inherit"
    sx={{ "&:hover": { color: "gold" }, p: 2 }} // Agregar p: 2 para añadir padding
    startIcon={<CampaignIcon />}
    component={Link}
    to="/Promociones"
  >
    Promociones
  </Button>
  <Button
    variant="text"
    color="inherit"
    sx={{ "&:hover": { color: "gold" }, p: "1rem" }} // Agregar p: 2 para añadir padding
    startIcon={<LocalMoviesIcon />}
    component={Link}
    to="/Estrenos"
  >
    Estrenos
  </Button>
</Stack>

    </AppBar>
  );
};

export default NavBar;
