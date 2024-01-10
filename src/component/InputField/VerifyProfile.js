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
import uploadIcon from '../../../public/assets/upload-icon.svg'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/verifyCrsl.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Link from 'next/link'

import OtpInput from 'react-otp-input';


import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const VerifyProfile = () => {
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
                <div className='col-12 col-md-6 left-padding'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                    <h5 className='mb-4'>Verify Your Profile</h5>
                    <p>Make sure your photos aren’t blurry and the front of your identity card clearly shows your face.</p>
        <div>

        <Form.Group controlId="formFile" className="mb-3 upload-fle-div">
        <p className='mb-0'> <Image src={uploadIcon} alt='upload' className='img-fluid' /> Front Adhaar Card</p>
        <Form.Label className='upload-fle' >Upload</Form.Label>
        <Form.Control  type="file" hidden/>
      </Form.Group>

      <Form.Group controlId="formFileN" className="mb-3 upload-fle-div">
        <p className='mb-0'> <Image src={uploadIcon} alt='upload' className='img-fluid' /> Back Adhaar Card</p>
        <Form.Label className='upload-fle' >Upload</Form.Label>
        <Form.Control  type="file" hidden/>
      </Form.Group>
     
      
      </div>
        
        
      <div className='row'>
        
        <div className='col-6'>
        <Link href="/signin">
            <button type="button" className='skip-btn' onClick={(e) => setshowOTP(true)} >Skip</button>
            </Link>
            </div>
        
        
        <div className='col-6'>
        <Link href="/signin">
            <button type="button" className='addreSIgn signup-btn' onClick={(e) => setshowOTP(true)} >Next</button>
            </Link>
            </div>
        
      
      </div>
        
      </form>
                </div>
                <div className='col-6 right-padding mob-hide test'>
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

export default VerifyProfile;
