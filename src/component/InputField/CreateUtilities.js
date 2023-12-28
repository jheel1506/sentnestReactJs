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
import washDish from '../../../public/assets/my-property/washing-dishes.svg';
import ac from '../../../public/assets/my-property/air-conditioner.svg';
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

const CreateUtilities = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const [showUti, setShowUti] = useState(false);
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
                    <h5 className='mb-4'>Create Utilities</h5>
                    
        <div className='col-12'>

            <button type="button" className=' createuti' onClick={handleShow} > <Image src={plusCatg} alt='add' className='plus-uti img-fluid' /> 
           {!showUti &&
           <span>Add Utility</span> }
           {showUti &&
           <span>Create Utility</span> }
            </button>

         </div>
         {
          !showUti &&
        <div className='col-12 mt-3'>
            <small><strong>Utility List</strong></small>
            <div className='text-center mt-3 mb-3 no-list-uti'>
            <Image src={noutil} alt='add' className='img-fluid' />
            <p>You have created no utilities</p>
            </div>
        </div>
         }
         {
          showUti &&
        <div className='col-12 mt-3'>
            <small><strong>Utility List</strong></small>
            <ul className='p-0 mt-3'>
              <li className='util-list'>
              <span className='img-holdUti'>
                    <Image src={washDish} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>Dish Washer</strong></small></p>
                
                <span className='branding'>Brand: Prestige</span>
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                <span><Image src={deleteIcon} alt='deleteIcon' className='img-fluid' /></span>
              </li>
              <li className='util-list'>
              <span className='img-holdUti'>
                    <Image src={ac} alt='washdish' className='img-fluid' />
                </span>
                <span>
                  <p className='mb-0'><small><strong>Air Conditioner</strong></small></p>
                
                <span className='branding'>Brand: Prestige</span>
                <p className='mb-0 para'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                
                </span>
                <span><Image src={deleteIcon} alt='deleteIcon' className='img-fluid' /></span>
              </li>
            </ul>
        </div>
         }
        
        
        
      <div className='row btm-row'>
        
        <div className='col-6 col-md-3'>
        
            <button type="button" className='skip-btn' onClick={(e) => setshowOTP(true)} >Save & Exit</button>
            
            </div>
        
        
        <div className='col-6 col-md-3'>
        {
          !showUti &&
            <button type="button" className='addreSIgn signup-btn' onClick={handleShowUti} >Next</button>
        }
         {
          showUti &&
          <Link href="/termsCondition">
            <button type="button" className='addreSIgn signup-btn'  >Next</button>
            </Link>
        }
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
          <Offcanvas.Title >Create Utility
            
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
                <FloatingLabel controlId="floatingSelect" label="Select Category" >
                    <Form.Select aria-label="Select Category">
                      <option >Living Room</option>
                      <option value="1">Kitchen</option>
                      <option value="2">Terrace</option>
                      <option value="3">Other</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                </div>
          </div>
          
           <div className='row mb-3'>
                <div className='col-12'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Location"
                    
                  >
                    <Form.Control type="text" />
                  </FloatingLabel>
                </div>
           </div>

           <div className='row mb-3'>
                <div className='col-12'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Brand"
                    
                  >
                    <Form.Control type="text" />
                  </FloatingLabel>
                </div>
           </div>
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

export default CreateUtilities;
