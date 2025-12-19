import { Box, Typography, Stack, Grid2, Divider } from '@mui/material';
import Polygon2 from '../assets/Polygon.png';
import Polygon1 from '../assets/Polygon2.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse3.png';
import Ellipse4 from '../assets/Ellipse4.png';
import { Shedule } from './Shedule';

const features = [
  { number: '01', title: 'AI Model Marketplace' },
  { number: '02', title: 'Monetization Opportunities' },
  { number: '03', title: 'Transparent Pricing' },
  { number: '04', title: 'Research And Education' },
  { number: '05', title: 'Startup Incubation' },
  { number: '06', title: 'Cross-Industry Innovation' },
];

const FeaturesApplications = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#000',
          px: { xs: 2, md: 10 },
          py: 10,
          backgroundImage: `url(${Polygon2}), url(${Polygon1}), url(${Ellipse2}), url(${Ellipse3}),url(${Ellipse4})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition:
            '  100% 20%, top left , 50% 0%, right 50%,  left 100%',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            width: '100%',
            height: '150px',
            mt: 1.5,
          }}
        >
          <Divider
            sx={{
              width: { xs: '10%', md: '20%', lg: '25%' },
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
              fontSize: { xs: '17px', md: '25px', lg: '30px' },
              whiteSpace: 'nowrap',
            }}
          >
            FEATURES & APPLICATIONS
          </Typography>
          <Divider
            sx={{
              width: { xs: '10%', md: '20%', lg: '25%' },
              height: '2px',
              background: 'linear-gradient(to left, transparent, #01AD6B)',
            }}
          />
        </Box>

        <Grid2
          container
          spacing={4}
          justifyContent="center"
          zIndex={1}
          position="relative"
        >
          {features.map((item, index) => (
            <Grid2
              item
              size={{ xs: 12, md: 6, lg: 4 }}
              sx={{
                my: 2,
              }}
              key={index}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 3,
                  py: 1,
                  px: 3,
                  my: 2,
                  mx: 1,
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.08)',

                  transition: 'transform 0.4s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 0px 24px rgba(0, 255, 157, 0.1)',
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" my={2}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      background:
                        'linear-gradient(to bottom, #01AD6B, #47E261)',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: 'Orbitron, sans-serif',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    {item.number}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="white"
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color="#D9D9D9"
                  sx={{ fontFamily: 'Montserrat' }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Shedule />
    </Box>
  );
};

export default FeaturesApplications;
