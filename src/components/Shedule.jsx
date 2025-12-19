import { Box, Divider, Typography } from '@mui/material';
import { StageSlider } from './StageSlider';
import Polygon from '../assets/Polygon4.png';

export const Shedule = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('${Polygon}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            width: '100%',
            height: '100px',
            mt: 1.5,
          }}
        >
          <Divider
            sx={{
              width: { xs: '15%', md: '20%', lg: '25%' },
              height: '2px',
              background: 'linear-gradient(to right, transparent, #01AD6B)',
            }}
          />

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: 1,
              fontSize: { xs: '20px', md: '25px', lg: '30px' },
              whiteSpace: 'nowrap',
              color: '#fff',
            }}
          >
            Presale schedule
          </Typography>
          <Divider
            sx={{
              width: { xs: '15%', md: '20%', lg: '25%' },
              height: '2px',
              background: 'linear-gradient(to left, transparent, #01AD6B)',
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                color: '#fff',
                maxWidth: '850px',
                fontFamily: 'Montserrat',
                fontSize: '15px',
              }}
            >
              Journey that not only gets you ahead but takes you through 7
              stages of opportunity. By participating in a presale, you're not
              only getting a head start but also showing your belief in the
              project's potential. It's your chance to be part of the inner
              circle, securing your place as an early adopter and potentially
              reaping the rewards as the project gains momentum.
            </Typography>
          </Box>
        </Box>
        <StageSlider />
        <Box
          sx={{
            backgroundImage: `ulr(${Polygon})`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Box>
    </Box>
  );
};
