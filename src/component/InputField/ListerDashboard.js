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
import one from '../../../public/assets/dashboard-icon/1.svg'
import two from '../../../public/assets/dashboard-icon/2.svg'
import three from '../../../public/assets/dashboard-icon/3.svg'
import four from '../../../public/assets/dashboard-icon/4.svg'
import fivesix from '../../../public/assets/dashboard-icon/5-6.svg'
import seven from '../../../public/assets/dashboard-icon/7.svg'
import eight from '../../../public/assets/dashboard-icon/8.svg'
import nine from '../../../public/assets/dashboard-icon/9.svg'
import ten from '../../../public/assets/dashboard-icon/10.svg'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/crslImg.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';

import Header from './Header'
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const ListerDashboard = () => {
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
    <div className='container-fluid  p-0'>
    
       
      
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className='col-12 bg-Img'>
                    
                </div>
                <div className='col-12 dashboard-col'>
                    
                    <div className='container'>
                    <h6>Dashboard</h6>
                        <ul className='dashboard-list p-0'>
                        
                            <li> <Image src={one} className='img-fluid' alt='one' />
                            <h6 >Account <br></br> Details</h6> </li>
                            <Link href={"/myProperty"}>
                            <li > 
                              
                              <Image src={two} className='img-fluid' alt='one' />
                            <h6 >My <br></br> Properties</h6> 
                            
                            </li>
                            </Link>
                            <li> <Image src={three} className='img-fluid' alt='one' /> 
                            <h6 >Communication</h6></li>
                            <li> <Image src={four} className='img-fluid' alt='one' /> 
                            <h6 >Scheduler and <br></br> Events</h6></li>
                            <li> <Image src={fivesix} className='img-fluid' alt='one' /> 
                            <h6 >Rental <br></br> Request</h6></li>
                            <li> <Image src={fivesix} className='img-fluid' alt='one' />
                            <h6 >Contract</h6> </li>
                            <li> <Image src={seven} className='img-fluid' alt='one' /> 
                            <h6 >Availabilty</h6></li>
                            <li> <Image src={eight} className='img-fluid' alt='one' />
                            <h6 >Payment <br></br> Details /History</h6> </li>
                            <li> <Image src={nine} className='img-fluid' alt='one' /> 
                            <h6 >Tenant <br></br> Report Issues</h6></li>
                            <li> <Image src={ten} className='img-fluid' alt='one' />
                            <h6 >Help & <br></br> Support</h6> </li>
                           
                        </ul>
                    </div>

                </div>

            </div>

        </div>
        
    </div>

    
  );
};

export default ListerDashboard;
