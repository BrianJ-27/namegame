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
  const [showMenu, setShowMenu] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [changeMode, setChangeMode] = useState("Practice Mode");
  const [shortenedEmployeeList, setShortenedEmployeeList] = useState([]);
  const [randomEmployee, setRandomEmployee] = useState({});

  /* ------ Brings in my API employee data along with two other state properties  ------ */
  const { data, isLoading, error } = useGetEmployees();

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

  const handleGameStart = (isTimedMode) => {
    setShowMenu(false);
    if (isTimedMode) {
      setShowTimer(true);
    }
    setChangeMode(isTimedMode ? "Timed Mode" : "Practice Mode");
  };

  const handleHideMenu = () => {
    setShowMenu(true);
  };

  const handleGuess = (id) => {
    // Created a variable to store the selected headshot
    //  Create a new property of "showOverlay" on the object and set it true
    // Compare the unique ID for a match & setIsCorrect appropriately
    // Set a delay to start a new round
    // Set a delay to show the game result (modal)

    let selectedHeadshot = shortenedEmployeeList.find(
      (employee) => employee.id === id
    );
    selectedHeadshot.showOverlay = true;

    if (id === randomEmployee.id) {
      selectedHeadshot.isCorrect = true;

      console.log(selectedHeadshot);
    } else {
      selectedHeadshot.isCorrect = false;
    }

    setShortenedEmployeeList([...shortenedEmployeeList]);

    // setIsCorrect({
    //   isActive: isCorrect.isActive,
    //   employeeArray: [
    //     // Containing the updated employee object
    //     // and the other 5 employees. Also, order should be maintained.
    //   ]
    // })
  };

  return (
    <div className="grid__wrapper">
      {showMenu && <MenuScreen handleGameStart={handleGameStart} />}

      {isLoading ? (
        <h1>Loading Game Content</h1>
      ) : (
        <>
          <header className="flex__container--header">
            <AppHeader showMenu={handleHideMenu} changeMode={changeMode} />
            {showTimer && <Timer />}
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
