import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PreviewContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1243px',
  height: 'auto',
  aspectRatio: '1243 / 663',
  borderRadius: '48px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '48px',
  },
  
  [theme.breakpoints.down('lg')]: {
    maxWidth: '90%',
  },
  
  [theme.breakpoints.down('md')]: {
    maxWidth: '95%',
    borderRadius: '32px',
    
    '& img': {
      borderRadius: '32px',
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    borderRadius: '24px',
    
    '& img': {
      borderRadius: '24px',
    },
  },
}));

const PortfolioPreview: React.FC = () => {
  return (
    <PreviewContainer>
      <img 
        src="/assets/portfolio-preview.svg" 
        alt="Modern Portfolio Template Preview showing a clean interface with navigation, hero section, and content areas"
      />
    </PreviewContainer>
  );
};

export default PortfolioPreview;