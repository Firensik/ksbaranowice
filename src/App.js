import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aktualnosci from "./routes/Aktualnosci/Aktualnosci";
import Galeria from "./routes/Aktualnosci/Galeria";
import GalleryPage from "./routes/Aktualnosci/GalleryPage";
import Kontakt from "./routes/Klub/Kontakt";
import Zarzad from "./routes/Klub/Zarzad";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Aktualnosci />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/GaleriaPage/:id" element={<GalleryPage />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/zarzad" element={<Zarzad />} />
        <Route path="/ministerstwo" element={<Footer />} />

        <Route path="/rozgrywki" element={<rozgrywki />} />
      </Routes>
    </div>
  );
}
// dodac wszytko z gallery page do gallery
//ustawic on clicka na img zeby podawalo id do komponentu a pozniej wyciagac z niego elementy

export default App;
