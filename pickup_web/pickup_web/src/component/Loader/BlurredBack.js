import React from 'react';
import { styled, keyframes } from '@mui/system';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const BlurredBackground = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  backgroundColor: 'transparent',
  animation: `${fadeOut} 1s ease-out 3s forwards`}));

export default BlurredBackground;
