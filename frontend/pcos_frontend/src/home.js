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
      <div className="flex justify-center pl-4 pr-4 pb-8">
        <img
          className={''}
          src={process.env.PUBLIC_URL + '/home_2.jpg'}
          alt="My Image"
          width={500}
          height={200}
        />
        <img
          className={''}
          src={process.env.PUBLIC_URL + '/home_3.jpg'}
          alt="My Image"
          width={500}
          height={200}
        />
        <img
          className={''}
          src={process.env.PUBLIC_URL + '/home_4.jpg'}
          alt="My Image"
          width={500}
          height={200}
        />
      </div>
      <div className="flex justify-center pl-4 pr-4 pb-8 gap-4">
        <Box
          border={1}
          p={2}
          maxWidth={400}
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            style={{ fontSize: '1.5rem', textAlign: 'center' }}
          >
            PCOS is recognized worldwide as the leading endocrine & metabolic
            disorder in women.
          </Typography>
        </Box>
        <Box
          border={1}
          p={2}
          maxWidth={400}
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            align="center"
            style={{ fontSize: '1.5rem', textAlign: 'center' }}
          >
            PCOS cannot be cured, but the hormonal imbalance and symptoms can be
            treated.
          </Typography>
        </Box>
        <Box
          border={1}
          p={2}
          maxWidth={400}
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            align="center"
            style={{ fontSize: '1.5rem', textAlign: 'center' }}
          >
            PCOS it’s hard to explain to someone who has no clue. It’s a daily
            struggle being in pain or feeling sick on the inside.
          </Typography>
        </Box>
      </div>
    </>
  )
}

export default Home
