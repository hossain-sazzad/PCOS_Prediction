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

  return (
    <>
      <h1 className={'text-center text-3xl pt-8 pb-8'}>
        Know your Chances of Having PCOS in one Click
      </h1>
      <div className={'flex flex-row gap-12'}>
        <img
          className={'pl-4'}
          src={process.env.PUBLIC_URL + '/pcos_form.png'}
          alt="My Image"
          width={700}
          height={200}
        />
        <div className={'flex flex-col p-8'}>
          <TextField
            id="age"
            label="Age (years)"
            type={'number'}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />
          <TextField
            id="weight"
            label="Weight (kg)"
            value={weight}
            type={'number'}
            onChange={(e) => setWeight(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="height"
            label="Height (cm)"
            value={height}
            type={'number'}
            onChange={(e) => setHeight(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="bmi"
            label="BMI"
            type={'number'}
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="pulse"
            label="Pulse Rate (bmp)"
            type={'number'}
            value={pulse}
            onChange={(e) => setPulse(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
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
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />
          <TextField
            id="follicleL"
            label="Follicle NO (L)"
            type={'number'}
            value={fosL}
            onChange={(e) => setFosL(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="follicleR"
            label="Follicle NO (R)"
            type={'number'}
            value={fosR}
            onChange={(e) => setFosR(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="fl"
            label="Avg F.size (L)"
            type={'number'}
            value={fL}
            onChange={(e) => setFL(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />{' '}
          <TextField
            id="fr"
            label="Avg F.size (R)"
            type={'number'}
            value={fR}
            onChange={(e) => setFR(e.target.value)}
            margin="dense"
            variant={'outlined'}
            inputProps={{ style: { fontSize: 30 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 30 } }} // font size of input label
          />
        </div>
        <Button type={'submit'} text={'Calculate'} size={'medium'} />
      </div>
    </>
  )
}

export default Home
