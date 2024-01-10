import React from 'react';
import {useEffect, useState } from 'react';
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
import reuest from '../../../public/assets/dashboard-icon/request.svg'
import reports from '../../../public/assets/dashboard-icon/bad-feedback.svg'
import rent from '../../../public/assets/dashboard-icon/rent.svg'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/crslImg.png';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import ReactSlider from 'react-slider'

import Header from './Header'
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const ListerDashboard = () => {
  let tenant= localStorage.getItem('tenant');
  
    // const [OTP, setOTP] = useState("");
    const [otp, setOtp] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMod, setShowMod] = useState(false);
    const handleCloseMod = () => setShowMod(false);
    const handleShowMod = () => setShowMod(true);
   
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

      useEffect(() => {
        if(tenant == 'true'){
          handleShow()
        }
        
      }, [tenant])

  return (
    <div className='container-fluid  p-0'>
    
       
      
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className='col-12 bg-Img'>
                    
                </div>
                <div className='col-12 dashboard-col'>
                    
                    <div className='container'>
                    <h6>Dashboard</h6>
                    {
                      !show && 
                      <ul className='dashboard-list p-0'>
                        <Link href={"/accountDetail"}>
                            <li> <Image src={one} className='img-fluid' alt='one' />
                            
                            <h6 >Account <br></br> Details</h6> </li>
                            </Link>
                            <Link href={"/myProperty"}>
                            <li > 
                              
                              <Image src={two} className='img-fluid' alt='one' />
                            <h6 >My <br></br> Properties</h6> 
                            
                            </li>
                            </Link>
                            <li> <Image src={three} className='img-fluid' alt='one' /> 
                            <h6 >Communication</h6></li>
                            <Link href={"/schedulerEvent"}>
                            <li> <Image src={four} className='img-fluid' alt='one' /> 
                            <h6 >Scheduler and <br></br> Events</h6></li>
                            </Link>
                            <Link href={"/bookingRequest"}>
                            <li> <Image src={fivesix} className='img-fluid' alt='one' /> 
                            <h6 >Rental <br></br> Request</h6></li>
                            </Link>
                            <Link href={"/contract"}>
                            <li> <Image src={fivesix} className='img-fluid' alt='one' />
                            <h6 >Contract</h6> </li>
                            </Link>
                            <Link href={"/availability"}>
                            <li> <Image src={seven} className='img-fluid' alt='one' /> 
                            <h6 >Availabilty</h6></li>
                            </Link>
                            <Link href={"/paymentPayout"}>
                            <li> <Image src={eight} className='img-fluid' alt='one' />
                            <h6 >Payment <br></br> Details /History</h6> </li>
                            </Link>
                            <Link href={"/tenantReportIssue"}>
                            <li> <Image src={nine} className='img-fluid' alt='one' /> 
                            <h6 >Tenant <br></br> Report Issues</h6></li>
                            </Link>
                            <Link href={"/helpSupport"}>
                            <li> <Image src={ten} className='img-fluid' alt='one' />
                            <h6 >Help & <br></br> Support</h6> </li>
                            </Link>
                           
                        </ul>
                    }
                    {
                      show && 
                      <ul className='dashboard-list p-0'>
                        <Link href={"/accountDetail"}>
                            <li> <Image src={one} className='img-fluid' alt='one' />
                            
                            <h6 >Account <br></br> Details</h6> </li>
                            </Link>
                            
                            <li onClick={handleShowMod} className='cursor-pointer' > 
                              
                              <Image src={two} className='img-fluid' alt='one' />
                            <h6 >Search <br></br> Properties</h6> 
                            
                            </li>
                            <Link href={"/bookingRequest"}>
                            <li> <Image src={reuest} className='img-fluid' alt='one' /> 
                            <h6 >All <br></br> Request</h6></li>
                            </Link>
                            <Link href={"/schedulerEvent"}>
                            <li> <Image src={four} className='img-fluid' alt='one' /> 
                            <h6 > All <br></br> Communications</h6></li>
                            </Link>
                            <Link href={"/tenantReportIssue"}>
                            <li> <Image src={reports} className='img-fluid' alt='one' /> 
                            <h6 >All Reports/ <br></br> Issue</h6></li>
                            </Link>
                            <Link href={"/rentedProperty"}>
                            <li> <Image src={rent} className='img-fluid' alt='one' />
                            <h6 >Rented<br></br>Properties</h6> </li>
                            </Link>
                            <Link href={"/schedulerEvent"}>
                            <li> <Image src={seven} className='img-fluid' alt='one' /> 
                            <h6 >Scheduler and <br></br>Events</h6></li>
                            </Link>
                            <Link href={"/paymentPayout"}>
                            <li> <Image src={eight} className='img-fluid' alt='one' />
                            <h6 >Payment <br></br> Details /History</h6> </li>
                            </Link>
                            
                            <Link href={"/helpSupport"}>
                            <li> <Image src={ten} className='img-fluid' alt='one' />
                            <h6 >Help & <br></br> Support</h6> </li>
                            </Link>
                            <Link href={"/searchProperty"}>
                            <li> <Image src={nine} className='img-fluid' alt='one' /> 
                            <h6 >My <br></br> Favourite</h6></li>
                            </Link>
                           
                        </ul>
                    }
                        
                    </div>

                </div>

            </div>

        </div>
        <Modal
     size="xl"
        show={showMod}
        onHide={handleCloseMod}     
        keyboard={false} centered >
          <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Search
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='row'>
                  <div className='col-12'>
                  <label className='mb-3'>Price Range</label>
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[100, 200000]}
                    min={0}
                    max={500000}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div  {...props}>
                    <span className="slider-text">${state.valueNow}</span> 
                      </div>}
                    pearling
                    minDistance={10}
                  />
                  </div>
                
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Min"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Min" />
                  </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Max"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Max" />
                  </FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-12'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Location"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="location" />
                  </FloatingLabel>
                  </div>
                  
                </div>
                <div className='row mt-4'>
                  <div className='col-12'>
                  <FloatingLabel controlId="floatingSelect" label="Select Category">
                    <Form.Select aria-label="Floating label select example">
                      <option value="Villa">Villa</option>
                      <option value="Villa">Villa</option>
                      <option value="Villa">Villa</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  </div>
                  
                </div>
              </div>
              <div className='col-12 col-md-6'>
              <div className='row'>
                  <div className='col-12'>
                    <label className='mb-3'>Property Area</label>
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[100, 200000]}
                    min={0}
                    max={500000}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div  {...props}>
                    <span className="slider-text">{state.valueNow}  Sq ft</span> 
                      </div>}
                    pearling
                    minDistance={10}
                  />
                  </div>
                
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Min"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Min" />
                  </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Max"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Max" />
                  </FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingSelect" label="Country">
                    <Form.Select aria-label="Floating label select example">
                      <option >Select</option>
                      <option value="India">India</option>
                      <option value="India">India</option>
                      <option value="India">India</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  </div>

                  <div className='col-6'>
                  <FloatingLabel controlId="floatingSelect" label="State">
                    <Form.Select aria-label="Floating label select example">
                      <option >Select</option>
                      <option value="India">Maharastra</option>
                      <option value="India">Uttar Pradesh</option>
                      <option value="India">Punjab</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  </div>
                  
                </div>

                <div className='row mrg-top-2-5'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingSelect" label="No. of Bed">
                    <Form.Select aria-label="Floating label select example">
                      <option >Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  </div>

                  <div className='col-6'>
                  <FloatingLabel controlId="floatingSelect" label="No. of Bathroom">
                    <Form.Select aria-label="Floating label select example">
                      <option >Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  </div>
                  
                </div>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type='button' className='white-btn' onClick={handleCloseMod}>Cancel</button>
          <Link href={"/searchProperty"}>
          <button type='button' className="red-btn">Search</button>
          </Link>
        </Modal.Footer>

      </Modal>
    </div>

    
  );
};

export default ListerDashboard;
