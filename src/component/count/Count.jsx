import React, { useEffect, useState, useRef } from "react";
import './Count.css';

const Count = () => {
    const [count, setCount] = useState(0)
    const [isCounting, setisCounting] = useState(false);
    const audioRef = useRef(new Audio(`${process.env.PUBLIC_URL}/cogeNube.mp3`)); 
    const [bg, setBg] = useState('#242424');

    useEffect(() => {
        let timeout;

        if (isCounting) timeout = setTimeout(() => setCount(prev => prev + 1), 1000);        
        if (count > 0 && count % 10 === 0) {
            audioRef.current.play();
            setBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }
        return () => clearTimeout(timeout);
    }, [isCounting, count]);

    const handleCountPause = () => setisCounting(prev => !prev);
    const handleCountReset = () => {
        setCount(0);
        setisCounting(false);
        setBg('#242424');
    }

    return (
        <div className='counter' style={{ backgroundColor: bg }}>
            <h1>Tiempo transcurrido: {count} segundos</h1>
            <button onClick={handleCountPause} >{isCounting ? "Parar" : "Continuar"}</button>
            <button onClick={handleCountReset}>Reiniciar</button>
        </div>
    )
}

export default Count;