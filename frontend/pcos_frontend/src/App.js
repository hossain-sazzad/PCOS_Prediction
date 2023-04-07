import './App.css'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Home from './home'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Pcos_calc from './pcos_calc'

function App() {
  return (
    <BrowserRouter>
      <div className={'bg-gray-100'}>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="center" width="100%">
              <div
                className={'pr-8 hover:text-gray-50 text-2xl cursor-pointer'}
              >
                <NavLink to="/">Health Care</NavLink>
              </div>
              <div
                className={'pr-8 hover:text-gray-50 text-2xl cursor-pointer'}
              >
                <NavLink to="/pcos">PCOS Prediction</NavLink>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pcos" element={<Pcos_calc />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
