import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/templates/Header.jsx";
import Destination from "./pages/Destination.jsx";
import Staycations from "./pages/Staycations.jsx";
import FoodsDrinks from "./pages/FoodsDrinks.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/staycations" element={<Staycations/>}/>
        <Route path="/food-drinks" element={<FoodsDrinks/>} /> 
      </Routes>
    </Router>
  );
}

export default App;