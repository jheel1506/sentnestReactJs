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

import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import washDish from '../../../public/assets/my-property/13-smoking.svg';
import ac from '../../../public/assets/my-property/no-pets-allowed.svg';
import deleteIcon from '../../../public/assets/delete-icon.svg';
import rightIcon from '../../../public/assets/my-property/right-icon.svg';
import bed from '../../../public/assets/my-property/prop-detail-bed.png';
import build from '../../../public/assets/my-property/3d-electric-car-building@2x.png';
import side1 from '../../../public/assets/my-property/beautiful-shot-modern-house-kitchen.png';
import propMap from '../../../public/assets/my-property/prop-map.png';
import host from '../../../public/assets/my-property/prev-host.png';
import ac1 from '../../../public/assets/my-property/ac.svg';
import water from '../../../public/assets/my-property/24_7_water.svg';
import Refrigerator from '../../../public/assets/my-property/Refrigerator.svg';
import WasherWashingMachine from '../../../public/assets/my-property/WasherWashingMachine.svg';
import DishWasher from '../../../public/assets/my-property/Dish_Washer.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link'
import uploadIcon from '../../../public/assets/upload-icon.svg'

import OtpInput from 'react-otp-input';


import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const PreviewProperty = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const [showUti, setShowUti] = useState(false);
    const [showInp, setShowInp] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleShowUti = () => setShowUti(true);
   
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
      const handleSelect = async (data) =>{
        
        if(data.target.value == '3'){
          setShowInp(true)
        }else{
          setShowInp(false)
        }
      }
      const renderButton = () => {
        return  <button className='resendBtn'> Resend the code</button>;
      };
      const renderTime = (remainingTime) => {
        return <span>{remainingTime} sec</span>;
      };

  

  return (
    <div className='container-fluid p-0 mrgTop-8 '>
       <div className='topsectionProp'>
        <button type='button' className={"addProp " + styles.iconBtn} onClick={goBack}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
       
        </div>
        <div className='container hght-85'>
            <div className='row '>
                <div className='col-12 col-md-12 mb-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3 wd-100'>
        <div className='row'>
            <div className='col-6'>
            <h5 className='mb-0'>4 BHK Independent House</h5>
        <p className='mb-4 branding'>2 bedroom . 1 bathroom . 900 Sq ft</p>
            </div>
            <div className='col-6 text-right'>
            <p className='mb-0 branding'>Last updated: May 22, 2023</p>
            <h5 className='mb-0'>₹ 10,000</h5>
            <p className='mb-4 branding'>per month</p>
            </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-7'>
        
        <Image src={build} alt='washdish' className='img-fluid pre-main' />

         </div>
         <div className='col-12 col-md-5 preview-side'>
                <span>
                <Image src={side1} alt='washdish' className='img-fluid' />
                </span>
                <span className='lst-prvw'>
                <Image src={side1} alt='washdish' className='img-fluid ' />
                    <span className='overLay'>
                   
                    </span>
                <button className='btn shwAll' type='button'>Show All</button>
                </span>
        </div>
        </div>
        <div className='row mt-4'>
        <div className='col-12 col-md-7'>
        <div className='col-12 prop-avail-date'>
          
            <span>Property available date</span>
            <span>12 April 2023</span>
        </div>
        <p className='mb-0 branding'>Property Location</p>
        <h5 className='mb-4'>West Patel Nagar, Delhi</h5>
        <Image src={propMap} alt='washdish' className='img-fluid' />

         </div>
         <div className='col-12 col-md-5 '>
         <div className='hosted'>
         <div className='row'>
                    <div className='col-12'>
                    <h5 className='mb-3'>Hosted By</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                    <Image src={host} alt='washdish' className='img-fluid' />
                    </div>
                    <div className='col-8'>
                    <h5 className='mb-0'>Sunny Kashyap</h5>
                    <h5 className='mb-3'>+91 23....</h5>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                    <button type="button" className='addreSIgn signup-btn ' >Get Contact Details</button>
                    </div>
                </div>
            </div>
                
        </div>
        </div>
         <div className='col-12 col-md-7 prop-detail1'>
        <p ><small><strong>Utility</strong></small></p>
        <ul className='img-grid-prop1'>
          <li>
           <span className='imgbg'><Image src={ac1} alt='washdish' className='img-fluid' /></span> <span className='imgtitle'>AC</span></li>
          <li><span className='imgbg'><Image src={water} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>Water Supply</span></li>
          <li><span className='imgbg'><Image src={WasherWashingMachine} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>Washing Machine</span></li>
          <li><span className='imgbg'><Image src={Refrigerator} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>Fridge</span></li>
          <li><span className='imgbg'><Image src={DishWasher} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>Dish Washer</span></li>
          <li><span className='imgbg'><Image src={ac1} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>AC</span></li>
          <li><span className='imgbg'><Image src={water} alt='washdish' className='img-fluid' /></span><span className='imgtitle'>Water Supply</span></li>
         

        </ul>
        
       
        <span className='propRight-icon'>
                    <span className='txt-clr'>View all</span>
        </span>

         </div>
         <div className='col-12 col-md-7 prop-detail1'>
        <p ><small><strong>Description</strong></small></p>
        <p className='txt-clr-grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk</p>
         </div>
         
        <div className='col-12 col-md-7  mt-3 prop-detail'>
            <small><strong>Term of the Places</strong></small>
            <ul className='p-0 mt-3'>
              <li className='tnc-list'>
              <span >
                    <Image src={washDish} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>No Smoking</strong></small></p>
                 
                
                
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                
              </li>
              <li className='tnc-list'>
              <span >
                    <Image src={ac} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>No Pets</strong></small></p>
                
                
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                
              </li>
            </ul>
            
        </div>
        
        
        
        
      <div className='footer'>
        
        <div className='container'>
            <Link href={'/verifyPublish'}>
            <button type="button" className='addreSIgn signup-btn btn-width' onClick={handleShowUti} >Publish</button>
            </Link>
            </div>
        
      
      </div>
        
      </form>
                </div>
                

            </div>

        </div>
        
      <Offcanvas show={show} onHide={handleClose} placement={'end'} backdrop={false}>
        <Offcanvas.Header closeButton className='addPropModal'>
          <Offcanvas.Title >Create Terms & Conditions
            
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          <div className='row mb-3'>
                <div className='col-3'>
                <span className='img-hold'>
                    <Image src={washDish} alt='washdish' className='img-fluid' />
                </span>
                </div>
                <div className='col-9'>
                <FloatingLabel controlId="floatingSelect" label="Select Terms" >
                    <Form.Select aria-label="Select Terms" onChange={handleSelect}>
                      <option value="1">No Smoking</option>
                      <option value="2">No Pets</option>
                      <option value="3">Other</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                </div>
          </div>
          {
            showInp && 
            <div className='row mb-3'>
                <div className='col-12'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Term's Name"
                    
                  >
                    <Form.Control type="text" />
                  </FloatingLabel>
                </div>
           </div>
          }
           

          
           <div className='row mb-3'>
                <div className='col-12'>
                <Form.Control as="textarea" rows={4} placeholder='Add Descriptions'/>
                </div>
           </div>

           
                    
                  
                  
                 
          <div className='mod-btm'>
          <button type="button" className='addreSIgn signup-btn'  >Create</button>
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
    
  );
};

export default PreviewProperty;
