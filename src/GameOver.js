import React from 'react';
import "./GameOver.css";

const closeHandler = () => {
    window.location.reload();
};

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="gameover_box">
                <h2>Game Over</h2>
                <p>Your Score Was: {props.score}</p>
                <p>{props.endMessage}</p>
                <button onClick={closeHandler}>X</button>
            </div>
        </div>
    );
};

export default GameOver;