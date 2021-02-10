import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/global';

const App: FC = () => {
  return (
    <Router>
      <AppProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </Router>
  );
};

export default App;
