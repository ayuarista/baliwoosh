import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "../src/components/templates/Header.jsx";
import Destination from "./pages/Destination.jsx";
import Staycations from "./pages/Staycations.jsx";
import FoodsDrinks from "./pages/FoodsDrinks.jsx";
import SearchResults from "./components/molecules/SearchResults.jsx";
import DestinationDetail from "./pages/DestinationDetail.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/staycations" element={<Staycations />} />
        <Route path="/food-drinks" element={<FoodsDrinks />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="destination/search" element={<Destination/>}/>
      </Routes>
    </Router>
  );
}

export default App;
