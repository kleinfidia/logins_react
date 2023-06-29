import React, {useState}from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Inputslog } from '../components';
import { motion } from "framer-motion"
import { FcGoogle } from 'react-icons/fc';
import { buttonClick } from '../animations';

const Login = () => {
    const [userEmail, setUserEmail] = useState("")
    const [isSignUp, setIsSignUp] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
  return (
    <div className="w-screen h-screen relative overflow-hidden flex bg-slate-800">
        {/* content box */}
        <div className="flex flex-col items-center bg-cardOverlay w-[40%] md:w-580 backdrop-blur-lg mx-[30%] 
        my-[2%]
        rounded-md
         p-4 px-4 py-12 gap-6 ">
             {/*  */}
             <p className="font-semibold text-headingColor text-3xl">Welcome</p>
            <p className="text-xl text-color -mt-6">{isSignUp ? "sign up":"sign in"} with</p>
            {/* input section */}
            <div className="w-full flex flex-col items-center justify-center px-4 md:px-12 py-4">
                <Inputslog 
                 placeHolder={"Email here"} 
                 icon={<FaEnvelope className="text-xl text-slate-950"/>} 
                 inputState={userEmail} 
                 inputStateFunc={setUserEmail} 
                 type ="email" 
                 isSignUp={isSignUp}
                 
                />
                <Inputslog
                 placeHolder={"Email here"} 
                 icon={<FaLock className="text-xl text-slate-950"/>} 
                 inputState={password} 
                 inputStateFunc={setPassword} 
                 type ="email" 
                 isSignUp={isSignUp}/>

                {isSignUp && (
                     <Inputslog
                     placeHolder={"confirm password"} 
                     icon={<FaEnvelope className="text-xl text-slate-950"/>} 
                     inputState={confirmpassword} 
                     inputStateFunc={setConfirmpassword} 
                     type ="email" 
                     isSignUp={isSignUp}/>
                 )}

                 {!isSignUp ?<p>Doesn't have an account: <motion.button {...buttonClick}  className="text-red-400 underline cursor-pointer bg-transparent"
                 onClick={() => setIsSignUp(true)}
                 >Create one</motion.button></p>:
                 <p>Already have an account: <motion.button  
                 className="text-red-400 underline cursor-pointer bg-transparent"
                 onClick={() => setIsSignUp(false)}
                 >Sign in here</motion.button></p>}

                {
                    isSignUp ? (<motion.button {...buttonClick} className="w-full px-4 py-2 bg-red-400 rounded-md text-xl text-white cursor-pointer capitalize hover:bg-red-700 transition-all duration-150">
                    Sign up
                    </motion.button>) : (
                    <motion.button  {...buttonClick} className="w-full px-4 py-2 bg-red-400 rounded-md text-xl text-white cursor-pointer capitalize hover:bg-red-700 transition-all duration-150">
                    sign in
                    </motion.button>
                    )
                 }

            </div>
            <div className="flex items-center justify-between gap-10 ">
                    <div className=" w-24 bg-white h-[1px] rounded-md"></div>
                        <p className="text-white">or</p>
                    <div className="w-24 bg-white h-[1px] rounded-md"></div>
            </div>
            <motion.div {...buttonClick} className=" flex justify-center items-center px-20 py-2  backdrop-blur-md cursor-pointer rounded-3xl gap-4" >  
                <FcGoogle className="text-3xl"/>
                <p className=" capitalize text-base text-textColor">Sign in with google</p>
                </motion.div>


        </div>
    </div>
  )
}

export default Login