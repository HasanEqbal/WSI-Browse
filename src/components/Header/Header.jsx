import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  return (
    <div>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </div>
  );
};

export default Header;
