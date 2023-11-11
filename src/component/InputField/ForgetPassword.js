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
import forgetpassword from '../../../public/assets/forget-password.svg'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/crslImg.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';


import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const ForgetPassword = () => {
    // const [OTP, setOTP] = useState("");
    const [otp, setOtp] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
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
                <div className='col-12 col-md-6 left-padding-new'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3 wd-100'>
                    <h5 className='mb-4'>Forgot Password</h5>
        <div>

        <FloatingLabel
        controlId="floatingInput"
        label="Enter Email ID/Mobile no."
        
      >
        <Form.Control type="email" placeholder="Enter Email ID/Mobile no." {...register('email')}/>
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      
      </div>
        
      {showOTP && 
                    <div>

                    
        
                    <div className='mt-4 text-center otpInput'>
                    <p>We have sent the verification OTP to your mobile no.</p>
              <     p className='mobile'> +91 987654321 <Image src={editIcon} className='img-fluid editIcon' alt='logo' /> <span>Edit</span>  </p>
                    {/* <OTPInput className='otpInput' value={OTP} onChange={handleChange} autoFocus OTPLength={6} otpType="number" disabled={false}  /> */}
                    <div className={'otpDiv'}>
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}

                    renderSeparator={<span> &nbsp; &nbsp; &nbsp; </span>}
                    renderInput={(props) => <input {...props} />}
                    />
                    </div>

                    <div className='d-flex justify-content-center resendDiv mt-2'>
                    Didn&apos;t get it? <span className='resendBtn'> Resend the code</span>
                    </div>
                    
                    

                    
                    </div>
                    <div className='mt-3'>
                        <div className='mb-3'>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="New Password"
                        >
                        <Form.Control type="password" placeholder="New Password" {...register('email')}/>
                        </FloatingLabel>
                        </div>
                  
                        <div>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Confirm Password"
                            >
                        <Form.Control type="password" placeholder="Confirm Password" {...register('email')}/>
                        </FloatingLabel>
                        </div>
                    
                    </div>

                    </div>

                    }
                    {
                    !showOTP &&
                    <button type="button" className='signup-btn' onClick={(e) => setshowOTP(true)} >Next</button>

                    }
                    {
                    showOTP &&
                    
                    <button type="button" className='signup-btn' onClick={handleShow}>Reset Password</button>
                    

                    }

        
        
      </form>
                </div>
                <div className='col-6 right-padding mob-hide'>
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
        <Modal
     size="md"
        show={show}
        onHide={handleClose}     
        keyboard={false} centered >
         
        <Modal.Body>
          <div className='row text-center'>
              <div className='col-12'>
              <Image src={forgetpassword} alt='logo' className={'img-fluid ' + styles.forgrtPswd}/>
              <h6>
              Password Verified
              </h6>
              <p>
              You have successfully verified your email ID.
              </p>
              </div>

              <div className='col-12'>
                <Link href="/listerDashboard">
                    <button type='button' className="red-btn" onClick={handleClose}>Okay</button>
                </Link>
              </div>
          </div>
        </Modal.Body>
        

      </Modal>
    </div>

    
  );
};

export default ForgetPassword;
