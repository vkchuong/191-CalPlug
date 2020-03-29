import React from 'react';
import './style/base.css';
import './style/home.css';
import Notification from './components/Notification'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Dialog from './components/Dialog'

function App() {
  return (
    <div className="wapper">
      <Notification />
      <Header />
      <MainContent />
      <Footer />
      <Dialog />
    </div>
  );
}

export default App;
