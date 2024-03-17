import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";
import Book from "./Book";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;