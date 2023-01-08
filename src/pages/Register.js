import React, {useState, useEffect} from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow, Logo } from '../components';
import {toast} from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';



const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};


const Register = () => {

  const [values, setValues] = useState(initialState);

  const {user, isLoading} = useSelector(store => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({...values, [name]: value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const {name, email, password, isMember} = values;
    if (!email || !password || (!isMember && !name)) {
      // console.log('Please fill out all fields');
      toast.error('Please fill out all fields');
      return;
    };
    if (isMember) {
      dispatch(loginUser({email: email, password: password}));
      return;
    }
    dispatch(registerUser({name,email,password}));
  };

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  };

  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    };
  }, [user]);

  return (

    <Wrapper className='full-page'>

        <form className='form' onSubmit={onSubmit}>

            <Logo/>
            
            <h3>{values.isMember ? 'Login' : 'Register'}</h3>

            {
              !values.isMember && (
                <FormRow 
                  type='text' 
                  name='name' 
                  value={values.name} 
                  handleChange={handleChange} 
                />
              )
            }
                <FormRow 
                  type='email' 
                  name='email' 
                  value={values.email} 
                  handleChange={handleChange} 
                />
    
                <FormRow 
                  type='password' 
                  name='password' 
                  value={values.password} 
                  handleChange={handleChange} 
                />

            <button 
              type='submit' 
              className='btn btn-block'
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'submit'}
            </button>

            <button 
              type='button' 
              className='btn btn-block btn-hipster'
              disabled={isLoading}
              onClick={() => dispatch(loginUser({email:'testUser@test.com', password:'secret'}))}
            >
              {isLoading ? 'loading...' : 'demo user'}
            </button>

            <p>

              {values.isMember ? 'Not a member yet?' : 'Already a member?'}

              <button type='button' onClick={toggleMember} className='member-btn'>
                {values.isMember? 'Register' : 'Login'}
              </button>

            </p>

        </form>

    </Wrapper>

  )

};

export default Register;