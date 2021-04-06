import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './components/shared/Header';
import Stripe from './components/Stripe';
import Footer from './components/shared/Footer';
import MainSection from './components/MainSection';

import DataProvider from './components/Context';


const App: React.FC = () => {
  return (
    <DataProvider>
      <div className="App">
        <Router>
            <Header />
            
            <div className="content">
              <div className="wrapper">
                <MainSection/>
              </div>

              <Stripe/>
            </div>

            <Footer/>
          </Router>
      </div>
    </DataProvider>
  );
}

export default App;
