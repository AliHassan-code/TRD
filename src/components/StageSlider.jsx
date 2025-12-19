import Slider from 'react-slick';
import {
  Box,
  Typography,
  IconButton,
  Chip,
  LinearProgress,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Total from '../assets/Total.svg';

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      bottom: -50,
      left: 'calc(50% + 20px)',
      zIndex: 1,
      backgroundColor: '#292929',
      color: 'white',
      '&:hover': {
        backgroundColor: '#292929',
      },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      bottom: -50,
      right: 'calc(50% + 20px)',
      zIndex: 1,
      backgroundColor: '#292929',

      color: 'white',
      '&:hover': {
        backgroundColor: '#292929',
      },
    }}
  >
    <ArrowBackIosNewOutlinedIcon />
  </IconButton>
);

export const StageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideData = [
    {
      title: 'SEED ROUND',
      Chip: 'SOLD OUT',
      percentage: '100',
      allocated: 15000000,
      price: 0.01,
    },
    {
      title: 'STAGE #1',
      Chip: 'LIVE',
      percentage: 86.12,
      allocated: 35000000,
      price: 0.01,
    },
    {
      title: 'STAGE #2',
      Chip: 'UP COMING',
      percentage: '100',
      allocated: 35000000,
      price: 0.01,
    },
    {
      title: 'STAGE #3',
      Chip: 'UP COMING',
      percentage: '100',
      allocated: 35000000,
      price: 0.01,
    },
  ];

  return (
    <Box sx={{ width: '90%', mx: 'auto', my: 4, position: 'relative', pb: 6 }}>
      <Slider {...settings}>
        {slideData.map((item, index) => (
          <Box>
            <Box
              key={index}
              sx={{
                bgcolor: '#161616',
                color: 'white',
                borderRadius: 4,
                p: 3,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                m: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
                <Chip
                  label={item.Chip}
                  size="small"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '11px',
                    borderRadius: '20px',
                    color: '#000',
                    fontFamily: 'Montserrat',
                    px: 1,
                    background:
                      item.Chip === 'SOLD OUT'
                        ? 'linear-gradient(0deg, #01AD6B , #079E20)'
                        : item.Chip === 'LIVE'
                        ? '#88E0A3'
                        : ' rgb(51, 137, 11)',
                    boxShadow: '0 0 20px rgba(231, 72, 109, 0.3)',
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  position: 'relative',
                  boxShadow: '0px 6px 8px rgba(1, 173, 107, 0.6)',
                  borderRadius: 10,
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={item.percentage}
                  sx={{
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: '#333',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(to top, #01AD6B, #079E20)',
                      borderRadius: 10,
                    },
                  }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textShadow: '0px 0px 6px black',
                    fontSize: '0.8rem',
                    fontFamily: 'Montserrat',
                  }}
                >
                  {item.percentage}%
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right', color: '#545454', mt: 1 }}>
                <Typography sx={{ fontSize: '12px' }} variant="p">
                  $602858.4 / $700,000
                </Typography>
              </Box>
              <Box
                sx={{
                  pt: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontWeight: 700,
                      fontFamily: 'Orbitron, sans-serif',
                    }}
                  >
                    <img src={Total} width="20" alt="token" />
                    {item.allocated}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    TRD Allocation for this stage
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontWeight: 400 }}>
                    ${item.price}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    Purchase Price (1 $TRD)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
