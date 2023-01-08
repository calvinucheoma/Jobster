import React from 'react';
import { useNavigate } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';


const Landing = () => {

  const navigate = useNavigate();

  return (

    <Wrapper>

        <nav>
            <Logo/>
        </nav>

        <div className="container page">

            <div className="info">

                <h1>job <span>tracking</span> app</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Earum nulla, repellendus qui rerum iste fuga 
                    laudantium blanditiis nam nobis nesciunt.
                </p>
                <button 
                    className="btn btn-hero"
                    onClick={() => navigate('/register')}
                >
                    Login/Register
                </button>

            </div>

            <img src={main} alt="job hunt" className='img main-img' />

        </div>

    </Wrapper>

  )

};

export default Landing;