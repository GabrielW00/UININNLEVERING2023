import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashborad from "./pages/dashborad";
import Mygames from "./pages/mygames";      //importer alle sider fra pages
import Gameshop from "./pages/gameshop";
import Favorites from "./pages/favorites";
import GamePage from "./pages/gamePage";
// import Home fra "./pages/home";
//function app med dashboard og andre elementer
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashborad />} />
          {/*route*/}
          <Route path="/mygames" element={<Mygames />} />
          <Route path="/gameshop" element={<Gameshop />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/game/:game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
