import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trainsData } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';

const Booking = () => {
    const { id } = useParams();
    const train = trainsData.find(t => t.id === parseInt(id));

    const [selectedWagon, setSelectedWagon] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    if (!train) return <div>Потяг не знайдено</div>;

    const handleToggleSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat)); // Зняти вибір
        } else {
            setSelectedSeats([...selectedSeats, seat]); // Обрати місце
        }
    };

    return (
        <div className="booking-page">
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

                    {/* У наступному кроці ми додамо сюди форму для ПІБ та Email */}
                    {selectedSeats.length > 0 && (
                        <p style={{ color: 'green', marginTop: '20px' }}>Далі буде форма даних пасажира...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;