import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { DateFilters } from "./DateFilters";
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

  <Container maxWidth="sm" className={classes.container}>
    {/* ... */}
    <DateFilters
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
      setCheckInDate={setCheckInDate}
      setCheckOutDate={setCheckOutDate}
    />
  </Container>
}
