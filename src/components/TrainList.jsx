import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trainsData } from '../data/trains';

const TrainList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Фільтрація рейсів за маршрутом або номером
    const filteredTrains = trainsData.filter(train =>
        train.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
        train.number.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="train-list-container">
            <input
                type="text"
                placeholder="Пошук за маршрутом або номером..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <div className="train-grid">
                {filteredTrains.length > 0 ? (
                    filteredTrains.map(train => (
                        <TrainCard key={train.id} train={train} />
                    ))
                ) : (
                    <p>Рейсів не знайдено</p>
                )}
            </div>
        </div>
    );
};

export default TrainList;