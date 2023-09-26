import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Home.module.css';
import  setnestlogo from '../../../public/assets/Setnest-copy.png';
import editIcon from '../../../public/assets/editIcon.png'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/crslImg.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Link from 'next/link'

import OtpInput from 'react-otp-input';


import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const SignIn = () => {
    // const [OTP, setOTP] = useState("");
    const [otp, setOtp] = useState('');
    // const handleChange = (otp) => {
    //   setOTP(otp);
    // };
   
    const [showOTP, setshowOTP] = useState(false);
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
      const router = useRouter();
      const goBack = () => {
        router.back();
      };
      const onSubmit = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/login');
      };

      const renderButton = () => {
        return  <button className='resendBtn'> Resend the code</button>;
      };
      const renderTime = (remainingTime) => {
        return <span>{remainingTime} sec</span>;
      };

  

  return (
    <div className='container-fluid main-set '>
        <div className='topsection'>
        <button type='button' className={`${styles.iconBtn}`} onClick={goBack}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
        <Image src={setnestlogo} alt='logo' className={'img-fluid ' + styles.topLogo}/>
        </div>
      
        <div className='container-fluid hgt-100vh'>
            <div className='row side-padding'>
                <div className='col-6 left-padding'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3 wd-100'>
                    <h5 className='mb-4'>Sign In</h5>
        <div>

        <FloatingLabel
        controlId="floatingInput"
        label="Enter Email ID/Mobile no."
        
      >
        <Form.Control type="email" placeholder="Enter Email ID/Mobile no." {...register('email')}/>
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      
        <p className='mb-0 clr-pink text-end'>Forgot Password?</p>
      </div>
        
        
          {/* <Link href="/createprofile"> */}
        <button type="button" className='signup-btn mt-4' >Sign In</button>
          {/* </Link> */}

        
        
      </form>
                </div>
                <div className='col-6 right-padding'>
                <Carousel>
      <Carousel.Item>
        <Image src={crslimg} alt='logo' className='img-fluid' text="First slide" width="100%" height="100%"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={crslimg} alt='logo' className='img-fluid' text="Second slide" width="100%" height="100%"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={crslimg} alt='logo' className='img-fluid' text="Third slide" width="100%" height="100%"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default SignIn;
