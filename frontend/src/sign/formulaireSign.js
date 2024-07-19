import { useState } from "react";
import api from "../api/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavbarNotConnected from "../general-component/navbarNotConnected";
function Sign(){
  const authenticated = localStorage.getItem('token');

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [signUser,setSignUser]=useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setSignUser({
      ...signUser,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const object={
        nom: signUser.lname,
        prenom: signUser.fname,
        email: signUser.email,
        password: signUser.password
      }
      api.post('/register', object).then(
        (response)=>  {
          localStorage.setItem('token', response.data.token);
          navigate('/profile');
         })
        .catch((error)=> console.log("error d'axios",error));
    } catch (error) {
      console.error(error);
    }
  };

    return(
      <>{
        !authenticated?<>
      <NavbarNotConnected/>
        <div className="container-login">
            <div className="div-logo-form">
                <img src='image/dollar.png' alt="logo"/>
            </div>
            <div className="container-form-login" >
<form className="max-w-sm mx-auto" >
<div className="mb-5 titre-form-div">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white titre-form">Creer compte</label>
  </div>
<div className="mb-5 ">
    <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
    <input type="text" name="fname" value={signUser.fname} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light" required />
  </div>
  <div className="mb-5">
    <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
    <input type="text" name="lname" value={signUser.lname} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light"  required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" name="email" value={signUser.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" name="password" value={signUser.password} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light"required />
  </div>

  <button onClick= {handleSubmit} className="text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-red-500">submit</button>
</form>
</div>
        </div>
        </>
        :<Navigate to='/transaction'/>
      }
        </>
    );
}

export default Sign;