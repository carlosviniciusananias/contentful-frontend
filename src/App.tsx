import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Shelf from './components/shelf';

import './index.css'

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Shelf />
      <Footer />
    </div>
  )
}

export default App;
