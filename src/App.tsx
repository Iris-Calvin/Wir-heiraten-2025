import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, MantineProvider, Box } from '@mantine/core';
import './App.css';

import '@mantine/core/styles.css';

// Komponenten
import HeaderComponent from './components/HeaderComponent.tsx';
import { FooterComponent } from './components/FooterComponent.tsx';
import ScrollIndicator from './components/ScrollIndicatorComponent.tsx';

// Seiten
import HomePage from './pages/HomePage.tsx';
import ImagePage from './pages/ImagePage.tsx';
import InfoPage from './pages/InfoPage.tsx';
import FirstVisitPage from './pages/FirstVisitPage.tsx';
import RSVPPage from './pages/RSVPPage.tsx';
import PhotoPage from './pages/PhotoPage.tsx'; // 👈 NEU

// Cookie-Handling
function deleteCookie(name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name: string): { firstname: string, lastname: string, event_code: string } | null {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) {
      const decodedValue = decodeURIComponent(value);
      try {
        return JSON.parse(decodedValue);
      } catch (e) {
        console.error("Error parsing cookie value:", e);
        return null;
      }
    }
  }
  return null;
}

function App() {
  const navigate = useNavigate();

  const theme = createTheme({
    fontFamily: "Raleway, sans-serif",
    fontSizes: {
      xs: "9pt",
      sm: "12pt",
      md: "13pt",
      lg: "15pt",
      xl: "17pt",
    },
  });

  // Optionaler Redirect bei fehlendem Cookie (aktivierbar)
  // useEffect(() => {
  //     const eventCookie = getCookie('event');
  //     if (!eventCookie) {
  //         navigate('/first-visit');
  //     }
  // }, []);

  return (
    <MantineProvider theme={theme}>
      <HeaderComponent />
      <Box className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rsvp" element={<RSVPPage />} />
          <Route path="/first-visit" element={<FirstVisitPage />} />
          <Route path="/infos" element={<InfoPage />} />
          <Route path="/fotos" element={<PhotoPage />} /> {/* ✅ NEU */}
          {/* <Route path="/images" element={<ImagePage />} /> */}
          {/* <Route path="/messages" element={<MessagePage />} /> */}
        </Routes>
        <ScrollIndicator />
      </Box>
      <FooterComponent />
    </MantineProvider>
  );
}

export default App;
