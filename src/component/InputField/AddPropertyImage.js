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
import plusCatg from '../../../public/assets/my-property/plus-categ.svg';
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

const AddPropertyImage = ({ name, ...props }) => {
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
    <div className='container-fluid p-0 mrgTop-8 '>
       <div className='topsectionProp'>
        <button type='button' className={"addProp " + styles.iconBtn} onClick={goBack}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
       
        </div>
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-md-8'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3 wd-100'>
                    <h5 className='mb-4'>Add Property <br></br> Images</h5>
                    <small><strong>Banner Image</strong></small><br></br>
                    <small>This image will be used as the first image on the listing</small>
        <div>

        <Form.Group controlId="formFile" className="mb-3 addPropImageDiv">
        <Form.Label className='upload-file-btn' > <Image src={uploadBtnIcon} alt='upload' className='img-fluid' /> Choose file here</Form.Label>
        <Form.Control  type="file" hidden/>
        <p className='mb-0'> (Max file size: 2mb)</p>

      </Form.Group>
      <small><strong>Property Images</strong></small><br></br>
                    <small>This image will be used as the first image on the listing</small>
      
     <div>
     <ul className='add-property-Image p-0'>
        <li onClick={handleShow}> <Image src={plusCatg} alt='add' className='img-fluid' /> <p>Add Category</p> </li>
        {/* <li></li>
        <li></li>
        <li></li> */}
        </ul>
     </div>
      
      </div>
        
        
      <div className='row'>
        
        <div className='col-4'>
        
            <button type="button" className='skip-btn'  >Save & Exit</button>
            
            </div>
        
        
        <div className='col-3'>
        <Link href="/createUtility">
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
          <Offcanvas.Title >Add Category
            
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
           <FloatingLabel controlId="floatingSelect" label="Select Category" className='mb-3'>
                    <Form.Select aria-label="Select Category">
                      <option >Living Room</option>
                      <option value="1">Kitchen</option>
                      <option value="2">Terrace</option>
                      <option value="3">Other</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Add New Category"
                    className='mb-3'
                  >
                    <Form.Control type="text" />
                  </FloatingLabel>
                  <small><strong>Bar Images</strong></small>
                  <Form.Group controlId="formFile" className="mb-3 upload-fle-div">
        <p className='mb-0'> <Image src={uploadIcon} alt='upload' className='img-fluid' /> Browse Images</p>
        <Form.Label className='upload-fle' >Upload</Form.Label>
        <Form.Control  type="file" hidden/>
      </Form.Group>
      <hr></hr>
          <div className='mod-btm'>
          <button type="button" className='addreSIgn signup-btn'  >Add</button>
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
    
  );
};

export default AddPropertyImage;
