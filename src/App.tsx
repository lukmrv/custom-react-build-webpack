import React from 'react';

import './index.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <div>
    <Header />
    <div className="blah">blah</div>
    <Footer />
  </div>
);
