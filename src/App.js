import React, { useState } from "react";
import "./App.css";

const cards = [
  {
    question: "What is Software Engineering?",
    answer: "Software Engineering is the application of engineering principles to software development, focusing on designing, building, testing, and maintaining software systems.",
  },
  {
    question: "What is the Software Development Life Cycle (SDLC)?",
    answer: "SDLC is a process used by software developers to design, develop, test, and deploy software. Common stages include planning, design, implementation, testing, and maintenance.",
  },
  {
    question: "What are the differences between front-end and back-end development?",
    answer: "Front-end development focuses on the user interface and experience (UI/UX), while back-end development handles the server, database, and application logic behind the scenes.",
  },
  {
    question: "What is the difference between Software Engineering and Computer Science?",
    answer: "Software Engineering focuses on the practical application of engineering principles to software development, while Computer Science is more theoretical, dealing with algorithms, data structures, and computation theory.",
  },
  {
    question: "What are the key principles of Software Engineering?",
    answer: "Key principles include requirements analysis, system design, modularization, testing, documentation, and maintaining code quality throughout the development lifecycle.",
  },
  {
    question: "What is the role of a Software Engineer?",
    answer: "A Software Engineer designs, develops, tests, and maintains software applications or systems, working with other engineers to solve problems and create efficient, scalable solutions.",
  },
  {
    question: "What is refactoring in Software Engineering?",
    answer: "Refactoring is the process of improving the internal structure of the code without changing its external behavior, aimed at making it more efficient, readable, and maintainable.",
  },
  {
    question: "What is software architecture?",
    answer: "Software architecture is the high-level structure of a software system, defining its components, their interactions, and the principles guiding its design to ensure it meets functional and non-functional requirements.",
  },
  {
    question: "What is software scalability?",
    answer: "Scalability refers to a software system's ability to handle increased load or users by scaling up (adding resources) or scaling out (distributing the load across multiple systems).",
  },
  {
    question: "What are the common Software Engineering methodologies?",
    answer: "Popular methodologies include Agile, Waterfall, Scrum, and DevOps, each focusing on different approaches to managing development processes and team collaboration.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const goToNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="App">
      <h1>SWE Essentials: Your Flashcard Guide to Success!</h1>
      <p className="description">
        Quick and effective flashcards to master key Software Engineering
        concepts and boost your study efforts.
      </p>
      <p className="card-count">Total Cards: {cards.length}</p>

      <div className="flashcard-container" onClick={handleCardClick}>
        <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
          <div className="front">{currentCard.question}</div>
          <div className="back">{currentCard.answer}</div>
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="arrow-button" onClick={goToPrevious}>
          &larr;
        </button>
        <button className="arrow-button" onClick={goToNext}>
          &rarr;
        </button>
      </div>

      {/* Bubble Elements */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
    </div>
  );
}

export default App;
