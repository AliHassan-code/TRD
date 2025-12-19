import React, { useState } from 'react';
import { Box, Button, TextField, InputAdornment } from '@mui/material';
import ETH from '../assets/ETH.svg';
import TRDlogo from '../assets/USDT.svg';
import TRD from '../assets/trd.svg';

function CryptoBuy() {
  const [currency, setCurrency] = useState('ETH');
  const [amount, setAmount] = useState('');

  const handleCurrencyChange = newCurrency => {
    setCurrency(newCurrency);
    setAmount('');
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: 0,
          backgroundColor: '#242424',
          borderRadius: '10px',
        }}
      >
        <Button
          onClick={() => handleCurrencyChange('ETH')}
          sx={{
            fontSize: '13px',
            color: '#fff',
            flex: 1,
            gap: 1,
            borderRadius: '10px',
            padding: '10px 10px',
            backgroundColor: currency === 'ETH' ? '#161616' : '#242424',
            border: currency === 'ETH' ? '1px solid #01AD6B' : '1px solid #444',
            '&:hover': {
              backgroundColor: '#161616',
              border: '1px solid #01AD6B',
            },
          }}
        >
          <Box component="img" src={ETH} alt="ETH" sx={{ width: '20px' }} /> BUY
          WITH ETH
        </Button>
        <Button
          onClick={() => handleCurrencyChange('USDT')}
          sx={{
            fontSize: '13px',
            color: '#fff',
            flex: 1,
            gap: 1,
            borderRadius: '10px',
            padding: '10px 10px',
            backgroundColor: currency === 'USDT' ? '#161616' : '#242424',
            border:
              currency === 'USDT' ? '1px solid #01AD6B' : '1px solid #444',
            '&:hover': {
              backgroundColor: '#161616',
              border: '1px solid #01AD6B',
            },
          }}
        >
          <Box component="img" src={TRDlogo} alt="TRD" sx={{ width: '20px' }} />
          BUY WITH USDT
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          mt: 2,
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          type="number"
          placeholder={`Enter Amount`}
          value={amount}
          onChange={e => setAmount(e.target.value)}
          InputProps={{
            style: {
              MozAppearance: 'textfield',
              padding: '6px 10px',
            },
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  component="img"
                  src={currency === 'ETH' ? ETH : TRDlogo}
                  alt={currency}
                  sx={{ width: '20px' }}
                />
              </InputAdornment>
            ),
            inputProps: {
              inputMode: 'decimal',
              style: {
                MozAppearance: 'textfield',
              },
            },
          }}
          sx={{
            input: {
              color: '#fff',
              padding: '6px 10px',
              '&::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '&::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              MozAppearance: 'textfield',
            },
            backgroundColor: '#111',
            borderRadius: '10px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid gray',
              borderRadius: '10px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: '1px solid gray',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                border: '1px solid white',
              },
            '& .MuiOutlinedInput-root.Mui-focused': {
              boxShadow: 'none',
            },
          }}
        />
        <TextField
          fullWidth
          type="number"
          placeholder={`Enter Amount`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  component="img"
                  src={TRD}
                  alt="TRD"
                  sx={{ width: '20px' }}
                />
              </InputAdornment>
            ),
            inputProps: {
              inputMode: 'decimal',
              style: {
                MozAppearance: 'textfield',
              },
            },
            style: {
              padding: '6px 10px',
            },
          }}
          sx={{
            input: {
              color: '#fff',
              padding: '6px 10px',
              '&::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '&::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              MozAppearance: 'textfield',
            },
            backgroundColor: '#111',
            borderRadius: '10px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid gray',
              borderRadius: '10px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: '1px solid gray',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                border: '1px solid white',
              },
            '& .MuiOutlinedInput-root.Mui-focused': {
              boxShadow: 'none',
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default CryptoBuy;
