import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Promociones from "./Components/pages/Promociones";
import PeliculasProvider from "./Context/PeliculaProvider";
import Estrenos from "./Components/pages/Estrenos";
import NavBar from "./Components/NavBar";
import Masvistas from "./Components/pages/Masvistas";
import ListPeliculas from "./Components/ListPeliculas";
import DetallePelicula from "./Components/pages/DetallePelicula";
import VistaOverview from "./Components/pages/VistaOverview";


import "./App.css";

function App() {
  return (
    <div className="App">
      <PeliculasProvider>
        <Router>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<ListPeliculas />} />
              <Route path="/peliculas/:id" element={<DetallePelicula />} />
              <Route path="/Promociones" element={ <Promociones />} />
              <Route path="/Estrenos" element={ <Estrenos />} />
              <Route path="/Masvistas" element={ <Masvistas />} />
              <Route path="/overview/:id" element={ <VistaOverview />} />
            
            </Routes>
          </Container>
        </Router>
      </PeliculasProvider>
    </div>
  );
}

export default App;
