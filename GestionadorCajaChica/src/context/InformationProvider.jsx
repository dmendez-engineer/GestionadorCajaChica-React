/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const InformationContext=createContext();

const InformationProvider=({children})=>{
   
    const [registros,setRegistros]=useState([]);
    const[date,setDate]=useState();


    useEffect(()=>{
        //Request to DataBase
    },[date]);

   const requestInformation=async(date)=>{
   // Date newDate= new Date(date);
    
    const newDate= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    console.log("From Provider Date: ",newDate);
    const {data}=await axios.post("http://localhost:4000/information",{date:newDate});
    console.log("DB Data: ",data.incomes);
    setRegistros(data.incomes);
   }

    return(
        <InformationContext.Provider
        value={{
        requestInformation:requestInformation,
        date:date,
        setDate:setDate,
        registros:registros

        }}
        >
        {children}
        </InformationContext.Provider>
    )
}
export{
    InformationProvider
}
export default InformationContext