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
import  mapList from '../../../public/assets/my-property/list-property-map.png';
import  homeList from '../../../public/assets/my-property/list-property-home.png';
import  laptopList from '../../../public/assets/my-property/list-property-laptop.png';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const FinancialInformation = () => {
    const [progress, setProgress] = useState(0);
    const [bedroom, setBedrrom] = useState(0);
    const [bathroom, setBathroom] = useState(0);
    const [value, onChange] = useState(new Date());
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
    
      const handleNext = () => {
        console.log(steps.length)
        console.log(activeStep)
        if(activeStep != 2){
            const newActiveStep =
            isLastStep()
              ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
              : activeStep + 1;
          setActiveStep(newActiveStep);
        }
        if(activeStep == 2){
          // href={"/myProperty"}
          router.push('/addPropertyImage')
        }
        
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
                <div className='col-12 col-md-6 listPropdPadd left-padding'>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                    <h5 className='mb-4'>Financial Information & Date</h5>
                    <div className='row justify-content-center position-relative'>
                        <div className='col-12' >
                        {/* <ProgressBar now={progress} />
                        <div className='firstDiv'>
                            <span></span>
                        </div>
                        <div className='secondDiv'>
                            <span></span>
                        </div>
                        <div className='thirdDiv'>
                            <span></span>
                        </div> */}
                        
                        
                           
     
      <div>
     
          <div>
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
            <div className='addpropDiv'>
                <div className='col-6'>
                    <button type='button' className='skip-btn' disabled={activeStep === 0} onClick={goBack}>
                Save & Exit
                </button>
                </div>
                <div className='col-6'>
              <Link href={'/contractDetails'}>
              <button type="button" className='signup-btn'>
                Next
              </button>
              </Link>
              </div>
            </div>
          </div>
        
      </div>
     
    
                 </div>
                    </div>
      
     
       
      
        

        
        
        
      </form>
                </div>
                <div className='col-6 right-padding mob-hide'>
                
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default FinancialInformation;
