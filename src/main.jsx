import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
