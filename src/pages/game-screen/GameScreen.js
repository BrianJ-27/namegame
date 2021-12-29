import styled from "styled-components";
import FetchedImages from '../../api/DataFetching';
import MenuScreen from '../menu-screen/MenuScreen';

const HeaderContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 20px;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

const MobilePracticeGameScreen = () => {
    
  return(
     <div className="grid__wrapper">
    <MenuScreen />
        <header>
            <HeaderContainer>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z" fill="white"/>
                </svg>
                <h2 style={{color: '#fff', marginLeft: '36px'}}>Practice Mode</h2>
            </HeaderContainer>
        </header>
        <main className="flex__container">
            <div className="flex__container--column">
                <span>Employee&nbsp;</span>
                <span>Name</span>
            </div>
            <FetchedImages/>
        </main>
        <nav>
            <NavContainer>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.999 1.98323C14.3324 1.21243 16 2.17462 16 3.71472V15.2872C16 16.8273 14.3324 17.7895 12.999 17.0187L2.9899 11.2324C1.65785 10.4624 1.65785 8.53951 2.9899 7.76946L12.999 1.98323Z" stroke="white" strokeWidth="2"/>
                </svg>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="white" strokeWidth="2"/>
                </svg>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2Z" stroke="white" strokeWidth="2"/>
                </svg>
            </NavContainer>
        </nav>
    </div>
  )  
   
};

export default MobilePracticeGameScreen;
