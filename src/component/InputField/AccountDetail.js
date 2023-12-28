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
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import crslimg from '../../../public/assets/addPropCrsl.png';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';
import * as yup from 'yup';
import Link from 'next/link';
import  minus from '../../../public/assets/my-property/minus.svg';
import  plus from '../../../public/assets/my-property/plus.svg';
import  card from '../../../public/assets/my-property/credit-card.svg';
import  accFin1 from '../../../public/assets/my-property/accFin1.png';
import  accFin2 from '../../../public/assets/my-property/accFin2.png';
import  blackPen from '../../../public/assets/my-property/blackPen.png';
import  redpen from '../../../public/assets/my-property/profileeditred.png';
import  profilePic from '../../../public/assets/my-property/profilePic.png';
import rightIcon from '../../../public/assets/my-property/right-icon.svg';
import checked from '../../../public/assets/my-property/checked.svg';

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Offcanvas from 'react-bootstrap/Offcanvas';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const AccountDetail = () => {
    const [progress, setProgress] = useState(0);
    const [bedroom, setBedrrom] = useState(0);
    const [bathroom, setBathroom] = useState(0);
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showNew, setShowNew] = useState(false);
    const handleCloseNew = () => setShowNew(false);
const handleShowNew = () => setShowNew(true);
    // const handleChange = (otp) => {
    //   setOTP(otp);
    // };
    const formattedDate = format(value, 'dd MMM yyyy');
    const steps = [
        'Property Details',
        'Address',
        'Rent & Deposit Details',
      ];
    const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    bedroom: ''
  });
  const [text, setText] = useState('');
  const [key, setKey] = useState('home');
  const maxWords = 100;


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

      const [activeStep, setActiveStep] = React.useState(0);
      const [completed, setCompleted] = React.useState({});
     
    
      const totalSteps = () => {
        return steps.length;
      };
    
      const completedSteps = () => {
        return Object.keys(completed).length;
      };
    
      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };
    
      const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
      };
    
     
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStep = (step) => () => {
        setActiveStep(step);
      };
    
      const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      };
    
      const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleTextChange = (event) => {
        const inputText = event.target.value;
        const words = inputText.trim().split(/\s+/);
        const wordCount = words.length;
    
        if (wordCount <= maxWords) {
          setText(inputText);
        }
      };

      const incrementValue = () => {
        setBedrrom(bedroom + 1);
      };

      const decrementValue = () => {
        if (bedroom > 0) {
          setBedrrom(bedroom - 1)
        }
      };

      const incrementBthValue = () => {
        setBathroom(bathroom + 1);
      };

      const decrementBthValue = () => {
        if (bathroom > 0) {
          setBathroom(bathroom - 1)
        }
      };

      const stepContent = (step) => {
        switch (step) {
          case 0:
            return (
              <div className='row mt-3'>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingPassword" label="Property Name">
                 <Form.Control type="text" placeholder="Property Name"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId='floatingSelec' label="Property Type">
                <Form.Select aria-label="Floating label select example">
                        <option disabled>Select</option>
                        <option value="1">Listed</option>
                        <option value="2">Rented</option>
                        <option value="3">Archive</option>
                        <option value="4">Draft</option>
                </Form.Select>
                </FloatingLabel>

                
                </div>
                <div className='col-12 mb-3' >
                <InputGroup className='listPropertyInputGrp'>
                
                    <Form.Control
                    placeholder="Select no. of bedrooms"
                    aria-label="Select no. of bedrooms"
                    disabled
                    className='listPropertyInput'
                    onChange={handleChange}
                    />
                    
                        <Image src={minus} alt='minus' onClick={decrementValue} />
                    
                    {bedroom}
                    
                    <Image src={plus} alt='plus' onClick={incrementValue}  />
                </InputGroup>
                </div>

                <div className='col-12 mb-3' >
                <InputGroup className='listPropertyInputGrp'>
                
                    <Form.Control
                    placeholder="Select no. of bathrooms"
                    aria-label="Select no. of bathrooms"
                    disabled
                    className='listPropertyInput'
                    onChange={handleChange}
                    />
                    
                        <Image src={minus} alt='minus' onClick={decrementBthValue} />
                    
                    {bathroom}
                    
                    <Image src={plus} alt='plus' onClick={incrementBthValue}  />
                </InputGroup>
                </div>

                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingBath" label="Property Area (in Sq ft)">
                 <Form.Control type="text" placeholder="Property Area (in Sq ft)"  onChange={handleChange}/>
                </FloatingLabel>
                </div>

                <div className='col-12 mb-3'>
                
                <Form.Control as="textarea" aria-label="With textarea" placeholder='Add Description' value={text} maxLength={100} onChange={handleTextChange} />
                
                <div className='text-end'>
                {text.trim() === '' ? 0 : text.length}
                {maxWords > 0 && ` / ${maxWords}`}
                </div>
                
                </div>
                    
              </div>
              
            );
          case 1:
            return (
                <div className='row mt-3'>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingPincode" label="Pincode">
                 <Form.Control type="text" placeholder="Pincode"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingFlat" label="Flat, House No., Building, Company, Apartment">
                 <Form.Control type="text" placeholder="Flat, House No., Building, Company, Apartment"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingArea" label="Area, Street, Sector, Village">
                 <Form.Control type="text" placeholder="Area, Street, Sector, Village"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingLandmark" label="Landmark">
                 <Form.Control type="text" placeholder="Landmark"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingTown" label="Town/City">
                 <Form.Control type="text" placeholder="Town/City"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingState" label="State">
                 <Form.Control type="text" placeholder="State"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                </div>
            );
          case 2:
            return (
                <div className='row mt-3'>
                <h6>Monthly Charges</h6>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingRent" label="Monthly rent">
                 <Form.Control type="text" placeholder="Monthly rent"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingMaint" label="Monthly Maintenance Charge">
                 <Form.Control type="text" placeholder="Monthly Maintenance Charge"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <h6>One time refundable charges</h6>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingSecurity" label="Security Deposit">
                 <Form.Control type="text" placeholder="Security Deposit"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <h6>One time non refundable charges</h6>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingCleaning" label="Cleaning Charges">
                 <Form.Control type="text" placeholder="Cleaning Charges"  onChange={handleChange}/>
                </FloatingLabel>
                </div>
                <h6>Property available by</h6>
                <div className='col-12 mb-3 dateCss'>
                <label>Moving In Date</label>
                 {/* <Form.Control type="text" placeholder="Moving In Date"  onChange={onChange} value={value}/> */}
                 <DatePicker onChange={onChange} value={value} format="d MMM yyyy" />
                
                </div>
                <div className='col-12 mb-3'>
                
                <Form.Check
            label={  <span >Have You Insured Your Property? </span>}
            name="group1"
            type="checkbox"
          />
                </div>
                
                </div>
            );
          default:
            return '';
        }
      };

  return (
    <div className='container-fluid p-0 mrgTop-8'>
     
     <div className='topsectionProp'>
        <button type='button' className={"addProp " + styles.iconBtn} onClick={goBack}>
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
       
        </div>
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-md-12 listPropdPadd left-padding'>
                <Card className='wd-100 mb-5 accCard'>
                <Card.Header as="h5" className='p-4'>Account Detail</Card.Header>
                    
                    <Card.Body>
                    <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                       
                        <div className='row justify-content-center position-relative'>
                            <div className='col-12 accDetail' >
                        
                            <Tabs
                            transition={false}
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            justify
                            >
                            <Tab eventKey="home" title="Profile Information">
                                <div className='row p-4'>
                                  <div className='col-4'>
                                    <div className='position-relative d-block text-center'>
                                      <Image src={profilePic} alt='profile' className='img-fluid' />
                                      <span className='profilePicEdit'>
                                      <Image src={redpen} alt='profile' className='img-fluid' />
                                      </span>
                                      <p className='mt-4 mb-1'><strong>Sumit Gupta</strong></p>
                                      <p>+91 888 666 5656</p>
                                    </div>
                                  </div>
                                  <div className='col-6 personalForm'>
                                  <div className='row mb-3'>
                                    <div className='col-6'>
                                    <FloatingLabel controlId="floatingPassword" label="First Name">
                                      <Form.Control type="text"  />
                                      </FloatingLabel>
                                    </div>
                                    <div className='col-6'>
                                    <FloatingLabel controlId="floatingPassword" label="Last Name">
                                          <Form.Control type="text" />
                                    </FloatingLabel>
                                    </div>
                                  </div>
                                  <div className='row mb-3'>
                                    <div className='col-12'>
                                    <FloatingLabel controlId="floatingPassword" label="Phone no.">
                                      <Form.Control type="text"  />
                                      </FloatingLabel>
                                    </div>
                                    
                                  </div>
                                  <div className='row mb-3'>
                                    <div className='col-12'>
                                    <FloatingLabel controlId="floatingPassword" label="Email Address">
                                      <Form.Control type="text"  />
                                      </FloatingLabel>
                                    </div>
                                    
                                  </div>
                                  <div className='row mb-3'>
                                    <div className='col-12 position-relative'>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                      <Form.Control type="password"  />
                                      </FloatingLabel>
                                      <span className='editPswd'>
                                        <Image src={blackPen} alt='edit' className='img-fluid' />
                                      </span>
                                    </div>
                                    
                                  </div>
                                  <div className='row mb-3'>
                                    <div className='col-12  position-relative'>
                                    <FloatingLabel controlId="floatingPassword" label="Adharcard">
                                      <Form.Control type="text"  />
                                      </FloatingLabel>
                                      <span className='editPswd'>Verified</span>
                                    </div>
                                    
                                  </div>
                                  </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="address">
                            <div className='row'>
              <div className='col-12 col-md-6'>
              <div className='row'>
            <div className='mb-3 col-12'>
                <p className={styles.addresp}>
                   <span>Home </span>  Address
                </p>
            </div>
            </div>
                <div className='row mt-5'>
                  <div className='col-12'>
                  <FloatingLabel controlId="floatingPassword" label="Pincode">
                    <Form.Control type="text" placeholder="Pincode"/>
                    </FloatingLabel>
                  </div>
                  
                </div>
                <div className='row mt-4'>
                  
                  <div className='col-12'>
                  <FloatingLabel controlId="floatingPassword" label="Flat, House No., Building, Company, Apartment">
                    <Form.Control type="text" placeholder="Flat, House No., Building, Company, Apartment" />
                    </ FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Area, Street, Sector, Village">
                    <Form.Control type="text" placeholder="Area, Street, Sector, Village" {...register('password')}/>
                    </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Landmark">
                        <Form.Control type="text" placeholder="Landmark" {...register('password')}/>
                </FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Town/City">
                        <Form.Control type="text" placeholder="Town/City" {...register('password')}/>
                    </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="State">
                     <Form.Control type="text" placeholder="State" {...register('password')}/>
                     </FloatingLabel>
                  </div>
                  
                </div>
              </div>
              <div className='col-12 col-md-6'>
              <div className='row'>
            <div className='mb-3 col-12'>
                <p className={styles.addresp}>
                   <span>Billing </span>  Address
                </p>
                <Form.Check
            label={  <span >as same home address </span>}
            name="group1"
            type="checkbox"
            defaultChecked
            
          />
                </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-12'>
                  <FloatingLabel controlId="floatingPassword" label="Pincode">
                    <Form.Control type="text" placeholder="Pincode"/>
                    </FloatingLabel>
                  </div>
                  
                </div>
                <div className='row mt-4'>
                  
                  <div className='col-12'>
                  <FloatingLabel controlId="floatingPassword" label="Flat, House No., Building, Company, Apartment">
                    <Form.Control type="text" placeholder="Flat, House No., Building, Company, Apartment" />
                </FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Area, Street, Sector, Village">
                    <Form.Control type="text" placeholder="Area, Street, Sector, Village" {...register('password')}/>
                    </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Landmark">
                        <Form.Control type="text" placeholder="Landmark" {...register('password')}/>
                </FloatingLabel>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="Town/City">
                        <Form.Control type="text" placeholder="Town/City" {...register('password')}/>
                    </FloatingLabel>
                  </div>
                  <div className='col-6'>
                  <FloatingLabel controlId="floatingPassword" label="State">
                     <Form.Control type="text" placeholder="State" {...register('password')}/>
                     </FloatingLabel>
                  </div>
                  
                </div>
              </div>
          </div>
                            </Tab>
                            <Tab eventKey="contact" title="Documents" >
                                Tab content for Contact
                            </Tab>
                            <Tab eventKey="financial" title="Financial Details" >
                                <div className='row accFinac'>
                                    <div className='col p-4 position-relative'>
                                        <Image src={card} alt='card' className='img-fluid mb-3 imgWidth' />
                                        <p><strong>Payment Methods</strong></p>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        <span className='propRight-icon'>
                                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                                        </span>
                                    </div>
                                    <div className='col p-4 position-relative'>
                                        <Image src={accFin1} alt='card' className='img-fluid mb-1 imgWidth' />
                                        <p><strong>Rent Transaction History</strong></p>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        <span className='propRight-icon'>
                                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                                        </span>
                                    </div>
                                    <div className='col p-4 position-relative'>
                                        <Image src={accFin2} alt='card' className='img-fluid mb-1 imgWidth' />
                                        <p><strong>Subscription History</strong></p>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        <span className='propRight-icon'>
                                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                                        </span>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="current" title="Current Plan" >
                                <Card className='listMain mb-4'>
                                <Card.Header  >
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Basic</small></strong>
                                      <span className='stsSpan'>Active</span> </p>
                                      <p className='mb-0'><strong>₹100 </strong></p>
                                    </div>
                                    <div className='col-2'>
                                    <button type='button' className=' signup-btn mt-0' onClick={handleShow}>
                                          Customize
                                    </button>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Header > <small> <strong>Next Billing Cycle: Aug 22, 2021</strong> </small></Card.Header>
                                <Card.Body className='listing'>
                                      <p><strong>Plan feature Details Summary</strong></p>
                                      <ul className='p-0'>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  List 2 Places</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Get interaction <br></br> account</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  All contract <br></br> documents generated</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  E Signing Tools</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Long Feature Five</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Feature Six</li>
                                      </ul>
                                      <p><strong>Advantages</strong></p>
                                      <ul className='p-0'>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  City Rules Guidance</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' /> Verified Profile</li>
                                      </ul>
                                </Card.Body>
                                
                                </Card>
                                <Card className='listMain'>
                                <Card.Header  >
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Basic</small></strong>
                                       </p>
                                      <p className='mb-0'><strong>₹100 </strong></p>
                                    </div>
                                    <div className='col-2'>
                                    <button type='button' className=' signup-btn mt-0'>
                                          Apply
                                    </button>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Header > <small> <strong>Next Billing Cycle: Aug 22, 2021</strong> </small></Card.Header>
                                <Card.Body className='listing'>
                                      <p><strong>Plan feature Details Summary</strong></p>
                                      <ul className='p-0'>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  List 2 Places</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Get interaction <br></br> account</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  All contract <br></br> documents generated</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  E Signing Tools</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Long Feature Five</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  Feature Six</li>
                                      </ul>
                                      <p><strong>Advantages</strong></p>
                                      <ul className='p-0'>
                                        <li><Image src={checked} className='img-fluid' alt='checked' />  City Rules Guidance</li>
                                        <li><Image src={checked} className='img-fluid' alt='checked' /> Verified Profile</li>
                                      </ul>
                                </Card.Body>
                                
                                </Card>
                            </Tab>
                            </Tabs>
                        
                           
     
      
     
    
                            </div>
                        </div>
                    </form>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <div className='addpropDiv'>
                <div className='col-5 accDetailFoot'>
                <Link href={'/bookingRequest'}>
                    <button type='button' className=' signup-btn' >
                Update
                </button>
                </Link>
              <button type="button" className='skip-btn' >
                Cancel
              </button>
              
                </div>
                <div className='col-7'>
              
              </div>
            </div>
                    </Card.Footer>
                </Card>
                
                </div>
                <div className='col-6 right-padding mob-hide'>
                
                </div>

            </div>

        </div>
        <Offcanvas show={show} onHide={handleClose} placement={'end'} backdrop={false}>
        <Offcanvas.Header closeButton className='addPropModal'>
          <Offcanvas.Title >
          {
              !showNew &&  
           <p>Customize Plan</p> 
          }
          {
              showNew &&  
           <p>Payment Summary</p> 
          }
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          {
            !showNew &&
            <div className='row mb-3'>
                <div className='col-12'>
                <InputGroup className='listPropertyInputGrp2'>
                
                    <Form.Control
                    placeholder="Add Property"
                    aria-label="Add Property"
                    disabled
                    className='listPropertyInput'
                    onChange={handleChange}
                    />
                    
                        <Image src={minus} alt='minus' onClick={decrementValue} />
                    
                    {bedroom}
                    
                    <Image src={plus} alt='plus' onClick={incrementValue}  />
                </InputGroup>
                </div>
                {/* <div className='col-9'>
                <FloatingLabel controlId="floatingSelect" label="Select Category" >
                    <Form.Select aria-label="Select Category">
                      <option >Living Room</option>
                      <option value="1">Kitchen</option>
                      <option value="2">Terrace</option>
                      <option value="3">Other</option>
                      
                    </Form.Select>
                  </FloatingLabel>
                </div> */}
          </div>
          }

          {
            showNew && 
            <div>
              <div className='row paySumm mb-4'>
                <div className='col-8'>
                  <p className='mb-0'><strong>Basic Plan</strong></p>
                  <p className='mb-0'>06 Feb 2023 - 06 Dec 2023</p>
                </div>
                <div className='col-4 d-flex align-items-end justify-content-end'> <strong>₹ 100</strong> </div>
              </div>
              <div className='row mb-4'>
                <div className='col-8'>
                  <p className='mb-0'>Tax (GST 18%)</p>
                  
                </div>
                <div className='col-4 d-flex align-items-end justify-content-end'> <strong>₹ 18</strong> </div>
              </div>
              <div className='row mb-4'>
                <div className='col-8'>
                  <p className='mb-0'>Enter Promo code</p>
                  
                </div>
                <div className='col-4'> 
                
                    <Form.Control type="text" />
                  
                </div>
              </div>
              <hr></hr>
              <div className='row mb-4'>
                <div className='col-8'>
                  <p className='mb-0'>Total Paid</p>
                  
                </div>
                <div className='col-4 d-flex align-items-end justify-content-end'> 
                
                <strong>₹ 118</strong>
                  
                </div>
              </div>
              <hr></hr>
            </div>
          }
          
          
           {/* <div className='row mb-3'>
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
           </div> */}

           
                    
                  
                  
                 
          <div className='mod-btm'>
            {
              !showNew &&  
          <button type="button" className='addreSIgn signup-btn' onClick={handleShowNew} >Submit</button>

          }
           {
              showNew &&  
          <button type="button" className='addreSIgn signup-btn'  >Continue</button>

          }
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
  );
};

export default AccountDetail;
