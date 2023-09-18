import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import  setnestlogo from '../public/assets/home_logo.png'
import srchIcon from '../public/assets/srchicon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import ReactSlider from 'react-slider'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [minValue, setMinValue] = useState(25);
const [maxValue, setMaxValue] = useState(75);

const handleChange = (event) => {
  setMinValue(event.target.value.split(',')[0]);
  setMaxValue(event.target.value.split(',')[1]);
};
  return (
    <>
      <div className={`${styles.main}`}>
        <button type='button' className={`${styles.iconBtn}`}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
        <div className='row'>
          <div className='col-12'>
            <div className='padding-3em'>
              <Image src={setnestlogo} alt='logo' className={'img-fluid ' + styles.logo}/>
              
            </div>
            <div>
              <div className={`${styles.search}`}>
                <input type='text' placeholder='Enter Neighbourhood or Post Code'/>
                {/* <FontAwesomeIcon icon={faSearch} className={`${styles.srchIcon}`} onClick={handleShow}/> */}
                <Image src={srchIcon} className={`${styles.srchIcon}`} alt='logo' onClick={handleShow} />
              </div>
              <div className={`${styles.btnsDiv}`}>
              {/* <Link href="/login"> */}
                <button type='button' className={`${styles.activeButton}`}>Login</button>
                {/* </Link> */}
              <Link href="/signup">
              <button type='button' className={`${styles.inactiveButton}`}>Sign Up</button>
                </Link>
              </div>
            
            </div>
          
          </div>
        </div>
      
      </div>

      <Modal
     size="xl"
        show={show}
        onHide={handleClose}     
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
          <button type='button' className='white-btn' onClick={handleClose}>Cancel</button>
          <button type='button' className="red-btn">Search</button>
        </Modal.Footer>

      </Modal>
     
    </>
  )
}
