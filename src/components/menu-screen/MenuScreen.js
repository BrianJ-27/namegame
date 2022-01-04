import styled from "styled-components";

const MenuScreenWrapper = styled.section`
  height: 100%;
  /* max-width: 411px; */
  margin: 0 auto;

  // styles to overlay on top of the game screen
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    height: 411px;
    max-width: 731px;
  }
`;

const MenuFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 40px;
  height: 100%;
  padding-bottom: 40px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    max-height: 411px;
    max-width: 331px;
    justify-content: center;
    margin: auto 24px auto auto;
    padding-top: 2rem;
  }
`;

const MenuScreen = ({ handleGameStart }) => (
  <MenuScreenWrapper>
    <MenuFlex>
      <p>Try Matching the Willow Tree Employee to their photo</p>
      <button name="practice" onClick={() => handleGameStart(true)}>
        Practice Mode
      </button>
      <button name="timed" onClick={() => handleGameStart(false)}>
        Timed Mode
      </button>
    </MenuFlex>
  </MenuScreenWrapper>
);

export default MenuScreen;
