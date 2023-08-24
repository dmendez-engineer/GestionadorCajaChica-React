/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { InformationProvider } from './context/InformationProvider'
import Information from './components/Information'
import {LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  

  return (
    <InformationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
        <h1 className='text-4xl flex justify-center items-center mt-10 font-bold text-gray-600'>Información de ingresos y gastos por día</h1>
        <Information/>

      </LocalizationProvider>
    </InformationProvider>
  )
}

export default App
