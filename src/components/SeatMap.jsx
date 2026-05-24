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
                    return (
                        <button
                            key={seat}
                            className={`seat ${isSelected ? 'selected' : 'free'}`}
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