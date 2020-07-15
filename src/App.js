import React from 'react';
import DateAndTime from './DateAndTime';
import FavMovies from './FavMovies';
import ImageGallery from './ImageGallery';
import Introduction from './Introduction';
import Calculator from './Calculator';
import './index.css';

function App() {
    return (
        <>
            <Introduction />
            <DateAndTime />
            <FavMovies />
            <ImageGallery />
            <Calculator />
        </>
    );
}
export default App; 