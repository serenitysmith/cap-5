import { useState, useEffect } from "react";
import getRooms from "./config"; // Corrected import

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(getRooms.url, {
          method: getRooms.method,
          headers: getRooms.headers,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const data = await response.json();
        setRooms(data); // Assuming the API response directly contains the rooms array
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Our Rooms</h2>

      <div className="rooms-list">
        {rooms.map((room) => (
          <div key={room.id} className="room">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p>${room.price}/night</p>
          </div>
        ))}
      </div>
    </div>
  );
}
