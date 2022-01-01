import React, { useState } from "react";
import useGetEmployees from "../../api/useGetEmployees";
import MenuScreen from "../../components/menu-screen/MenuScreen"
import Header from "../../components/app-header/Header";
import Navigation from "../../components/app-nav/Navigation";
import NameContainer from "../name-container/NameContainer"
import HeadShotContainer from "../headshot-container/HeadshotContainer";
import Timer from "../../components/timer/Timer";

const GameScreen = () => {

const { data, isLoading, error } = useGetEmployees();

 /* ------ Shuffling and Reducing Array down to 6 employees logic Starts Here ------ */ 

  const randomizeArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  randomizeArray(data);
  const shortenedEmployeeList = data.splice(0, 6);

  /* ------ Shuffling and Reducing Array down to 6 employees logic Ends Here ------ */ 


  /* ------ Shuffling only 1 profile name logic Starts Here ------ */  
  const randomName = shortenedEmployeeList[Math.floor(Math.random() * shortenedEmployeeList.length)];
  /* ------ Shuffling only 1 profile name logic Ends Here ------ */  

 /* ------ Menu Screen Logic Starts ------ */
  const [showMenu, setShowMenu] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [changeMode, setChangeMode] = useState('Practice Mode')

  const handleShowMenu = ({ target }) => {
     setShowMenu(false);
     if(target.name === "timed"){
        setShowTimer(true);
        setChangeMode('Timed Mode');
     } else {
        setChangeMode('Practice Mode');
        setShowTimer(false);
     }

    //  setShowTimer(target.name === "timed") 
  };


  const handleHideMenu = () => {
    setShowMenu(true);
  };
  /* ------ Menu Screen Logic Ends ------ */

  /* ------ Game Screen Logic Starts -------- */
 const handleGuess = (e) => {
   console.log(e);
 }

  return (
    
    <div className="grid__wrapper">
      { showMenu && (
        <MenuScreen handleShowMenu={handleShowMenu}/>
      )}

      { isLoading ? <h1>Loading Game Content</h1> : 
        <>
        <header className="flex__container--header">
          <Header showMenu={handleHideMenu} changeMode={changeMode}/>
          {showTimer && <Timer />}
        </header>
        <main className="flex__container">
          <NameContainer randomName={randomName} isLoading={isLoading} error={error} />
          <HeadShotContainer handleGuess={handleGuess} employeeData={shortenedEmployeeList} isLoading={isLoading} error={error} />
        </main>
        <nav>
          <Navigation />
        </nav>
        </> 
       }
    </div>
  );
};

export default GameScreen;
