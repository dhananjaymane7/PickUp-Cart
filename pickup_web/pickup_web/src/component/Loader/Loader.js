import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, keyframes } from '@mui/material/styles';
import logo from '../Images/pick.png';

const growAndShrink = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity:0.7
  },
  '50%': {
    transform: 'scale(1.03)',
    opacity:1
  },
  '100%': {
    transform: 'scale(1)',
    opacity:0.7
  },
});

const LoaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
});

const Logo = styled('img')({
  width: '50%', 
  marginBottom: '16px', 
  animation: `${growAndShrink} 2s linear infinite`,
});

const Loader = () => {
  return (
    <LoaderContainer>
      <Logo src={logo} alt="Logo" />
      <LinearProgress color="primary" style={{ width: '50%' }} />
    </LoaderContainer>
  );
};

export default Loader;
