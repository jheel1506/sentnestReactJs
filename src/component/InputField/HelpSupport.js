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
import  profilePic from '../../../public/assets/my-property/hdfc-bank-logo.svg';
import rightIcon from '../../../public/assets/my-property/right-icon.svg';
import deleteIcon from '../../../public/assets/my-property/delete-icon.svg';
import editIcon from '../../../public/assets/my-property/edit-icon.svg';
import  card from '../../../public/assets/my-property/credit-card.svg';
import  accFin1 from '../../../public/assets/my-property/accFin1.png';
import  accFin2 from '../../../public/assets/my-property/accFin2.png';
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
import { MultiSelect } from "react-multi-select-component";
import Accordion from 'react-bootstrap/Accordion';
import srchIcon from '../../../public/assets/my-property/help-search.svg'
import call from '../../../public/assets/my-property/call.svg'
import chat from '../../../public/assets/my-property/chat.svg'


const options = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
  
];


const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const HelpSupport = () => {
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
const [selected, setSelected] = useState([]);
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
                <div className='col-12 col-md-12 listPropdPadd '>
                <Card className='wd-100 mb-5 accCard'>
                <Card.Header className='p-4 bg-white'>
                <div className='row align-items-center'>
                    <div className='col-6 col-md-9'><h5>Property details</h5></div>
                    <div className='col-6 col-md-3'>
                    <div className='helpSearch'>
                <input type='text' placeholder='Search'/>
                {/* <FontAwesomeIcon icon={faSearch} className={`${styles.srchIcon}`} onClick={handleShow}/> */}
                <Image src={srchIcon} className={`${styles.srchIcon}`} alt='logo' />
              </div>
                    </div>
                </div>
                 
                   
                </Card.Header>
                    
                    <Card.Body>
                    <form  className='mb-3'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                        <div className='row mb-4'>
                                  <div className='col-12'>
                                  <Form.Select aria-label="Floating label select example" className='filterImg'>
                                    <option>Property 1</option>
                                    <option value="1">Property 2</option>
                                    <option value="2">Property 3</option>
                                    <option value="3">Property 4</option>
                                    <option value="4">Property 5</option>
                                  </Form.Select>
                                  </div>
                                </div>
                                
                                
                                <h6>FAQ</h6>
                                <Accordion defaultActiveKey="0" className='border-0'>
      <Accordion.Item eventKey="0" className='border-0'>
        <Accordion.Header className='bg-white'>Manage my account</Accordion.Header>
        <Accordion.Body>
        <p className='mb-0'><strong>Lorem Ipsum </strong></p>
        <p className='text-black-50 fnt-13'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk</p>
        <p className='mb-0'><strong>Lorem Ipsum </strong></p>
        <p className='text-black-50 fnt-13'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk</p>
        <p className='mb-0'><strong>Lorem Ipsum </strong></p>
        <p className='text-black-50 fnt-13'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk</p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='border-0'>
        <Accordion.Header>Quick links</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='border-0'>
        <Accordion.Header>Billing Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                              
                        </div>
                        <div className='col-6'>
                        
                        </div>
                    </div>
                    </form>
                    </Card.Body>

                    <Card.Footer className='bg-white border-0'>
                    <div className='addpropDiv w-50'>
             
                    <button type='button' className='skip-btn' >
                    <Image src={call} alt='call' /> Call
                    </button>
                
              
              <button type="button" className='signup-btn' >
              <Image src={chat} alt='call' /> Chat
              </button>
            </div>
                    </Card.Footer>
                    
                </Card>
                
                </div>
                <div className='col-6 right-padding mob-hide'>
                
                </div>

            </div>

        </div>
      
      
    </div>
  );
};

export default HelpSupport;
