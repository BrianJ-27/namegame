import React, { useState } from "react";
import useGetEmployees from "../../api/useGetEmployees";
import { MenuScreenWrapper, MenuFlex } from "../../components/menu-screen/MenuScreenStyles";
import Header from "../../components/app-header/Header";
import Navigation from "../../components/app-nav/Navigation";
import NameContainer from "../name-container/NameContainer"
import HeadShotContainer from "../headshot-container/HeadshotContainer";
import Timer from "../../components/timer/Timer";

const GameScreen = () => {
  const { data, isLoading, error } = useGetEmployees(); //API Call

  const randomizeArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  randomizeArray(data);
  const shortenedEmployeeList = data.splice(0, 6);

  /* Menu Screen Logic Starts */
  const [showMenu, setShowMenu] = useState(true);
  const [showTimer, setShowTimer] = useState(false);

  const handleShowMenu = ({ target }) => {
    setShowTimer(target.name === "timed");
    setShowMenu(false);
  };

  const handleHideMenu = () => {
    setShowMenu(true);
  };
  /* Menu Screen Logic Ends */

  return (
    <div className="grid__wrapper">
      {/* Try to put this menu screen markup into its own component */}
      {showMenu && (
        <MenuScreenWrapper>
          <MenuFlex>
            <p>Try Matching the Willow Tree Employee to their photo</p>
            <button name="practice" onClick={handleShowMenu}>
              Practice Mode
            </button>
            <button name="timed" onClick={handleShowMenu}>
              Timed Mode
            </button>
          </MenuFlex>
        </MenuScreenWrapper>
      )}
      <header className="flex__container--header">
        <Header showMenu={handleHideMenu} />
        {showTimer && <Timer />}
      </header>
      <main className="flex__container">
        <NameContainer employeeData={shortenedEmployeeList} isLoading={isLoading} error={error} />
        <HeadShotContainer employeeData={shortenedEmployeeList} isLoading={isLoading} error={error} />
      </main>
      <nav>
        <Navigation />
      </nav>
    </div>
  );
};

export default GameScreen;
