import { ReactComponent as Checkmark } from "../../assets/icons/checkmark.svg";
import { ReactComponent as Wrong } from "../../assets/icons/x-wrong.svg";
import styled from "styled-components";

const OverlaySVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Overlay = ({ isCorrect }) => (
  <OverlaySVG
    style={
      isCorrect
        ? { backgroundColor: "rgba(52, 199, 89, 0.6)" }
        : { backgroundColor: "rgba(255, 59, 48, 0.6)" }
    }
  >
    {isCorrect ? <Checkmark /> : <Wrong />}
  </OverlaySVG>
);

export default Overlay;
