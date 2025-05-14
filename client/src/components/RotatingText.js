import React, { useState, useEffect } from 'react';

const RotatingText = ({ sentences, interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, interval);

        return () => clearInterval(id); // Cleanup on unmount
    }, [sentences, interval]);

    return (
        <div className="text-xl font-semibold text-center">
            <h1>{sentences[index]}</h1>
        </div>
    );
};

export default RotatingText;
