import React, { useState, useEffect, useCallback } from "react";
import randomizeArray from "../../helpers/randomizeArray";
import useGetEmployees from "../../api/useGetEmployees";
import MenuScreen from "../../components/menu-screen/MenuScreen";
import AppHeader from "../../components/app-header/AppHeader";
import AppNav from "../../components/app-nav/Navigation";
import NameContainer from "../name-container/NameContainer";
import HeadShotContainer from "../headshot-container/HeadshotContainer";
import Timer from "../../components/timer/Timer";

const GameScreen = () => {
  // **************************************
  // GAME STATE VARIABLES
  // **************************************

  const [showMenu, setShowMenu] = useState(true);
  const [shortenedEmployeeList, setShortenedEmployeeList] = useState([]);
  const [randomEmployee, setRandomEmployee] = useState({});
  const [score, setScore] = useState(0);
  const [isPracticeMode, setIsPracticeMode] = useState(null);

  // **************************************
  // API HOOK
  // **************************************

  const { data, isLoading, error } = useGetEmployees();

  // **************************************
  // GAME METHODS/ FUNCTIONS
  // **************************************

  const startNextRound = useCallback(() => {
    randomizeArray(data);
    const updatedEmployeeList = data.splice(0, 6);
    setShortenedEmployeeList(updatedEmployeeList);
    setRandomEmployee(
      updatedEmployeeList[
        Math.floor(Math.random() * updatedEmployeeList.length)
      ]
    );
  }, [data, setShortenedEmployeeList]);

  useEffect(() => {
    if (data == null || data.length === 0) {
      return;
    }
    startNextRound();
  }, [data, startNextRound]);

  const handleGameStart = (isPracticeMode) => {
    setShowMenu(false);
    setIsPracticeMode(isPracticeMode);
  };

  const handleHideMenu = () => {
    setShowMenu(true);
  };

  const handleGuess = (id) => {
    let selectedHeadshot = shortenedEmployeeList.find(
      (employee) => employee.id === id
    );
    selectedHeadshot.showOverlay = true;

    if (id === randomEmployee.id) {
      selectedHeadshot.isCorrect = true;
      setScore(score + 1);
      setTimeout(() => {
        startNextRound();
      }, 750);
      console.log(selectedHeadshot);
    } else {
      selectedHeadshot.isCorrect = false;
      if (isPracticeMode) {
        setTimeout(() => {
          alert(`Game Over. Your Score is : ${score}`);
          startNextRound();
          setShowMenu(true);
        }, 1000);
      }
      console.log(selectedHeadshot);
    }

    setShortenedEmployeeList([...shortenedEmployeeList]);
  };

  // **************************************
  // RENDERING OF GAMESCREEN COMPONENT
  // **************************************
  return (
    <div className="grid__wrapper">
      {showMenu && <MenuScreen handleGameStart={handleGameStart} />}

      {isLoading ? (
        <h1>Loading Game Content</h1>
      ) : (
        <>
          <header className="flex__container--header">
            <AppHeader
              showMenu={handleHideMenu}
              isPracticeMode={isPracticeMode}
            />
            {!isPracticeMode && <Timer />}
          </header>
          <main className="flex__container">
            <NameContainer
              randomEmployee={randomEmployee}
              isLoading={isLoading}
              error={error}
            />
            <HeadShotContainer
              handleGuess={handleGuess}
              employeeData={shortenedEmployeeList}
              isLoading={isLoading}
              error={error}
            />
          </main>
          <nav>
            <AppNav />
          </nav>
        </>
      )}
    </div>
  );
};

export default GameScreen;
