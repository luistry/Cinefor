import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Busqueda from "./pages/Busqueda";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Masvistas from "./pages/Masvistas";
import Promociones from "./pages/Promociones";
import Estrenos from "./pages/Estrenos";
import VistaOverview from "./pages/VistaOverview";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Masvistas">
            <Masvistas />
          </Route>
          <Route path="/Promociones">
            <Promociones />
          </Route>
          <Route path="/Estrenos">
            <Estrenos />
          </Route>
          <Route path="/peliculas/:titulo" component={Busqueda} />
          <Route path="/overview/:id" component={VistaOverview} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
