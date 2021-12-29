
import FetchedImages from "../../api/DataFetching";
import { MenuScreenWrapper, MenuFlex }from "../menu-screen/MenuScreenStyles";
import Header from "../../components/header-container/Header";
import Navigation from "../nav-container/Navigation";

const GameScreen = () => {
  return (
    <div className="grid__wrapper">
      <MenuScreenWrapper>
        <MenuFlex>
          <p>Try Matching the Willow Tree Employee to their photo</p>
          <button>Practice Mode</button>
          <button>Timed Mode</button>
        </MenuFlex>
      </MenuScreenWrapper>
      <header>
        <Header/>
      </header>
      <main className="flex__container">
        <div className="flex__container--column">
          <span>Employee&nbsp;</span>
          <span>Name</span>
        </div>
        <FetchedImages />
      </main>
      <nav>
        <Navigation/>
      </nav>
    </div>
  );
};

export default GameScreen;
