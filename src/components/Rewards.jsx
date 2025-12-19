import {
  Box,
  Grid2,
  Typography,
  TextField,
  InputAdornment,
  Slider,
} from '@mui/material';
import TRDICON from '../assets/TRD.svg';
import Polygon from '../assets/Polygon3.png';
import Ellipse from '../assets/Ellipse4.png';
import Ellipse1 from '../assets/Ellipse3.png';
import { useState } from 'react';

export const Rewards = () => {
  const [price, setPrice] = useState(0);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Polygon}), url(${Ellipse}), url(${Ellipse1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center,  center left,center right',
          py: 10,
        }}
      >
        <Grid2
          container
          spacing={10}
          justifyContent="center"
          zIndex={1}
          position="relative"
        >
          <Grid2
            item
            size={{ xs: 10, md: 5, lg: 5 }}
            sx={{
              my: 2,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                color="#fff"
                sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: '36px' }}
              >
                REWARDS CALCULATOR
              </Typography>
              <Typography color="#D9D9D9" sx={{ fontFamily: 'Montserrat' }}>
                TRD offers a new passive rewards opportunity to the meme coin
                scene but could also benefit from token price appreciation. TRD
                has a fully diluted starting market cap nearly 900 times cheaper
                than the original TRDCoin.
              </Typography>
              <Typography
                color="#47E261"
                sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: '36px' }}
              >
                READY TO BUY?
              </Typography>
              <Typography
                color="#D9D9D9"
                sx={{ fontFamily: 'Montserrat', fontSize: '15px' }}
              >
                All you need to buy TRD tokens at the lowest presale price is a
                decentralised wallet containing ETH, BNB,USDC, or USDT etc.
                Simply connect to the widget above to swap tokens!
              </Typography>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{ xs: 10, md: 5, lg: 5 }}
            sx={{
              my: 2,
              justifyContent: 'center',
              border: '3px dashed #00FFB2',
              padding: '20px',
              borderRadius: '50px',
              borderSpacing: '20px',
            }}
          >
            <Box>
              <Typography
                color="#fff"
                sx={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: { xs: '28px', md: '22px', lg: '28px' },

                  fontWeight: '600',
                  textAlign: 'center',
                  letterSpacing: '3px',
                }}
              >
                Returns Calculator
              </Typography>
              <Typography
                variant="p"
                color="#16DB8F"
                sx={{
                  fontSize: '18px',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  my: 2,
                  fontFamily: 'Montserrat',
                }}
              >
                Input the amount of TRDCoin you’re purchasing, and see what it
                would be worth at different prices.
              </Typography>
              <Box
                sx={{
                  display: 'flex ',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontSize: '18px', fontFamily: 'Montserrat' }}>
                  IF I BUY
                </Typography>
                <Typography sx={{ fontSize: '18px', fontFamily: 'Montserrat' }}>
                  ($0.000)
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                placeholder="0.000"
                inputProps={{
                  min: 0,
                  step: 0.001,
                  inputMode: 'decimal',
                  pattern: '^[0-9]*\\.?[0-9]{0,3}$',
                  style: {
                    MozAppearance: 'textfield',
                  },
                }}
                sx={{
                  width: '100%',
                  my: 2,
                  background: 'transparent',
                  borderRadius: '20px',
                  border: '2px dashed #fff',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                    color: '#fff',
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset, &.Mui-focused fieldset': {
                      border: 'none',
                    },
                    '& input': {
                      color: '#fff',
                      '&::placeholder': {
                        color: '#fff',
                        opacity: 1,
                      },
                      '&::-webkit-input-placeholder': {
                        color: '#fff',
                        opacity: 1,
                      },
                      '&::-moz-placeholder': {
                        color: '#fff',
                        opacity: 1,
                      },
                      '&:-ms-input-placeholder': {
                        color: '#fff',
                        opacity: 1,
                      },
                      '&::-ms-input-placeholder': {
                        color: '#fff',
                        opacity: 1,
                      },
                      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button':
                        {
                          WebkitAppearance: 'none',
                          margin: 0,
                        },
                      '&[type=number]': {
                        MozAppearance: 'textfield',
                      },
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={TRDICON}
                        alt="TRD"
                        style={{ width: 24, height: 24 }}
                      />
                    </InputAdornment>
                  ),
                }}
                onInput={e => {
                  e.target.value = e.target.value
                    .replace(/[^0-9.]/g, '')
                    .replace(/^0+([1-9])/, '$1')
                    .replace(/(\..*)\./g, '$1')
                    .replace(/^(\d+)\.(\d{0,3}).*$/, '$1.$2');
                }}
              />
              <Typography
                color="#1DD68F"
                sx={{ fontSize: '18px', fontFamily: 'Montserrat' }}
              >
                And the token price reaches:: $0
              </Typography>

              <Box
                sx={{
                  display: 'flex ',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#1DD68F',
                }}
              >
                <Typography sx={{ fontFamily: 'Montserrat' }}>
                  Your $TRD would be worth
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat' }}>
                  $0.000
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
