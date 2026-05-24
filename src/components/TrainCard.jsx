import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
    return (
        <div className="train-card">
            <h3>Потяг {train.number}</h3>
            <p><strong>Маршрут:</strong> {train.route}</p>
            <p><strong>Відправлення:</strong> {train.departure}</p>
            <p><strong>Прибуття:</strong> {train.arrival}</p>
            <p><strong>Тривалість:</strong> {train.duration}</p>
            <div className="price">Ціна: {train.price} грн</div>
            <Link to={`/booking/${train.id}`} className="btn-book" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
                Обрати місця
            </Link>
        </div>
    );
};

export default TrainCard;