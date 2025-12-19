import { Box, Typography, Button, Grid2 } from '@mui/material';
import border from '../assets/border.png';
import { BuyTRD } from './BuyTRD';
import LogoBar from './LogoBar';

export const Home = () => {
  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: 'no-repeat',

              ml: { xs: '20px', md: '40px' },
            }}
          >
            <Box
              sx={{
                color: '#fff',
                margin: '50px',
                pt: 6,
              }}
            >
              <Box
                sx={{
                  display: { xs: 'flex', md: 'block', lg: 'block' },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Zen Dots',
                    fontSize: { xs: '30px', md: '30px', lg: '50px' },
                  }}
                >
                  You Want TRD<span> Here is TRD</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontSize: { xs: '16px', md: '16px', lg: '18px' } }}
                >
                  Step into the AI-powered crypto revolution. Join our presale
                  journey to be part of reshaping the intersection of technology
                  and finance.{' '}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 4, mt: 5 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #1F1F1F , #6A6666 )',
                    border: '1px solid #8CEF78',
                    padding: { xs: '7px 30px', md: '6px 30px' },
                  }}
                >
                  Explore
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    border: '1px solid #8CEF78',
                    backgroundColor: 'transparent',
                    padding: { xs: '5px 30px', md: '6px 25px' },
                    fontSize: { xs: '12px', sm: '16px' },
                  }}
                >
                  WhitePaper
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <BuyTRD />
        </Grid2>
      </Grid2>
    </Box>
  );
};
