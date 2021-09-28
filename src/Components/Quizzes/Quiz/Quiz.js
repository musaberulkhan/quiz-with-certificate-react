import React from 'react';
import './Quiz.css';

const Quiz = (props) => {
    const {quiz, title, background} = props.quiz;
    return (
        <div style={{backgroundColor:background}} className="Quiz">
            <h3>{title}</h3>
        </div>
    );
};

export default Quiz;