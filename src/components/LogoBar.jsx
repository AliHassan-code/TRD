import { Box, Stack } from '@mui/material';

import cointelegraph from '../assets/cointelegraph.png';
import beincrypto from '../assets/beincrypto.png';
import coindesk from '../assets/coindesk.png';
import cryptonews from '../assets/cryptonews.png';
import newsbtc from '../assets/newsbtc.png';

const logos = [
  { src: cointelegraph, alt: 'Cointelegraph' },
  { src: beincrypto, alt: 'BeInCrypto' },
  { src: coindesk, alt: 'CoinDesk' },
  { src: cryptonews, alt: 'CryptoNews' },
  { src: newsbtc, alt: 'NewsBTC' },
];

const LogoBar = () => {
  return (
    <Box sx={{ backgroundColor: '#00000050' }}>
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(to right, transparent, #01AD6B30, #01AD6B40, transparent)`,
          py: 4,
          mt: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 20s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <Box
              key={idx}
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                height: { xs: 30, md: 40 },
                mx: 4,
                filter: 'brightness(0) invert(1)',
                transition: 'transform 0.3s ease',
                flexShrink: 0,
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LogoBar;
