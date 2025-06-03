import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react"
import axios from 'axios'
export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("")
  const [emailid, setEmailID] = useState("")
  const [password, setPassword] = useState("")
  const [contactNo, setContactNo] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5050/api/Users/Insert`, {
      userName, emailid, password, contactNo
    })
      .then(function (response) {
        console.log(response);

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>
      <div className="loginbg h-dvh flex items-center">
        <div className="container mx-auto max-w-[30%] text-white  my-auto">
          <div className="">
            <img src="/logo.svg" className="w-[30%] h-[30%] mx-auto mb-12" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <label htmlFor="userName" className="block text-base font-medium text-white-700 basis-1/3">User Name</label>
              <input type="text" name="userName" id="userName" required onChange={e => setUserName(e.target.value)} value={userName} maxLength={50} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 valid:text-emerald-500 valid:border-emerald-400 focus:valid:text-emerald-500 focus:valid:border-emerald-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 basis-1/4 grow " />
            </div>

            <div className="flex flex-row mt-6">
              <label htmlFor="emailid" className="block text-base font-medium text-white-700 basis-1/3">Email ID</label>
              <input type="email" name="emailid" id="emailid" required onChange={e => setEmailID(e.target.value)} value={emailid} maxLength={50} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 valid:text-emerald-500 valid:border-emerald-400 focus:valid:text-emerald-500 focus:valid:border-emerald-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 basis-1/4 grow " />
            </div>


              <div class="flex flex-row mt-6">
                <label htmlFor="emailid" className="block text-base font-medium text-white-700 basis-1/3">Password</label>
                <input type="password" name="password" autoComplete="current-password" id="password" required onChange={e => setPassword(e.target.value)} value={password} maxLength={20} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 valid:text-emerald-500 valid:border-emerald-400 focus:valid:text-emerald-500 focus:valid:border-emerald-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 basis-1/4 grow " />
              </div>
              <div className="flex flex-row mt-6">
              <label htmlFor="contactNo" className="block text-base font-medium text-white-700 basis-1/3">Contact No</label>
              <input type="text" name="contactNo" id="contactNo" required onChange={e => setContactNo(e.target.value)} value={contactNo} maxLength={50} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 valid:text-emerald-500 valid:border-emerald-400 focus:valid:text-emerald-500 focus:valid:border-emerald-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 basis-1/4 grow " />
            </div>

            <div className=" ">
              <div className="grid grid-cols-2 gap-1 mt-6">
                <button type="submit" value="Login" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Sign up</button>
                <NavLink to="/" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white text-center">Login</NavLink>
              </div>

            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}