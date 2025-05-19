import React, { useState, useEffect } from 'react';

const RotatingText = ({ sentences, interval = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                setFade(true); // fade in new text
            }, 200); // match fade out duration
        }, interval);

        return () => clearInterval(id);
    }, [sentences, interval]);

    return (
        <div className="text-xl font-semibold text-center h-10 flex items-center justify-center">
            <h1
                className={`transition-opacity duration-500 ease-in-out ${
                    fade ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {sentences[index]}
            </h1>
        </div>
    );
};

export default RotatingText;
