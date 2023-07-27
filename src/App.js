import React from 'react'
import {Footer, Header, Possibility, WhatGPT3, Blog, Features} from './containers';
import { Article, Brand, Navbar, Feature, CTA } from './components';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar />  
      <Header />
    </div>
      <Brand />
      <WhatGPT3 />  
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
