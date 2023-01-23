import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className='container-lg-auto p-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<PageOne />} />
          <Route path='/page2' element={<PageTwo />} />
          <Route path='/page3' element={<PageThree />} />
          <Route path='/page4' element={<PageFour />} />
          <Route path='/page5' element={<PageFive />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
