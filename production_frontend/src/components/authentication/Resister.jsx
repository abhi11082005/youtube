import { useState } from "react";
import FloatingInput from "../ui_component/Input";
import axios from "axios"

const Resister = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
  const submitHandler=()=>{
      axios.post("http://localhost:8002/users/register",{
        email:email,
        password:password,
        username:username,
        name:name

      })
      .then(function (response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
  }
  return (
    <div className="h-screen w-screen">
    <div className="h-screen w-screen flex items-center justify-center bg-[#202124]">
      <div className="w-full max-w-md bg-[#303134] p-6 rounded-2xl space-y-6 shadow-lg ">
        {/* Logo & Title */}
        <div className="flex flex-col items-center">
          <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true">
            <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
            <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
            <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
            <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
          </svg>
          <h1 className="text-2xl mt-4 text-white font-semibold">Sign in</h1>
          <p className="text-white/90 mt-2">to continue to AbhiTube</p>
        </div>
        
        {/* Login Form */}
        <div className="space-y-4">
            <div className="space-y-1.5">
            <label className="text-white/90 text-sm">name </label>
            <FloatingInput type="text" text="name" onChange={setName} value={name}/>
            {/* {console.log(email)} */}
          </div>
          <div className="space-y-1.5">
            <label className="text-white/90 text-sm">name </label>
            <FloatingInput type="text" text="username" onChange={setUsername} value={username}/>
            {/* {console.log(email)} */}
          </div>
          <div className="space-y-1.5">
            <label className="text-white/90 text-sm">Email </label>
            <FloatingInput type="email" text="email" onChange={setEmail} value={email}/>
            {/* {console.log(email)} */}
          </div>

          {/* <div className="space-y-4"> */}
          <div className="space-y-1.5">
            <label className="text-white/90 text-sm">password</label>
            <FloatingInput type="password" text="password" onChange={setPassword} value={password}/>
            {/* {console.log(password)} */}
          </div>

          <div className="space-y-1.5">
            <label className="text-white/90 text-sm"> Avatar</label><br></br>
            <input type="file" className="file:bg-gradient-to-b file:from-[#303134] file:to-[#303134]
        file:px-6 file:py-3 file:m-5
        file:border-none
        file:rounded-full
        file:text-white
        file:cursor-pointer
        file:shadow-lg file:shadow-blue-600/50

        bg-gradient-to-br from-[#303134] to-[#303134]
        text-white/80
        rounded-full
        cursor-pointer
        shadow-xl shadow-[#303134]"  />
            {/* {image && <img src={image} alt="Selected" className="mt-4 w-32 h-32 object-cover rounded-lg" />} */}
            </div>
            <div className="space-y-1.5">
            <label className="text-white/90 text-sm"> Cover-Image</label><br></br>
            <input type="file" className="file:bg-gradient-to-b file:from-[#303134] file:to-[#303134]
        file:px-6 file:py-3 file:m-5
        file:border-none
        file:rounded-full
        file:text-white
        file:cursor-pointer
        file:shadow-lg file:shadow-blue-600/50

        bg-gradient-to-br from-[#303134] to-[#303134]
        text-white/80
        rounded-full
        cursor-pointer
        shadow-xl shadow-[#303134]"  />
            {/* {image && <img src={image} alt="Selected" className="mt-4 w-32 h-32 object-cover rounded-lg" />} */}
            </div>
          <div className="text-white/90 text-sm">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a href="#" className="text-[#8ab4f8] hover:underline">Learn more about using Guest mode</a>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between pt-4">
            <a href="#" className="text-[#8ab4f8] text-sm hover:underline"></a>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium
              bg-[#8ab4f8] text-[#202124] hover:bg-[#93bbf9]
              focus:outline-none focus:ring-2 focus:ring-[#8ab4f8]/50
              disabled:opacity-50 disabled:cursor-not-allowed
              h-9 px-6 py-2"
              onClick={submitHandler}
              >
              Next
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-white/60">
          <select className="bg-transparent hover:bg-white/10 px-1 py-0.5 rounded">
            <option>English (United Kingdom)</option>
          </select>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
