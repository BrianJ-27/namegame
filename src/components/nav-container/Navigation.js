import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Navigation = () => (

    <NavContainer>
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" stroke="white" strokeWidth="2"
              d="M12.999 1.98323C14.3324 1.21243 16 2.17462 16 3.71472V15.2872C16 16.8273 14.3324 17.7895 12.999 17.0187L2.9899 11.2324C1.65785 10.4624 1.65785 8.53951 2.9899 7.76946L12.999 1.98323Z"
            />
          </svg>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="white" strokeWidth="2"
              d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"      
            />
          </svg>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="white" strokeWidth="2"
              d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2Z"
            />
          </svg>
    </NavContainer>
)

export default Navigation;