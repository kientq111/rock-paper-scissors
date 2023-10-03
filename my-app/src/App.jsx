import "./App.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import ScoreTable from "./components/ScoreTable";
import { Rule } from "./components/Rule";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState();
  const [openModal, setOpenModal] = useState(false);
  const handleChoice = (choice) => {
    setUserChoice(choice);
  };

  const handleScore = (newScore) => {
    setScore(score + newScore);
  };

  const handleModal = (modalState) => {
    setOpenModal(!modalState);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ScoreTable score={score} />
        {userChoice ? (
          <StepTwo
            handleScore={handleScore}
            userChoice={userChoice}
            handleChoice={handleChoice}
          />
        ) : (
          <StepOne handleChoice={handleChoice} />
        )}
        <button className="rule" onClick={() => handleModal(openModal)}>
          RULE
        </button>
        {openModal && (
          <Rule modalState={openModal} handleModal={handleModal} />
        )}
      </div>
    </div>
  );
}

export default App;
