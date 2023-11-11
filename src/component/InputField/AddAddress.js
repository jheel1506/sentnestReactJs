import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/addadress.module.css';
import  setnestlogo from '../../../public/assets/Setnest-copy.png';
import editIcon from '../../../public/assets/edit-profile.svg'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/createCrsl.png';
import profilePic from '../../../public/assets/profile-pic.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import InputGroup from 'react-bootstrap/InputGroup';
import OtpInput from 'react-otp-input';


import * as yup from 'yup';
import Link from 'next/link';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const AddAddress = () => {
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
     
        <Image src={setnestlogo} alt='logo' className={'img-fluid ' + styles.topLogo}/>
        <div className='container-fluid hgt-100vh'>
            <div className='row side-padding mob-side'>
                <div className='col-12 col-md-6 left-padding'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                    <h5 className='mb-4'>Add Address</h5>
        <div className='row'>
            <div className='mb-3 col-12'>
                <p className={styles.addresp}>
                   <span>Home </span>  Address
                </p>
            </div>
      <div className='col-12'>
      <FloatingLabel controlId="floatingPassword" label="Pincode">
        <Form.Control type="text" placeholder="Pincode" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      </div>
      <div className='col-12'>
      <FloatingLabel controlId="floatingPassword" label="Flat, House No., Building, Company, Apartment">
        <Form.Control type="text" placeholder="Flat, House No., Building, Company, Apartment" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Area, Street, Sector, Village">
        <Form.Control type="text" placeholder="Area, Street, Sector, Village" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Landmark">
        <Form.Control type="text" placeholder="Landmark" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Town/City">
        <Form.Control type="text" placeholder="Town/City" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="State">
        <Form.Control type="text" placeholder="State" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      
      
      
      
      
      
      </div>
      <div className='row'>
            <div className='mb-3 col-12'>
                <p className={styles.addresp}>
                   <span>Billing </span>  Address
                </p>
                <Form.Check
            label={  <span >as same home address </span>}
            name="group1"
            type="checkbox"
            
          />
            </div>
      <div className='col-12'>
      <FloatingLabel controlId="floatingPassword" label="Pincode">
        <Form.Control type="text" placeholder="Pincode" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      </div>
      <div className='col-12'>
      <FloatingLabel controlId="floatingPassword" label="Flat, House No., Building, Company, Apartment">
        <Form.Control type="text" placeholder="Flat, House No., Building, Company, Apartment" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Area, Street, Sector, Village">
        <Form.Control type="text" placeholder="Area, Street, Sector, Village" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Landmark">
        <Form.Control type="text" placeholder="Landmark" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="Town/City">
        <Form.Control type="text" placeholder="Town/City" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      <div className='col-6'>
      <FloatingLabel controlId="floatingPassword" label="State">
        <Form.Control type="text" placeholder="State" {...register('password')}/>
      </FloatingLabel>
      <p>{errors.password?.message}</p>
      </div>
      
      
      
      
      
      
      </div>
       
      <div className='row'>
        
        <div className='col-6'>
        <Link href="/verifyprofile">
            <button type="button" className='skip-btn' onClick={(e) => setshowOTP(true)} >Skip</button>
            </Link>
            </div>
        
        
        <div className='col-6'>
        <Link href="/verifyprofile">
            <button type="button" className='addreSIgn signup-btn' onClick={(e) => setshowOTP(true)} >Next</button>
            </Link>
            </div>
        
      
      </div>
        

        
        
        
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
      
    </div>
  );
};

export default AddAddress;
