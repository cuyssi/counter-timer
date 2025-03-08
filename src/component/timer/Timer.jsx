import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
    const [timer, setTimer] = useState(30);
    const [phrase, setPhrase] = useState("¡Vamos bien!")

    useEffect(() => {
        if (timer <= 0) {
            setPhrase("¡Game over!");
            return;
        }
        const timeOut = setTimeout(() =>setTimer(prevTimer => prevTimer - 1), 1000);
        if (timer === 20) setPhrase("¡Casi, casi!");
        else if (timer === 10) setPhrase("¡Tiempo casi agotado!");
        return () => clearTimeout(timeOut);
    }, [timer]);
    
    return (
        <div className="counter">
            <h2>{timer}</h2>
            <p>{phrase}</p>
        </div>
    )
}

export default Timer