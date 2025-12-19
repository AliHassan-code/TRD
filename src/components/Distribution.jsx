import {
  Box,
  Container,
  Divider,
  Grid2,
  LinearProgress,
  Typography,
} from '@mui/material';
import DistributionImage from '../assets/Distribution.svg';
import Polygon6 from '../assets/Polygon6.png';
import Polygon5 from '../assets/Polygon5.png';

export const Distribution = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Polygon5}), url(${Polygon6})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom,  right top',
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
              fontSize: { xs: '22px', sm: '28px', md: '30px', lg: '36px' },
              whiteSpace: 'nowrap',
              color: '#fff',
            }}
          >
            Token distribution
          </Typography>
          <Divider
            sx={{
              width: { xs: '15%', md: '20%', lg: '25%' },
              height: '2px',
              background: 'linear-gradient(to left, transparent, #01AD6B)',
            }}
          />
        </Box>
        <Container>
          <Grid2 container>
            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                my: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  40%
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    PRESALE
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    400,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={40}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  10 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    TEAM
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    100,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={10}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  12 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    DEX / CEX LISTINGS
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    120,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={12}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  15 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    DEVELOPMENT
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    150,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={15}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                my: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={DistributionImage}
                alt="Token Distribution"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                my: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  40%
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    PRESALE
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    400,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={40}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  10 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    TEAM
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    100,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={10}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  12 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    DEX / CEX LISTINGS
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    120,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={12}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  15 %
                </Typography>

                <Box display="flex" justifyContent="space-between" my={1}>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    DEVELOPMENT
                  </Typography>
                  <Typography
                    color="grey.400"
                    sx={{ fontFamily: 'Montserrat' }}
                  >
                    150,000,000
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={15}
                  sx={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#333', // solid background track
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 10,
                      background: 'linear-gradient(0deg, #01AD6B, #079E20)', // 🌈 gradient on progress only
                    },
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
