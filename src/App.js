import * as React from 'react';
import './App.css';
import { Box } from '@mui/material';
import Header from './components/header';
import AboutUs from './components/aboutUs'
import Menu from './components/menu';
import WorkHours from './components/workHours';
import Foto from './components/foto';
import Awards from './components/awards';
import Footer from './components/footer';

export default function App() {
  return (
    <Box
      sx={{
        width: '1440px',
        margin: 'auto'
      }}>
      <Header />
      <AboutUs />
      <Menu />
      <WorkHours />
      <Foto />
      <Awards />
      <Footer />
    </Box>
  )
}
