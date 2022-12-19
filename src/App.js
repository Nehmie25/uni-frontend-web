import {  HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logistics from './pages/Logistics';

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/logistics' element={<Logistics />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
