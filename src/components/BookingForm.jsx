import React, { useState } from 'react';

const BookingForm = ({ onSubmit, selectedSeatsCount }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
        // Проста перевірка телефону (мають бути цифри)
        if (!formData.phone.match(/^\+?[\d\s-]{10,14}$/)) newErrors.phone = "Некоректний телефон";
        // Проста перевірка email
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Некоректний email";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData); // Передаємо дані вище, якщо помилок немає
        } else {
            setErrors(newErrors);
        }
    };

    // Не показуємо форму, якщо місця не обрані
    if (selectedSeatsCount === 0) return null;

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Дані пасажира</h3>
            <div className="form-group">
                <input type="text" name="name" placeholder="ПІБ" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
                <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <button type="submit" className="btn-book" style={{ marginTop: '15px' }}>
                Підтвердити бронювання
            </button>
        </form>
    );
};

export default BookingForm;