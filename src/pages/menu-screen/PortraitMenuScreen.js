import styled from "styled-components";
import imgOverlayPortrait from "../../assets/img/overlay-img-portrait.png"
import MenuScreenContent from "../../components/menu-content/MenuScreenContent"

const OverlayWrapper = styled.section`
  background-image: url(${imgOverlayPortrait});
  background-size: cover;
  background-position: top center;
  height: 100%;
  max-width: 411px;
  margin: auto;
`;

const PortraitMenuScreen = () => (
    <OverlayWrapper>
     <MenuScreenContent/>
    </OverlayWrapper>
  );

export default PortraitMenuScreen;
