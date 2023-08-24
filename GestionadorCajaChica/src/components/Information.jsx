/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react'
import useInformation from '../hook/useInformation';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function Information() {
  
        const {requestInformation,setDate,registros}=useInformation();
        
        const [value,setValue]=useState({});
        
        const handleValueChange=(newValue)=>{
          
          
            requestInformation(newValue.$d);
        }
        useEffect(()=>{
          console.log("Registers From Information From useEffect: ",registros);
        },[registros]); 

      return (
    <Fragment>
        
        <div className='flex gap-10 mt-20 justify-center'>
          <div className='ml-10'>
            <div>
            <DatePicker className="bg-red-400 w-auto"
            value={value}
            onChange={(e)=>handleValueChange(e)}
            
            />
            </div>
            <div>
              <div className='mt-5 p-3 bg-yellow-300 shadow-lg rounded-xl'>
                <h1>Totales</h1>
              </div>
            </div>
          </div>
          <div className='p-3 bg-yellow-200 w-1/2 shadow-2xl rounded-xl'>
            <table className='border-separate border border-slate-400 table-fixed'>
              <thead>
              <tr>
                <th className='border-8 border-red-300 '>Fecha</th>
                <th className='border-8 border-red-300 '>Concepto</th>
                <th className='border-8 border-red-300 '>NEquipo</th>
                <th className='border-8 border-red-300 '>Tipo Pago</th>
                <th className='border-8 border-red-300 '>Ingreso</th>
                <th className='border-8 border-red-300 '>Egreso</th>
                <th className='border-8 border-red-300 '>Saldo</th>
                <th className='border-8 border-red-300 '>Observacion</th>
              </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
         
      </div>

    </Fragment>
  )
}
