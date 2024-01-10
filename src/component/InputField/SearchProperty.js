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
import heart from '../../../public/assets/my-property/heart.svg'
import notice from '../../../public/assets/my-property/notice.svg'
import rented from '../../../public/assets/my-property/rented.svg'
import map from '../../../public/assets/my-property/map.svg'
import search from '../../../public/assets/my-property/search.svg'
import insured from '../../../public/assets/my-property/health-insurance.svg'

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

const SearchProperty = () => {
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

      const onRouteChange = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/previewProperty');
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
                    <h4>Search Property</h4>
                    <div className='row justify-content-between'>
                    <div className='col-6 col-md-3 position-relative'>
                    <FontAwesomeIcon icon={faArrowLeft} className='srchLeft'/>
                    <Form.Control type="text" placeholder="Search" className='srchInpt' />
                    <Image src={search} alt='srch' className='position-absolute srchIcon'/>
                    </div>
                    
                    <div className='col-6 col-md-3 text-end'>
                      {/* <Link href={'/listProperty'}> */}
                      <button className='addPropBtn' type='button'>
                        <Image src={map} alt='map' className='me-2' />
                        Map View
                        </button>
                      {/* </Link> */}
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className='col-12 mrg-13em'>
                    
                    <div className='container'>
                    
                        <ul className='property-list p-0'>
                        
                            <li > 
                              <span>4.5</span>
                              <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={one} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>
                              
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

                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button' onClick={onRouteChange}>
                                View Details
                                </button>
                                </div>
                            </div>
                             
                            
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={two} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={three} className='img-fluid' alt='one' /> 
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={four} className='img-fluid' alt='one' /> 
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li>
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                               <Image src={five} className='img-fluid' alt='one' /> 
                               <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={six} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={seven} className='img-fluid' alt='one' /> 
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={eight} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                             </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={one} className='img-fluid' alt='one' /> 
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>
                              <Image src={two} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>

                              <Image src={three} className='img-fluid' alt='one' /> 
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                            <li> 
                            <span>4.5</span>
                            <span className='insuredBtn'> <Image src={insured} className='img-fluid' alt='one' /> Insured</span>

                              <Image src={four} className='img-fluid' alt='one' />
                              <div className='favBtn'>
                              <Image src={heart}  alt='bg' />
                              </div>

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
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                
                                <p className='blue-clr'> <strong>(Available in 2 month)</strong> </p>
                                </div>
                                <div className='col-5'>
                                <button className='black-btn' type='button'>
                                View Details
                                </button>
                                </div>
                            </div>
                            </li>
                           
                        </ul>
                    </div>

                </div>

            </div>

        </div>
        
    </div>

    
  );
};

export default SearchProperty;
