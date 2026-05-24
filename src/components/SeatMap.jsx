import React from 'react';

const SeatMap = ({ selectedSeats, onToggleSeat }) => {
    const totalSeats = 36; // Стандартний вагон
    const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

    return (
        <div className="seat-map">
            <h3>Оберіть місця:</h3>
            <div className="seats-grid">
                {seats.map(seat => {
                    const isSelected = selectedSeats.includes(seat);
                    const isBooked = [13, 14, 25].includes(seat); // Тестові зайняті місця

                    return (
                        <button
                            key={seat}
                            disabled={isBooked}
                            className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : 'free'}`}
                            onClick={() => onToggleSeat(seat)}
                        >
                            {seat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SeatMap;