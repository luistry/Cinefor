import { useContext } from "react";
import { Typography, Grid } from "@mui/material";

import { PeliculasContext } from "../Context/PeliculaProvider";
import Peliculas from "./Peliculas";

const ListPeliculas = () => {
  const { peliculas } = useContext(PeliculasContext);

  return (
    <>
      <Typography variant="h3" color="initial"  textAlign={"center"} >Peliculas En Taquilla </Typography>
      <Grid container sx={{ justifyContent: 'space-', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', margin: 'auto' }}>
        {peliculas.map((pelicula) => (
          <Peliculas key={pelicula.id} pelicula={pelicula} />
        ))}
      </Grid>
    </>
  );
};

export default ListPeliculas;

