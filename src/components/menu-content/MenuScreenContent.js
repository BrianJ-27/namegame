import styled from "styled-components";

const FlexMenuWrapper = styled.div`
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

const MenuScreenContent = () => (
  <FlexMenuWrapper >
    <p>
      Try Matching the Willow Tree Employee to their photo
    </p>
    <button>Practice Mode</button>
    <button>Timed Mode</button>
  </FlexMenuWrapper>
);

export default MenuScreenContent;
