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
import uploadBtnIcon from '../../../public/assets/my-property/upload.svg';
import plusCatg from '../../../public/assets/my-property/plus-uti.svg';
import noutil from '../../../public/assets/my-property/no-utility.svg';
import washDish from '../../../public/assets/my-property/13-smoking.svg';
import ac from '../../../public/assets/my-property/no-pets-allowed.svg';
import deleteIcon from '../../../public/assets/delete-icon.svg';
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

const TermsCondition = ({ name, ...props }) => {
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
                <div className='col-12 col-md-8'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3 wd-100'>
                    <h5 className='mb-4'>Create Terms & Conditions</h5>
                    
        <div className='col-12'>

            <button type="button" className=' createuti' onClick={handleShow} > <Image src={plusCatg} alt='add' className='plus-uti img-fluid' /> 
           
           <span>Add Term & Conditions</span> 
           
            </button>

         </div>
        
         
        <div className='col-12 mt-3'>
            <small><strong>Term & Conditions List</strong></small>
            <ul className='p-0 mt-3'>
              <li className='tnc-list'>
              <span >
                    <Image src={washDish} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>No Smoking</strong></small></p>
                
                
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                <span><Image src={deleteIcon} alt='deleteIcon' className='img-fluid' /></span>
              </li>
              <li className='tnc-list'>
              <span >
                    <Image src={ac} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>No Pets</strong></small></p>
                
                
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                <span><Image src={deleteIcon} alt='deleteIcon' className='img-fluid' /></span>
              </li>
            </ul>
        </div>
         
        
        
        
      <div className='row btm-row'>
        
        <div className='col-6 col-md-3'>
        
            <button type="button" className='skip-btn' onClick={(e) => setshowOTP(true)} >Save & Exit</button>
            
            </div>
        
        
        <div className='col-6 col-md-3'>
        <Link href="/propertyDetails">
            <button type="button" className='addreSIgn signup-btn' >Next</button>
            </Link>
            </div>
        
      
      </div>
        
      </form>
                </div>
                <div className='col-3 right-padding mob-hide'>
               
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

export default TermsCondition;
