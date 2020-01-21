import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';


const Header = () => {

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </React.Fragment>
  );
};

export default Header;
