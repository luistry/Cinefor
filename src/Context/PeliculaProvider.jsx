import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const ConsultarApi = async () => {
      const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=2301a5c6f81c1e19ea56e643adbe7950&page=1&language=es-MX&region=MX&include_adult=false"
      const { data } = await axios(url);
      setPeliculas(data.results);
    };
    ConsultarApi();
  }, []);

  return (
    <PeliculasContext.Provider value={{ peliculas }}>
      {children}
    </PeliculasContext.Provider> 
  );
};

export default PeliculasProvider;
