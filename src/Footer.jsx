import { Box, Grid2, Typography, InputBase, IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LogoTRD from './assets/LogoTRD.svg';

export const Footer = () => {
  return (
    <Box
      sx={{
        background: '#000',
        color: '#fff',
        px: 4,
        py: 9,
        maxWidth: 1100, // Set your preferred max width
        mx: 'auto', // Center horizontally
      }}
    >
      <Grid2
        container
        spacing={{ lg: 12, xs: 4 }}
        alignItems="flex-start"
        justifyContent="center" // Center the grid content
      >
        {/* Left: Logo, description, subscribe */}
        <Grid2
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box sx={{ mb: 2 }}>
            <img src={LogoTRD} alt="TRD Logo" style={{ height: 40 }} />
          </Box>
          <Typography
            sx={{
              color: '#fff',
              opacity: 0.8,
              mb: 3,
              fontSize: 15,
              width: '100%',
              maxWidth: 300,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>Subscribe Now</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: '#181818',
              borderRadius: 0,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 270,
              mt: 1,
            }}
          >
            <InputBase
              placeholder="info@mail.com"
              sx={{
                color: '#fff',
                px: 2,
                py: 1.2,
                flex: 1,
                fontSize: 15,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                '&::placeholder': { color: '#fff', opacity: 0.5 },
                height: 40,
              }}
              inputProps={{
                style: {
                  padding: 0,
                  height: 40,
                },
              }}
            />
            <IconButton
              sx={{
                background: '#0B965D',
                borderRadius: 0,
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                p: 0,
                '&:hover': { background: '#0B965D' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowRightAltIcon sx={{ color: '#fff', fontSize: 30 }} />
            </IconButton>
          </Box>
        </Grid2>
        {/* Right: 3 columns */}
        <Grid2
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'flex-start',
          }}
        >
          <Grid2
            container
            spacing={{ lg: 12, xs: 4 }}
            sx={{
              width: '100%',
              maxWidth: 600,
              justifyContent: { xs: 'center', md: 'flex-end' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Socials */}
            <Grid2 xs={12} sm={4}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Socials</Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Twitter
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Facebook
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Instagram
              </Typography>
            </Grid2>
            {/* Navigation */}
            <Grid2 xs={12} sm={4}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Navigation
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Documentation
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                My Node
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>TRD</Typography>
            </Grid2>
            {/* Contact Us */}
            <Grid2 xs={12} sm={4}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Contact Us
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Contact US
              </Typography>
              <Typography sx={{ mb: 0.5, cursor: 'pointer' }}>
                Brand Kit
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
