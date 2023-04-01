import './App.css'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-8 pb-8 ">
        <img
          src={process.env.PUBLIC_URL + '/home_1.jpg'}
          alt="My Image"
          width={1500}
          height={200}
        />
      </div>
    </>
  )
}

export default Home
