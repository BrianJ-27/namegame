import styled from "styled-components";
import Timer from "../timer/Timer";

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 20px;
`;

const Header = () => {
    return (
        <HeaderContainer>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z"
              fill="white"
            />
          </svg>
          <h2 style={{ color: "#fff", marginLeft: "36px" }}>Practice Mode</h2>
          <Timer />
        </HeaderContainer>
    )
}

export default Header;