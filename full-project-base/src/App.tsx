import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './common/components/header/Header';
import { SideNavigation } from './common/components/side-navigation/SideNavigation';
import { Routes } from './common/router/Routes';
import { Provider } from 'mobx-react';
import { AuthenticationService } from './authentication/services/AuthenticationService';
import { container } from './common/injection/inversify.config';

const App: React.FC = () => {
  return (
    <Provider
      authenticationService={container.resolve<AuthenticationService>(AuthenticationService)}
    >
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='main-frame'>
            <SideNavigation />
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
