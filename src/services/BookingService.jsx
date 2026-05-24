export const BookingService = {
    saveBooking: (bookingData) => {
        const existingBookings = JSON.parse(localStorage.getItem('railway_bookings')) || [];
        localStorage.setItem('railway_bookings', JSON.stringify([...existingBookings, bookingData]));
    },

    getBookings: () => {
        return JSON.parse(localStorage.getItem('railway_bookings')) || [];
    }
};