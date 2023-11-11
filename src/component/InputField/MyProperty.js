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
import one from '../../../public/assets/my-property/3d-electric-car-building.png'
import two from '../../../public/assets/my-property/3d-electric-car-building-1.png'
import three from '../../../public/assets/my-property/3d-electric-car-building-2.png'
import four from '../../../public/assets/my-property/3d-electric-car-building-3.png'
import five from '../../../public/assets/my-property/3d-electric-car-building-4.png'
import six from '../../../public/assets/my-property/3d-electric-car-building-5.png'
import seven from '../../../public/assets/my-property/3d-electric-car-building-6.png'
import eight from '../../../public/assets/my-property/3d-electric-car-building-7.png'
import listed from '../../../public/assets/my-property/listed.svg'
import notice from '../../../public/assets/my-property/notice.svg'
import rented from '../../../public/assets/my-property/rented.svg'

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

const MyProperty = () => {
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
    
    <div className='topsectionProp'>
        <button type='button' className={`${styles.iconBtn}`} onClick={goBack}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
       
        </div>
      
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className='col-12  myPropHead' fixed="top">
                    <div className='container'>
                    <h4>My Property</h4>
                    <div className='row justify-content-between'>
                    <div className='col-6 col-md-3'>
                    <Form.Select aria-label="Floating label select example" className='filterImg'>
                        <option>All</option>
                        <option value="1">Listed</option>
                        <option value="2">Rented</option>
                        <option value="3">Archive</option>
                        <option value="4">Draft</option>
                    </Form.Select>
                    </div>
                    
                    <div className='col-6 col-md-3 text-end'>
                      <Link href={'/listProperty'}>
                      <button className='addPropBtn' type='button'>Add Property</button>
                      </Link>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className='col-12 mrg-13em'>
                    
                    <div className='container'>
                    
                        <ul className='property-list p-0'>
                        
                            <li > 
                              <span>4.5</span>
                              <Image src={one} className='img-fluid' alt='one' />
                              <Image src={listed} className='bgBanner' alt='bg' />
                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div>
                             
                            
                            </li>
                            <li> 
                            <span>4.5</span>
                              <Image src={two} className='img-fluid' alt='one' />
                            <Image src={notice} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div> </li>
                            <li> 
                            <span>4.5</span>
                              <Image src={three} className='img-fluid' alt='one' /> 
                            <Image src={listed} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li> 
                            <span>4.5</span>
                              <Image src={four} className='img-fluid' alt='one' /> 
                            <Image src={notice} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li>
                            <span>4.5</span>
                               <Image src={five} className='img-fluid' alt='one' /> 
                            <Image src={rented} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li> 
                            <span>4.5</span>
                              <Image src={six} className='img-fluid' alt='one' />
                            <Image src={listed} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div> </li>
                            <li> 
                            <span>4.5</span>
                              <Image src={seven} className='img-fluid' alt='one' /> 
                            <Image src={notice} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li> 
                            <span>4.5</span>
                              <Image src={eight} className='img-fluid' alt='one' />
                            <Image src={rented} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div> </li>
                            <li> 
                            <span>4.5</span>
                              <Image src={one} className='img-fluid' alt='one' /> 
                            <Image src={listed} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li> 
                            <span>4.5</span>
                              <Image src={two} className='img-fluid' alt='one' />
                            <Image src={rented} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div> </li>
                            <li> 
                            <span>4.5</span>
                              <Image src={three} className='img-fluid' alt='one' /> 
                            <Image src={notice} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div></li>
                            <li> 
                            <span>4.5</span>
                              <Image src={four} className='img-fluid' alt='one' />
                            <Image src={listed} className='bgBanner' alt='bg' />

                            <div className='row'>
                                <div className='col-8'>
                                <h6 >West Patel Nagar, New Delhi</h6>
                                <p>Connaught Place, New Delhi</p>
                                <p>Wifi / AC/</p>
                                </div>
                                <div className='col-4'>
                                  <h5 className='text-end'>$250</h5>
                                </div>
                            </div> </li>
                           
                        </ul>
                    </div>

                </div>

            </div>

        </div>
        
    </div>

    
  );
};

export default MyProperty;
