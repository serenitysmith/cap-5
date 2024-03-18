
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Mock Footer component
const Footer = () => <footer>© 2024 Hotel Finder</footer>;

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  const searchHotels = async () => {
    try {
      const response = await axios.get(`api/search`, {
        params: { keyword: search },
      });
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels", error);
    }
  };

  return (
    <div>
      <h2>Welcome to our Hotel!</h2>

      <input
        type="text"
        placeholder="Search for hotels"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchHotels}>Search</button>

      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <Link to={{ pathname: "/book", state: { hotelId: hotel.id } }}>{hotel.name}</Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;