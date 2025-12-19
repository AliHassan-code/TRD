import { Box, Button, Typography } from '@mui/material';

export const Question = () => {
  return (
    <>
      <Box
        textAlign="center"
        my={4}
        sx={{
          background:
            'radial-gradient(circle at center, #063d23 0%, #02110c 80%, #000000 100%)',
          py: 8,
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 600, // adjust as needed
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: { xs: '14px', sm: '18px', md: '18px' },
              color: '#fff',
            }}
          >
            [ OUR JOURNEY HAS BEGUN ]
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Orbitron',
              fontSize: { xs: '40px', sm: '50px', md: '60px' },
              color: '#fff',
              mt: 1,
              textAlign: 'center',
            }}
          >
            Have questions?
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '18px',
              color: '#fff',
              mt: 2,
              width: '100%',
              textAlign: 'center',
            }}
          >
            Join the conversation, as your feedback plays a crucial role in
            shaping our path forward
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Gradient border wrapper */}
            <Box
              sx={{
                display: 'inline-block',
                borderRadius: '50px',
                p: { xs: '6px', md: '10px' },
                background: 'rgba(1, 173, 107, 0.18)', // lighter, more transparent effect
                boxShadow: '0 0 0 0 transparent',
              }}
            >
              <Button
                sx={{
                  color: '#fff',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '15px', md: '18px' },
                  fontWeight: 'bold',
                  background:
                    'linear-gradient(90deg, #16DB8F 0%, #47E261 100%)',
                  borderRadius: '50px',
                  padding: { xs: '6px 20px', md: '10px 30px' },
                  boxShadow: 'none',

                  letterSpacing: 1,
                }}
              >
                CONTACT US
              </Button>
            </Box>
            <Button
              sx={{
                color: '#fff',
                fontFamily: 'Montserrat',
                fontSize: { xs: '16px', md: '20px' },
                border: '2px solid #fff',
                fontWeight: 'bold',
                marginLeft: '20px',
                borderRadius: '50px',
                padding: { xs: '7px 40px', md: '10px 55px' },
              }}
            >
              INTRO
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
