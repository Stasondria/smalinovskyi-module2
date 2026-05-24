import React from 'react';

const TrainCard = ({ train }) => {
    return (
        <div className="train-card">
            <h3>Потяг {train.number}</h3>
            <p><strong>Маршрут:</strong> {train.route}</p>
            <p><strong>Відправлення:</strong> {train.departure}</p>
            <p><strong>Прибуття:</strong> {train.arrival}</p>
            <p><strong>Тривалість:</strong> {train.duration}</p>
            <div className="price">Ціна: {train.price} грн</div>
            <button className="btn-book">Обрати місця</button>
        </div>
    );
};

export default TrainCard;