import React from 'react';

const WagonSelector = ({ selectedWagon, onSelectWagon }) => {
    const wagons = [1, 2, 3, 4, 5]; // Для прикладу маємо 5 вагонів

    return (
        <div className="wagon-selector">
            <h3>Оберіть вагон:</h3>
            <div className="wagons-list">
                {wagons.map(wagon => (
                    <button
                        key={wagon}
                        className={`btn-wagon ${selectedWagon === wagon ? 'selected' : ''}`}
                        onClick={() => onSelectWagon(wagon)}
                    >
                        Вагон {wagon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WagonSelector;