import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trainsData } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const train = trainsData.find(t => t.id === parseInt(id));

    const [selectedWagon, setSelectedWagon] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    if (!train) return <div>Потяг не знайдено</div>;

    const handleToggleSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleBookingSubmit = (userData) => {
        const bookingData = {
            id: Date.now(),
            trainNumber: train.number,
            wagon: selectedWagon,
            seats: selectedSeats,
            user: userData,
            totalPrice: selectedSeats.length * train.price
        };

        // Зберігаємо в LocalStorage
        const existingBookings = JSON.parse(localStorage.getItem('railway_bookings')) || [];
        localStorage.setItem('railway_bookings', JSON.stringify([...existingBookings, bookingData]));

        // Показуємо успішне повідомлення
        toast.success(`Успішно! Ви забронювали ${selectedSeats.length} місць.`);

        // Очищаємо вибрані місця
        setSelectedSeats([]);

        // Опційно: через 3 секунди повертаємо на головну
        setTimeout(() => navigate('/'), 3000);
    };

    return (
        <div className="booking-page">
            <ToastContainer position="top-center" autoClose={3000} />
            <Link to="/" className="back-link">← Назад до розкладу</Link>
            <h2>Бронювання: Потяг {train.number} ({train.route})</h2>

            <div className="booking-container">
                <div className="selection-area">
                    <WagonSelector selectedWagon={selectedWagon} onSelectWagon={setSelectedWagon} />
                    <SeatMap selectedSeats={selectedSeats} onToggleSeat={handleToggleSeat} />
                </div>

                <div className="summary-area">
                    <h3>Ваше замовлення:</h3>
                    <p><strong>Вагон:</strong> {selectedWagon}</p>
                    <p><strong>Місця:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Не обрано'}</p>
                    <p className="price">Сума: {selectedSeats.length * train.price} грн</p>

                    <BookingForm
                        selectedSeatsCount={selectedSeats.length}
                        onSubmit={handleBookingSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Booking;