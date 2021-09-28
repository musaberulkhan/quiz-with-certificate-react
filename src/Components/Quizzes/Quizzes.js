import React, { useEffect, useState } from 'react';
import Quiz from './Quiz/Quiz';
import './Quizzes.css';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);    

    useEffect(() => {
        fetch('quiz.JSON')
        .then(res => res.json())
        .then(data => setQuizzes(data.quizzes));
    }, []);

    return (
        <div className="Quizzes container">
            {
                quizzes.map(item => <Quiz key={item.quiz} quiz={item}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;