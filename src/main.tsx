import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

async function initializeMockServiceWorker() {
  const { setupWorker } = await import('msw/browser');
  const { mockApiHandlers } = await import('./__mocks__/handlers.ts');
  const worker = setupWorker(...mockApiHandlers);
  return worker.start();
}

initializeMockServiceWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
});
