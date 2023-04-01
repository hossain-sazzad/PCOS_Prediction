import logo from './logo.svg'
import './App.css'
import Button from '@mui/material/Button'
import {
  AppBar,
  Backdrop,
  Box,
  CircularProgress,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import Home from './home'

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="center" width="100%">
            <div className={'pr-8 hover:text-gray-50 cursor-pointer'}>
              <Typography variant="h4">Health Care</Typography>
            </div>
            <div className={'pr-8 hover:text-gray-50 cursor-pointer'}>
              <Typography variant="h4">PCOS Prediction</Typography>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Home />
    </div>
  )
}

export default App
