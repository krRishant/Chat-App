import React from 'react'
import Chat from './component/Chat/Chat';
import Join from './component/Join/Join';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
     <Routes>
      <Route path="/"  element={<Join/>} exact />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
  )
}

export default App