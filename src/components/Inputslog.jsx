import React, {useState} from 'react';
import { motion } from 'framer-motion';

const Inputslog = ({placeHolder, icon ,inputState, inputStateFunc, type, isSignUp }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div
   
    className={`flex items-center justify-center gap-8 bg-cardOverlay backdrop-blur-md rounded-md mt-1  w-full  px-4 py-2  ${isFocus ? "shadow-md shadow-red-400": "shadow-none"}`} >
        {icon}
        <input
            type= {type} 
            placeholder= {placeHolder}
            className=" w-full h-full bg-transparent text-textColor text-lg font-semibold border-none outline-none"
            value={inputState}
            onChange={(e) => inputStateFunc(e.target.value) }
            onFocus={()=>setIsFocus(true)}
            onBlur={()=>setIsFocus(false)}
        />

    </motion.div>
  )
}

export default Inputslog