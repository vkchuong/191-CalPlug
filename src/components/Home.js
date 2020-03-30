import React from 'react'

import Notification from './parts/Notification'
import Header from './parts/Header'
import MainContent from './parts/MainContent'
import Footer from './parts/Footer'
import Dialog from './parts/Dialog'

function Home() {
  return (
    <div>
      <Notification />
      <Header />
      <MainContent />
      <Footer />
      <Dialog />
    </div>
  );
}

export default Home;
