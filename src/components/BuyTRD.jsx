import { Box, Typography, Divider, Grid2 } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CryptoBuy from './CryptoBuy';
import ETh from '../assets/ETH.svg';
import USDT from '../assets/USDT.svg';
import TRD from '../assets/trd.svg';

export const BuyTRD = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: '350px', sm: '600px', md: '400px', lg: '450px' },
        border: '2px solid rgba(147, 143, 143, 0.5)',
        background: 'linear-gradient(to right, #2D2C2C80, #514F4F80)',
        borderRadius: '25px',
        mt: 3,
      }}
    >
      <Box
        sx={{
          width: { md: '87%' },
          margin: '30px',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Orbitron',
              fontSize: '20px',
            }}
          >
            Buy $TRD Token
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'right',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#3D3D3D',
                padding: '5px 10px',

                borderRadius: '20px',
              }}
            >
              <Typography sx={{ fontFamily: 'Orbitron', fontSize: '9px' }}>
                Stage 1
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#75CC9410',
                padding: '7px 8px',
                borderRadius: '20px',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#75CC94',
                  padding: '5px 10px',
                  borderRadius: '20px',
                }}
              >
                <Typography sx={{ fontFamily: 'Orbitron', fontSize: '9px' }}>
                  LIVE
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: '#242424',
            borderRadius: '20px',
            height: '25px',
            mt: '30px',
            boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              backgroundColor: '#0B965D',
              width: '100px',
              borderRadius: '20px',
              fontSize: '12px',
              color: '#fff',
              height: '25px',
              fontFamily: 'Orbitron',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            `11.458%`
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Orbitron',
            color: '#9AA0AC',
            textAlign: 'right',
            fontSize: '10px',
            mt: 1.5,
          }}
        >
          $752,859 / $15,350,000
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mt: 1.5,
          }}
        >
          <Divider
            sx={{
              width: '40px',
              height: '2px',
              backgroundColor: '#000',
            }}
          />

          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 'bold',
              color: 'white',
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            1$TRD = $0.02{' '}
            <span style={{ margin: '0 10px', fontSize: '16px' }}>•</span>{' '}
            LISTING PRICE = $0.065
          </Typography>

          <Divider
            sx={{
              width: '40px',
              height: '2px',
              backgroundColor: '#000',
            }}
          />
        </Box>
        <Box
          sx={{
            background: 'linear-gradient(90deg, #1F1F1F, #262626, #1F1F1F)',
            padding: '20px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '500px',
            mt: 2,
          }}
        >
          <Grid2 container spacing={2} sx={{ width: '100%' }}>
            <Grid2 item size={6}>
              <Typography
                sx={{
                  color: '#A0A0A0',
                  fontSize: { xs: '10px', sm: '12', md: '10px', lg: '12px' },
                  fontWeight: 'bold',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                TOKENS SOLD
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={TRD} alt="Token" width={20} />{' '}
                <Typography
                  sx={{
                    fontSize: {
                      xs: '18px',
                      sm: '20px',
                      md: '18px',
                      lg: '20px',
                    },
                    fontWeight: 'bold',
                    color: 'white',
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  45,142,920
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '10px',
                  color: '#A0A0A0',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                / 400,000,000
              </Typography>
            </Grid2>

            {/* Divider */}
            <Grid2 item size={{ xs: 1 }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  backgroundColor: '#A0A0A0',
                  height: '100%',
                  width: '1px',
                  opacity: '0.2',
                }}
              />
            </Grid2>

            <Grid2 item size={{ xs: 5 }}>
              <Typography
                sx={{
                  color: '#A0A0A0',
                  fontSize: { xs: '10px', sm: '12', md: '10px', lg: '12px' },
                  fontWeight: 'bold',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                USD RAISED
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: '18px',
                    sm: '20px',
                    md: '18px',
                    lg: '20px',
                  },
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                $ 752,859
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  color: '#A0A0A0',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                / $15,350,000
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mt: 1.5,
          }}
        >
          <Divider
            sx={{
              width: { xs: '80px', md: '100px' },
              height: '1.5px',
              backgroundColor: '#000',
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '10px' },
              fontWeight: 'bold',
              color: 'white',
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            CONNECT WALLET
          </Typography>

          <Divider
            sx={{
              width: { xs: '80px', md: '100px' },
              height: '1.5px',
              backgroundColor: '#000',
            }}
          />
        </Box>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              justifyContent: 'space-evenly',
              alignItems: 'center',

              color: '#fff',
            }}
          >
            <CryptoBuy />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Introduction Video{' '}
            <PlayCircleIcon
              fontSize="10px"
              sx={{
                color: '#01AD6B',
              }}
            />
          </Typography>
          <Box sx={{ gap: 1, display: 'flex' }}>
            <img src={ETh} />
            <img src={USDT} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
