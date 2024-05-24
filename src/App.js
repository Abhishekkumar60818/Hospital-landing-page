import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import './App.css'
import MainSection from './components/MainSection';
import ServicesSection from './components/ServicesSection';
import Clinic from './components/Clinic';
import DoctorSpecilist from './components/DoctorSpecilist';
import CostomerReview from './components/CostomerReview';
import Footers from './components/Footers';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MainSection></MainSection>
      <ServicesSection></ServicesSection>
      <Clinic></Clinic>
      <DoctorSpecilist></DoctorSpecilist>
      <CostomerReview></CostomerReview>
      <Newsletter></Newsletter>
      <Footers></Footers>
    </ThemeProvider>
  );
};

export default App;
