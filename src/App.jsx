import { useState, useEffect } from "react";
import questions from "./questions";
import "./App.css";

// AI assistance acknowledgement:
// This application was developed with assistance from ChatGPT.

function App() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const [showFeedback, setShowFeedback] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(20);
  const [timeUp, setTimeUp] = useState(false);

  const question = quizQuestions[currentQuestion];

  // Timer for each question
  useEffect(() => {
    if (!quizStarted || showFeedback || showResults) {
      return;
    }

    if (timeLeft === 0) {
      setTimeUp(true);

      setAnswers((previous) => [
        ...previous,
        {
          questionId: question.id,
          selected: null,
          correct: false,
        },
      ]);

      setShowFeedback(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    quizStarted,
    showFeedback,
    showResults,
    timeLeft,
    question,
  ]);

  // Start quiz
  function startQuiz() {
    if (!category || !difficulty) {
      alert("Please select a category and difficulty.");
      return;
    }

    const filteredQuestions = questions.filter(
      (q) =>
        q.category === category &&
        q.difficulty === difficulty
    );

    if (filteredQuestions.length === 0) {
      alert("No questions available.");
      return;
    }

    setQuizQuestions(filteredQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowFeedback(false);
    setShowResults(false);
    setTimeLeft(20);
    setTimeUp(false);
    setQuizStarted(true);
  }

  // Select an answer
  function handleAnswer(option) {
    if (showFeedback) {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect = option === question.answer;

    setAnswers((previous) => [
      ...previous,
      {
        questionId: question.id,
        selected: option,
        correct: isCorrect,
      },
    ]);

    setShowFeedback(true);
  }

  // Move to next question
  function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(20);
      setTimeUp(false);
    } else {
      setShowResults(true);
    }
  }

  // Retry quiz
  function retryQuiz() {
    startQuiz();
  }

  // Return to home page
  function goHome() {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowFeedback(false);
    setTimeLeft(20);
    setTimeUp(false);
  }

  // Calculate score
  const score = answers.filter((answer) => answer.correct).length;

  // Home screen
  if (!quizStarted) {
    return (
      <div className="app">
        <nav className="navbar">
          <h2>QuizMaster</h2>
        </nav>

        <main className="container">
          <section className="welcome">
            <h1>Welcome to QuizMaster!</h1>
            <p>
              Test your knowledge and challenge yourself with
              interesting questions.
            </p>
          </section>

          <section className="selection">
            <h2>Choose Your Quiz</h2>

            <label>Select Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option value="General Knowledge">
                General Knowledge
              </option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Technology">Technology</option>
            </select>

            <label>Select Difficulty</label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Choose difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <button className="start-button" onClick={startQuiz}>
              Start Quiz
            </button>
          </section>
        </main>

        <footer>
          <p>QuizMaster - Learn, Play and Improve!</p>
        </footer>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    return (
      <div className="app">
        <nav className="navbar">
          <h2>QuizMaster</h2>
        </nav>

        <main className="container">
          <section className="results">
            <h1>Quiz Completed!</h1>

            <h2>
              Your Score: {score} / {quizQuestions.length}
            </h2>

            <p>
              You answered {score} questions correctly out of{" "}
              {quizQuestions.length}.
            </p>

            <div className="result-actions">
              <button className="start-button" onClick={retryQuiz}>
                Try Again
              </button>

              <button className="home-button" onClick={goHome}>
                Home
              </button>
            </div>

            <h2>Answer Review</h2>

            <div className="review">
              {quizQuestions.map((q, index) => {
                const userAnswer = answers.find(
                  (answer) => answer.questionId === q.id
                );

                return (
                  <div className="review-item" key={q.id}>
                    <h3>
                      Question {index + 1}: {q.question}
                    </h3>

                    <p>
                      Your answer:{" "}
                      {userAnswer?.selected || "Not answered"}
                    </p>

                    <p>Correct answer: {q.answer}</p>

                    <p>
                      Result:{" "}
                      {userAnswer?.correct ? "Correct" : "Incorrect"}
                    </p>

                    <p>Explanation: {q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="app">
      <nav className="navbar">
        <h2>QuizMaster</h2>
        <button className="home-button" onClick={goHome}>
          Home
        </button>
      </nav>

      <main className="container">
        <section className="quiz-box">
          <div className="quiz-top">
            <p>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>

            <p className="timer">
              Time Left: {timeLeft}s
            </p>
          </div>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width:
                  ((currentQuestion + (showFeedback ? 1 : 0)) /
                    quizQuestions.length) *
                    100 +
                  "%",
              }}
            ></div>
          </div>

          <h2 className="question-text">
            {question.question}
          </h2>

          <div className="answer-options">
            {question.options.map((option, index) => {
              let className = "answer-option";

              if (showFeedback && option === question.answer) {
                className += " correct";
              } else if (
                showFeedback &&
                option === selectedAnswer &&
                !timeUp
              ) {
                className += " incorrect";
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                >
                  <strong>
                    {String.fromCharCode(65 + index)}.
                  </strong>{" "}
                  {option}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="feedback">
              {timeUp ? (
                <p>Time is up! You did not answer this question.</p>
              ) : selectedAnswer === question.answer ? (
                <p>Correct answer! Well done!</p>
              ) : (
                <p>Incorrect answer. Better luck next time!</p>
              )}

              <p>
                Explanation: {question.explanation}
              </p>

              <button
                className="start-button"
                onClick={nextQuestion}
              >
                {currentQuestion === quizQuestions.length - 1
                  ? "See Results"
                  : "Next Question"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;