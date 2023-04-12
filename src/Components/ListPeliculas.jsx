import { useContext } from "react";
import { Typography, Grid } from "@mui/material";

import { PeliculasContext } from "../Context/PeliculaProvider";
import Peliculas from "./Peliculas";

const ListPeliculas = () => {
  const { peliculas } = useContext(PeliculasContext);

  return (
    <>
      <Typography variant="h3" color="initial" textAlign={"center"}>Peliculas En Taquilla</Typography>
      <Grid container spacing={2} justifyContent="center">
        {peliculas.map((pelicula) => (
          <Grid item xs={12} sm={6} md={4} key={pelicula.id} sx={{ display: "flex", justifyContent: "center" }}>
            <Peliculas pelicula={pelicula} sx={{ maxWidth: "90%", margin: "auto" }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default ListPeliculas