import styled from "styled-components";
import imgOverlayPortrait from "../../assets/img/overlay-img-portrait.png"
import imgOverlayLandscape from "../../assets/img/overlay-img-landscape.png"
import MenuScreenContent from "../../components/menu-content/MenuScreenContent"

const OverlayWrapper = styled.section`
  background-image: url(${imgOverlayPortrait});
  background-size: cover;
  background-position: top center;
  height: 100%;
  max-width: 411px;
  margin: 0 auto;
  //Using these styles below to overlay the game screen
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media (min-width: 768px) {
    background-image: url(${imgOverlayLandscape});
    height: 411px;
    max-width: 731px;
  }
`;

const MenuScreen = () => (
    <OverlayWrapper style={{display:"none"}}>
     <MenuScreenContent />
    </OverlayWrapper>
  );

export default MenuScreen;
