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
import  right from '../../../public/assets/my-property/arrow-point-to-right.svg';
import  utility from '../../../public/assets/my-property/utility.svg';
import  tnc from '../../../public/assets/my-property/tnc.svg';
import  money from '../../../public/assets/my-property/money.svg';
import  leftangle from '../../../public/assets/my-property/left-angle-icon.svg';
import  sampleStamp from '../../../public/assets/my-property/sampleStamp.png';
import  redpen from '../../../public/assets/my-property/profileeditred.png';
import  profilePic from '../../../public/assets/my-property/profilePic.png';
import rightIcon from '../../../public/assets/my-property/right-icon.svg';
import pdf from '../../../public/assets/my-property/pdf.svg';
import download from '../../../public/assets/my-property/download.svg';

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const ContractDetails = () => {
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
const [showNewCan, setShowNewCan] = useState(false);
    const handleCloseNewCan = () => setShowNewCan(false);
const handleShowNewCan = () => setShowNewCan(true);
const [showApp, setShowApp] = useState(false);
const handleShowApp = () => setShowApp(true);
const handleHideApp = () => setShowApp(false);
const [showEdit, setShowEdit] = useState(false);
const handleShowEdit = () => setShowEdit(true);
const [valueT, onChangeT] = useState('10:00');
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
      const onRouteChange = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/contractPayment');
      };
      const moveFinance = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/financialInformation');
      };
      const moveUtility = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/createUtility');
      };

      const moveTnc = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/termsCondition');
      };
      const moveAvailability = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/availability');
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
                <Card.Header as="h5" className='p-4 bg-white'>Contract</Card.Header>
                    
                    <Card.Body>
                    <form  className='mb-3'>
                       
                        <div className='row justify-content-center position-relative'>
                            <div className='col-3' >
                                <div className='borderTime p-4'>
                                <div className='position-relative d-block text-center p-4'>
                                      <Image src={profilePic} alt='profile' className='img-fluid contProf' />
                                      <span className='profilePicEdit2'>
                                      <Image src={redpen} alt='profile' className='img-fluid' />
                                      </span>
                                      
                                    </div>
                                <div>
                                <p className='mb-0 text-black-50'>Requester Name</p>
                                <p className='mb-3'>Rohan Shrivastav</p>
                                <p className='mb-0 text-black-50'>Requested Date</p>
                                <p className='mb-3'>06 JUL 2023</p>
                                <p className='mb-0 text-black-50'>Property Name</p>
                                <p className='mb-3'>Property 1</p>
                                <p className='mb-0 text-black-50'>Requested Date</p>
                                <p className='mb-3'>07 JUL 2023</p>
                                </div>
                                </div>
                            </div>
                            {
                                !showEdit &&
                                <div className='col-9 p-4 pt-0 pb-0' >
                            <div className='row p-2 borderTime'>
                                <div className='col-12  contrDiv'>
                                <div className='row '>
                                    <div className='col-6 d-flex gap-3'>
                                        <Image src={pdf} className='img-fluid' alt='pdf' />
                                        <span>
                                        <p className='mb-0'><strong>Contract PDF</strong></p>
                                        <small><p><strong>April 23, 2021</strong></p></small>
                                        </span>
                                        
                                    </div>
                                    <div className='col-6 text-end'>
                                    <Image src={download} className='img-fluid' alt='pdf' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p className='mb-0 fnt-13'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des
                                        </p>
                                    </div>

                                </div>
                                </div>
                                
                            </div>
                            <div className='row pt-3 pb-3'>
                            <div className='col-12 d-flex gap-3 align-items-center' >
                            <button type='button' className=' contract-btn rounded-pill' onClick={handleShow}>Cancel Request</button>
                            <button type='button' className=' contract-btn rounded-pill' onClick={handleShowEdit}>Edit Contract</button>
                            <button type='button' className=' contract-btn rounded-pill' onClick={handleShowNew}>Send Draft To Review</button>
                            <button type='button' className=' contract-red-btn rounded-pill' onClick={handleShowNewCan}>Ready For Signature</button>
                            </div>
                            </div>
                            </div>
                            }
                            {
                                showEdit && <div className='col-9 p-4 pt-0 pb-0' >
                                
                                <div className='row pt-3 pb-3'>
                                <div className='col-12'>
                                    <h6>Contract Details</h6>
                                </div>
                                <div className='col-12 borderTime d-flex p-3 mb-3' onClick={moveFinance}>
                                    <span className='w-100 d-flex gap-2'>
                                        <Image src={money} className='img-fluid' alt='money' />
                                        <p className='mb-0'><strong>Financial Information & Date</strong></p>

                                    </span>
                                    <span>
                                    <Image src={right} className='img-fluid' alt='right' />
                                    </span>
                                </div>
                                <div className='col-12 borderTime d-flex p-3 mb-3' onClick={moveUtility}>
                                    
                                    <span className='w-100 d-flex gap-2'>
                                        <Image src={utility} className='img-fluid' alt='utility' />
                                        <p className='mb-0'><strong>Utilities</strong></p>

                                    </span>
                                    <span>
                                    <Image src={right} className='img-fluid' alt='right' />
                                    </span>
                                   
                                </div>
                                <div className='col-12 borderTime d-flex p-3 mb-3' onClick={moveTnc}>
                                    <span className='w-100 d-flex gap-2'>
                                        <Image src={tnc} className='img-fluid' alt='tnc' />
                                        <p className='mb-0'><strong>Term & Conditions</strong></p>

                                    </span>
                                    <span>
                                    <Image src={right} className='img-fluid' alt='right' />
                                    </span>
                                </div>
                                <div className='col-3 d-flex gap-3 align-items-center' >
                                <button type='button' className=' contract-red-btn rounded-pill' onClick={moveAvailability}>Preview Contract</button>
                                
                                </div>
                                </div>
                                </div>
                            }
                            
                            
                        </div>
                    </form>
                    </Card.Body>
                    
                </Card>
                
                </div>
                <div className='col-6 right-padding mob-hide'>
                
                </div>

            </div>

        </div>
      
      <Modal
        size='sm'
        show={show}
        onHide={handleClose}     
        keyboard={false} centered >
          <Modal.Header closeButton className='border-0 pb-0'>
          
        </Modal.Header>
        <Modal.Body className='text-center p-4 pt-0 pb-2'>
          <h5>Cancel Booking Request</h5>
          <p>Are you sure you want to Cancel Booking Request?</p>
          <div className='d-flex gap-3 mb-3 justify-content-around'>
          <button type="button" className='reject-btn rounded-pill' onClick={handleClose}>
                                      Yes
          </button>
          <button type='button' className=' accept-btn rounded-pill' onClick={handleClose}>
                                        No
          </button>
          </div>
          
        </Modal.Body>
        

      </Modal>
      <Modal
        size='sm'
        show={showNew}
        onHide={handleCloseNew}     
        keyboard={false} centered >
          <Modal.Header closeButton className='border-0 pb-0'>
          
        </Modal.Header>
        <Modal.Body className='text-center pt-0'>
          
          <p className='fnt-13'>Sent draft contract via email to both parties for review</p>
          
          
        </Modal.Body>
        

      </Modal>
      <Offcanvas show={showNewCan} onHide={handleCloseNewCan} placement={'end'} backdrop={false} >
        <Offcanvas.Header closeButton className='addPropModal'>
          <Offcanvas.Title >
           {
            !showApp &&
            <h5>Payment</h5>
           }
           {
            showApp &&
            <h5>Sample Stamp Paper</h5>
           }
            
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          { !showApp &&
            <div className='row mb-3'>
               
                <div className='col-12 payConDiv d-flex justify-content-between mb-3 p-3'>
                <p className='mb-0'><strong>Charges</strong></p>
                <p className='mb-0'><strong>₹ 800</strong></p>

                </div>
                <div className='col-12 serviceList'>
                
                <p ><strong>What Is Included In The Services</strong></p>
                <ul>
                    <li>A Rs 100 E- Stamp paper<br></br>
                    <button type="button" className='reject-btn rounded-pill w-50' onClick={handleShowApp}>
                    View sample
                    </button>
                    </li>
                    <li>The Contract document will be Notarized</li>
                    <li>It will be set up for Aadhaar-based digital signatures</li>
                    <li>Then a completely executed Contract document will be e-mailed to both parties and will be available in the app.</li>
                </ul>
                </div>
                
          
                
                
                <div className='col-12 text-center'>
                <p className='hyper-text mb-3 mt-4'>How Does This Flow Work</p>
                <button type="button" className='addreSIgn signup-btn' onClick={onRouteChange} >Stampaper Charge ₹800</button>
                <button type="button" className='addreSIgn skip-btn' onClick={handleShowApp} >Without Stamp Paper</button>
                </div>
          </div>
          }
          
          {
            showApp && 
            <div className='row '>
                                  
                                <div className='row'>
                                <div className='col-12 serviceList'>
                                <Image src={leftangle} className='img-fluid mb-3' alt='left' onClick={handleHideApp} />
                                
                                <Image src={sampleStamp} alt='sample' className='img-fluid' />
                                </div>
                                </div>

                                </div>
            
          }
           

          
           

           
                    
                  
                  
                 
          
        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
  );
};

export default ContractDetails;
