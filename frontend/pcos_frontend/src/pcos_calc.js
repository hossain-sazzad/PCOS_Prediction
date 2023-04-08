import './App.css'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'
import { useState } from 'react'

function Home() {
  const [age, setAge] = useState(null)
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [bmi, setBmi] = useState(null)
  const [pulse, setPulse] = useState(null)
  const [pimple, setPimple] = useState(null)
  const [fosL, setFosL] = useState(null)
  const [fosR, setFosR] = useState(null)
  const [fL, setFL] = useState(null)
  const [fR, setFR] = useState(null)
  // 2 --> P
  // 3 --> !P
  const [baseRow, setBaseRow] = useState(3)
  const [result, setResult] = useState(null)
  const getPrediction = async () => {
    console.log('getPred==============')
    try {
      const response = await fetch('http://localhost:9090/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age,
          weight,
          height,
          bmi,
          pulse,
          pimple: pimple === 'y' || pimple === 'Y' ? 1 : 0,
          fosL,
          fosR,
          fL,
          fR,
          baseRow,
        }),
      })
      const json = await response.json()
      setResult(json.res)
    } catch (error) {
      console.log('network error')
      setResult(0)
    }
  }
  if (result != null) {
    console.log(result)
    console.log(typeof result)
  }
  if (result != null && result) {
    return (
      <>
        <div className={'text-center text-4xl pt-16'}>
          Sorry You have chances of getting the diseases, please consult the
          doctor immediately.
        </div>
        <div className={'text-center pt-8'}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ fontSize: '20px' }}
            onClick={() => setResult(null)}
          >
            Back
          </Button>
        </div>
      </>
    )
  }
  if (result != null && !result) {
    return (
      <>
        <div className={'text-center text-4xl pt-16'}>
          No need to fear. You have no dangerous symptoms of this disease.
        </div>
        <div className={'text-center pt-8'}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ fontSize: '20px' }}
            onClick={() => setResult(null)}
          >
            Back
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className={'text-center text-3xl pt-8 pb-8'}>
        Know your Chances of Having PCOS in one Click
      </h1>
      <div className={'flex flex-col justify-center'}>
        <div className={'flex flex-row gap-24 pr-48 justify-center'}>
          <div className={'max-h-1 max-w-sm'}>
            <img
              className={'pl-4'}
              src={process.env.PUBLIC_URL + '/pcos_form.png'}
              alt="My Image"
              width={500}
              height={20}
              onClick={() => setBaseRow((prev) => 5 - prev)}
            />
          </div>
          <div className={'flex flex-col p-8'}>
            <TextField
              id="age"
              label="Age (years)"
              type={'number'}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />
            <TextField
              id="weight"
              label="Weight (kg)"
              value={weight}
              type={'number'}
              onChange={(e) => setWeight(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="height"
              label="Height (cm)"
              value={height}
              type={'number'}
              onChange={(e) => setHeight(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="bmi"
              label="BMI"
              type={'number'}
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="pulse"
              label="Pulse Rate (bmp)"
              type={'number'}
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />
          </div>
          <div className={'flex flex-col p-8'}>
            <TextField
              id="pimple"
              label="Pimple (Y/N)"
              type={'string'}
              value={pimple}
              onChange={(e) => setPimple(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />
            <TextField
              id="follicleL"
              label="Follicle NO (L)"
              type={'number'}
              value={fosL}
              onChange={(e) => setFosL(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="follicleR"
              label="Follicle NO (R)"
              type={'number'}
              value={fosR}
              onChange={(e) => setFosR(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="fl"
              label="Avg F.size (L)"
              type={'number'}
              value={fL}
              onChange={(e) => setFL(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />{' '}
            <TextField
              id="fr"
              label="Avg F.size (R)"
              type={'number'}
              value={fR}
              onChange={(e) => setFR(e.target.value)}
              margin="dense"
              variant={'outlined'}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />
            <div className={'pt-4 pl-72 flex-row items-center'}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ fontSize: '20px' }}
                onClick={getPrediction}
                disabled={
                  age == null ||
                  weight == null ||
                  height == null ||
                  bmi == null ||
                  pulse == null ||
                  pimple == null ||
                  fosL == null ||
                  fosR == null ||
                  fL == null ||
                  fR == null
                }
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
