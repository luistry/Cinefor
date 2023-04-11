import { useContext } from "react";
import { Typography, Grid } from "@mui/material";

import { PeliculasContext } from "../Context/PeliculaProvider";
import Peliculas from "./Peliculas";

const ListPeliculas = () => {
  const { peliculas } = useContext(PeliculasContext);

  return (
    <>
      <Typography variant="h3" color="initial"  textAlign={"center"} >Peliculas En Taquilla </Typography>
      <Grid container spacing={2} justifyContent="center">
       {peliculas.map((pelicula) => (
          <Grid item xs={6} md={3} >
          <Peliculas key={pelicula.id} pelicula={pelicula} /> 
          
        </Grid>
        
        ))}
      </Grid>
    </>
  );
};

export default ListPeliculas;

