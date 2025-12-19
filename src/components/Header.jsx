import { Box, Button } from '@mui/material';

import Background from '../assets/background1.png';

import { Home } from './Home';
import ResponsiveNavbar from './ResponsiveNavbar';
import LogoBar from './LogoBar';

export const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Background})`,

          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <ResponsiveNavbar />

        <Home />
      </Box>
      <LogoBar />
    </Box>
  );
};
