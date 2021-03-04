import './App.css';
import React, { useState } from 'react';
import { data } from './data.js';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function App() {
  const [questions, setQuestions] = useState(data);
  const [displayText, setDisplayText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <main>
      {questions.map((question, index) => {
        const { title, text } = question;
        return (
          <article className="question" key={index}>
            <header>
              <h2>{title}</h2>
              <button onClick={() => {
                setDisplayText(!displayText);
                setCurrentQuestion(index);
              }}>
                {displayText ? <IoIosArrowUp className='icon' /> : <IoIosArrowDown className='icon' />}
              </button>
            </header>
            <p className={currentQuestion === index && displayText ? 'show-text' : 'hide-text'}>{text}</p>
          </article>
        )
      })}


    </main>
  );
}

export default App;
