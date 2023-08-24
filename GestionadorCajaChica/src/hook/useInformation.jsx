/* eslint-disable no-unused-vars */
import { useContext } from "react";
import InformationContext from "../context/InformationProvider";

const useInformation=()=>{
    return useContext(InformationContext);
}
export default useInformation;