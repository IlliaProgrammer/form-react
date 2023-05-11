import {React, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { EMAIL_VALID, LOGIN_ROUTE, NAME_VALID, REGISTRATION_ROUTE, PASSWORD_VALID } from '../utils/consts';
import Input from '../components/Input';
import {FaUserCircle} from 'react-icons/fa'
import Button from '../components/Button';


const AuthTemp = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const rememberMeChecked = localStorage.getItem('rememberMe') === 'true';

    useEffect(()=> {
      if (rememberMe) {
        localStorage.setItem('formData', JSON.stringify({firstName, lastName, password, email}));
      } else {
        localStorage.removeItem('formData');
      }
    },[firstName, lastName, password, email, rememberMe])

    useEffect(() => {
      if (rememberMeChecked) {
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
          setFirstName(formData[0]);
          setLastName(formData[1]);
          setPassword(formData[2]);
          setEmail(formData[3]);
        }
      }
    }, [rememberMeChecked]);


    const handleFirstNameChange = (e) => {
      const isValid = NAME_VALID.test(e.target.value);
      setFirstName(e.target.value);
      const inputElement = e.target.parentNode.querySelector('input');
      if (inputElement) {
        inputElement.style.borderColor = isValid ? 'green' : 'red';
      }
    }

    const handleLastNameChange = (e) => {
      const isValid = NAME_VALID.test(e.target.value);
      setLastName(e.target.value);
      const inputElement = e.target.parentNode.querySelector('input');
      if (inputElement) {
        inputElement.style.borderColor = isValid ? 'green' : 'red';
      }
    }

    const handlePasswordChange = (e) => {
      const isValid = PASSWORD_VALID.test(e.target.value);
      setPassword(e.target.value);
      const inputElement = e.target.parentNode.querySelector('input');
      if (inputElement) {
        inputElement.style.borderColor = isValid ? 'green' : 'red';
      }
    }
  
    const handleEmailChange = (e) => {
      const isValid = EMAIL_VALID.test(e.target.value);
      setEmail(e.target.value);
      const inputElement = e.target.parentNode.querySelector('input');
      if (inputElement) {
        inputElement.style.borderColor = isValid ? 'green' : 'red';
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('successfully!!');
    }
  
    const handleRememberMeChange = (e) => {
      setRememberMe(!rememberMe)
      const { checked } = e.target;
      if (checked) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('formData', JSON.stringify([firstName, lastName, password, email]));
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('formData');
      }
    }

 
    
    return (
        <div className='dark:bg-gray-900  flex flex-col justify-center p-1 rounded-xl'>
            <div className='flex justify-center text-2xl mt-8'><FaUserCircle className='text-white'/></div>
            <h2 className='text-white text-center text-2xl font-bold'>{isLogin ? 'Sing in' : 'Sing up'}</h2>
            <form onSubmit={handleSubmit} className='mx-auto p-8 px-8 w-96'>
                {isLogin ? 
                    <div>

                    </div>
                    :
                    <div className="mb-6">
                        <Input type="text" id="firstName"   placeholder="First Name *" value={firstName} onChange={(e) => handleFirstNameChange(e)}/>
                        <Input type="text" id="lastName"    placeholder="Last Name *" value={lastName} onChange={(e) => handleLastNameChange(e)}/>
                    </div> 
            
                }
                <div className="mb-6">
                        <Input type="email" id="email"  placeholder="Email" value={email} onChange={(e) => handleEmailChange(e)}/>
                        <Input type="password" id="password" placeholder="Passwod *" value={password} onChange={(e) => handlePasswordChange(e)}/>
                </div> 
               
                <input id="remember" type="checkbox" value="" checked={rememberMeChecked} onChange={handleRememberMeChange}  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/><label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{isLogin ? 'remember me' : 'I want to recieve inspiration, marketing promotions and updates via email.'}</label>
                <div className='flex justify-center m-10px'><Button title={isLogin ? 'Sing in' : 'Sing up'}/></div>
                <div className='flex justify-center'>
                    {isLogin ? 
                        <NavLink className="text-white" to={REGISTRATION_ROUTE}>Don't have an account?</NavLink>
                        :
                        <NavLink className="text-white" to={LOGIN_ROUTE}>Already have an account?</NavLink>
                    }
                </div>
                
              
            </form>
            
        </div>
    );
};

export default AuthTemp;