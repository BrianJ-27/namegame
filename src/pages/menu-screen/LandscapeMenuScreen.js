import styled from "styled-components";
import imgOverlayLandscape from "../../assets/img/overlay-img-landscape.png"
import MenuScreenContent from "../../components/menu-content/MenuScreenContent"

const OverlayWrapper = styled.section`
  background-image: url(${imgOverlayLandscape});
  background-size: cover;
  background-position: top center;
  height: 411px;
  max-width: 731px;
  margin: auto;
  }
`;

const LandscapeMenuScreen = () => (
    <OverlayWrapper>
      <MenuScreenContent/>
    </OverlayWrapper>
  );

export default LandscapeMenuScreen;
