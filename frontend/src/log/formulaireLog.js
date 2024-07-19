import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import NavbarNotConnected from "../general-component/navbarNotConnected";
import { Navigate } from "react-router-dom";
function Log(){
  const [logUser,setLogUser]=useState({
    email:"",
    password:""
  });
  const authenticated = localStorage.getItem('token');

  const handleChange=(e)=>{
    setLogUser({
      ...logUser,
      [e.target.name]:e.target.value
    });
  }
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const object={email:logUser.email,password:logUser.password};
      const response = await api.post('/login', object);
      localStorage.setItem('token', response.data.token);

    navigate('/');
    } catch (error) {
      console.error('Erreur lors du login', error);
      alert('Erreur lors du login');
    }
  };
    return(
      <>
      {
         !authenticated?
   <>
      <NavbarNotConnected/>
        <div className="container-login">
            <div className="div-logo-form">
                <img src='image/dollar.png' alt="logo"/>
            </div>
            <div className="container-form-login" >
<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
<div class="mb-5 titre-form-div">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white titre-form">Se connecter</label>
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" name="email" value={logUser.email} onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" name="password" value={logUser.password} onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-red-600 dark:focus:border-red-500 dark:shadow-sm-light"required />
  </div>
<button type="submit" class="text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-red-500">submit</button>
</form>
</div>
</div>
</> :
<Navigate to='/transaction'/>
   }
</>
        );
}

export default Log;