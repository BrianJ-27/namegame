import PortraitMenuScreen from '../src/pages/menu-screen/PortraitMenuScreen'
import LandscapeMenuScreen from './pages/menu-screen/LandscapeMenuScreen'
import { useMediaQuery } from 'react-responsive'

function App() {

  const isMobile = useMediaQuery(
    { query: '(max-width: 411px)' },
    )

  const isTabletorDesktop = useMediaQuery(
    { query: '(min-width: 767px'}
    )

  return (
    <>
    {isMobile && <PortraitMenuScreen/>}
    {isTabletorDesktop && <LandscapeMenuScreen/>}
    </>
  );
}

export default App;
