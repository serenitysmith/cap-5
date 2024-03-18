import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Book = () => {
  const location = useLocation();
  const [offers, setOffers] = useState([]);
  const [selectedOfferId, setSelectedOfferId] = useState(null);
  const [confirmationDetails, setConfirmationDetails] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hotelId = location.state?.hotelId; // Assuming hotelId is passed through location.state

  useEffect(() => {
    if (hotelId) {
      setIsLoading(true);
      axios.get(`/api/offers`, { params: { hotelId } })
        .then(response => {
          setOffers(response.data.data.offers || []);
        })
        .catch(error => console.error("Error fetching hotel offers", error))
        .finally(() => setIsLoading(false));
    }
  }, [hotelId]);

  const confirmOffer = (offerId) => {
    setIsLoading(true);
    axios.get(`/api/offer`, { params: { offerId } })
      .then(response => {
        setConfirmationDetails(response.data);
        setSelectedOfferId(offerId);
      })
      .catch(error => console.error("Error confirming offer", error))
      .finally(() => setIsLoading(false));
  };

  const bookOffer = () => {
    setIsLoading(true);
    axios.post(`/api/booking`, {
      offerId: selectedOfferId,
      guests: [{ name: "Guest Name" }], // Example, replace with actual data
      payments: {
        method: "credit",
        cardNumber: "1234567890123456" // Example, replace with actual data
      }
    })
    .then(response => {
      setBookingSuccess(true);
    })
    .catch(error => console.error("Error booking offer", error))
    .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (bookingSuccess) {
    return <div>Booking successful!</div>;
  }

  return (
    <div>
      <h2>Hotel Offers</h2>
      {offers.map((offer, index) => (
        <div key={index} onClick={() => confirmOffer(offer.id)}>
          Offer: {offer.id}
          {/* Display more offer details here */}
        </div>
      ))}
      {confirmationDetails && (
        <div>
          <p>Offer confirmed: {selectedOfferId}</p>
          {/* Display confirmed offer details */}
          <button onClick={bookOffer}>Book Now</button>
        </div>
      )}
    </div>
  );
};

export default Book;


// Fetches offers for a given hotel upon component mount and displays them.
// When an offer is clicked, it confirms the offer by making an API call with the selected offer's ID.
// Once the offer is confirmed, it displays a "Book Now" button which, when clicked, books the offer by making a POST request with the offer ID and necessary guest and payment information.
// Please adjust the example to match your actual data structure and ensure you replace placeholder data with actual user input where necessary. 





