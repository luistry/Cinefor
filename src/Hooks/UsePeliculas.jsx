import { useContext } from "react";
import { PeliculasContext } from "../Context/PeliculaProvider";

const UsePeliculas = () => {
   const context = useContext(PeliculasContext);
   return context;
 };
 export default UsePeliculas
 