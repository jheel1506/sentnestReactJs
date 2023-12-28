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
import deleteIcon from '../../../public/assets/my-property/delete-icon.svg';
import editIcon from '../../../public/assets/my-property/edit-icon.svg';
import  payment from '../../../public/assets/my-property/paymentMethod.svg';
import  accFin1 from '../../../public/assets/my-property/accFin1.png';
import  accFin2 from '../../../public/assets/my-property/accFin2.png';
import  icici from '../../../public/assets/my-property/icici.png';
import  credit from '../../../public/assets/my-property/credit.svg';
import  bank from '../../../public/assets/my-property/bank.svg';
import  paymentSuc from '../../../public/assets/my-property/paymentSuccess.svg';
import  addbank1 from '../../../public/assets/my-property/addbank1.png';
import  addbank2 from '../../../public/assets/my-property/addbank2.png';
import  axisbank from '../../../public/assets/my-property/axisbank.png';
import  cvv from '../../../public/assets/my-property/cvv.png';
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
import Dropdown from 'react-bootstrap/Dropdown';
import OtpInput from 'react-otp-input';
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

const ImageSelect = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
          <Image
            src={option.image}
            alt={option.label}
            width={40} // Adjust the width as needed
            height={40} // Adjust the height as needed
          />
        </option>
      ))}
    </select>
  );
};

const PaymentMethods = () => {
    const [progress, setProgress] = useState(0);
    const [bedroom, setBedrrom] = useState(0);
    const [bathroom, setBathroom] = useState(0);
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    
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
const [paymentSucces, setPaymentSucc] = useState(false);
const handlePaymentSucc = () => setPaymentSucc(true);
const handlePaymentHide = () => setPaymentSucc(false);

const [showStep2, setShowStep] = useState(false);
const handleShowStep= () => setShowStep(true);
const handleClose = () => {
  setShow(false);
  handleCloseNewCan()
  handlePaymentSucc()
};
const [otp, setOtp] = useState('');
// const handleChange = (otp) => {
//   setOTP(otp);
// };


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
        router.push('/tenantReportIssue');
      };
      const moveFinance = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/rentHistory');
      };
      const moveUtility = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/subscriptionHistory');
      };

      const moveTnc = async (data) => {
        // Your registration logic
        // Redirect user after successful registration
        router.push('/termsCondition');
      };

      const [selectedtext, setSelectedText] = useState('Search for your bank');
    
  
      
      
        const handleNewChange = (e) => {
          const selectedValue = e.target.value;
          // Handle the selected value as needed
          console.log('Selected value:', selectedValue);
        };
        const selectItemClick = (e) =>{
          console.log('Selected value:', e);
          setSelectedText(e)
        }
     

  return (
    <div className='container-fluid p-0 mrgTop-8'>
     
     <div className='topsectionProp'>
        {
            !paymentSucces &&
            <button type='button' className={"addProp " + styles.iconBtn} onClick={goBack}>
        
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
        }
        {
            paymentSucces &&
            <button type='button' className={"addProp " + styles.iconBtn} onClick={handlePaymentHide}>
        
        <FontAwesomeIcon icon={faArrowLeft} className={`${styles.iconleftBtn}`}/>
        </button>
        }
        
       
        </div>
        <div className='container'>
            <div className='row '>
            {
                    !paymentSucces &&
                <div className='col-12 col-md-12 listPropdPadd left-padding'>
                <Card className='wd-100 mb-5 accCard'>
                <Card.Header className='p-4 bg-white'>
                <h5>Payment & Payout</h5> 
                   
                </Card.Header>
                    
                    <Card.Body>
                    <form  className='mb-3'>
                       
                    <div className='row '>
                                    <div className='col-6 offset-md-3 p-4 text-center' >
                                        <Image src={payment} alt='card' className='img-fluid mb-3' />
                                        
                                        <p className='mb-0 text-black-50'>Lorem ipsum dolor sit amet,<br></br> consetetur sadipscing elitr, sed</p>
                                        <div className='d-flex gap-3 mb-3 mt-4 justify-content-around'>
                                            <button type="button" className='contract-btn rounded-pill' onClick={handlePaymentSucc}>
                                            Linked Bank Account
                                            </button>
                                            <button type='button' className=' contract-red-btn rounded-pill' onClick={handleShowNewCan}>
                                            Linked Cards
                                            </button>
                                        </div>
                                        
                                    </div>

                                    
                                </div>
                    </form>
                    </Card.Body>
                    
                </Card>
                
                </div>
}
                {
                    paymentSucces &&
                    <div className='col-12 col-md-12 listPropdPadd left-padding'>
                <Card className='wd-100 mb-5 accCard'>
                <Card.Header as="h5" className='p-4 bg-white'>Payment Method</Card.Header>
                    
                    <Card.Body>
                    <form className='mb-3'>
                       
                        <div className='row justify-content-center position-relative'>
                            <div className='col-5' >
                                <p><strong>Linked Bank Account</strong></p>
                            <div className='row pt-0 pb-0 p-3' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={axisbank} alt='profile' />
                                      <div>
                                      <p className='mb-0'><strong>Axis bank</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    
                                    </span>
                                </div>
                                <p className=' fnt-13'>This is your default bank account</p>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={axisbank} alt='profile' />
                                      <div>
                                      <p className='mb-0'><strong>Axis bank</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    
                                    </span>
                                </div>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={axisbank} alt='profile' />
                                      <div>
                                      <p className='mb-0'><strong>Axis bank</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    
                                    </span>
                                </div>
                                <p><strong>Linked Card</strong></p>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={icici} alt='profile' />
                                      <div>
                                      <p className='mb-0'><strong>ICICI debit card</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    
                                    </span>
                                </div>
                                <p><strong>Add New Payment Method</strong></p>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={bank} alt='profile' />
                                      <div>
                                      <p className='mb-0 txt-clr-red'><strong>Link a bank account</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    <div className='col-2 text-end'>
                                        <Image src={right} alt='right' />
                                    </div>
                                    </span>
                                </div>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={credit} alt='profile' />
                                      <div>
                                      <p className='mb-0 txt-clr-red'><strong>Link a debit or credit card</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    <div className='col-2 text-end'>
                                        <Image src={right} alt='right' />
                                    </div>
                                
                                    </span>
                                </div>
                                <div className='row pt-0 pb-0 p-3 mb-4' onClick={(event) => { handlePaymentSucc(); event.stopPropagation() }}>
                                  <span className='booking-list'>
                                  <div className='col-10 d-flex align-items-center gap-2'>
                                  <Image src={bank} alt='profile' />
                                      <div>
                                      <p className='mb-0 txt-clr-red'><strong>Add Apple Pay account</strong></p>
                                      <p className='mb-0 fnt-13'>Keep your card info secure when shopping</p>
                                     
                                      </div>
                                      
                                    </div>
                                    <div className='col-2 text-end'>
                                        <Image src={right} alt='right' />
                                    </div>
                                    </span>
                                </div>
                            </div>
                            <div className='col-7'></div>
                           
                            
                            
                            
                        </div>
                    </form>
                    </Card.Body>
                    
                </Card>
                
                </div>
                }

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
        <div className='mt-2 text-left otpInput'>
                <h5>Verify Mobile Number</h5>
              <p>We sent you a code to verify your Number Sent to +91 888 666 5656</p>
              
            {/* <OTPInput className='otpInput' value={OTP} onChange={handleChange} autoFocus OTPLength={6} otpType="number" disabled={false}  /> */}
          <div className={'otpDiv'}>
          <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      
      renderSeparator={<span> &nbsp; &nbsp; &nbsp; </span>}
      renderInput={(props) => <input {...props} />}
    />
          </div>
            
            <div className='d-flex justify-content-center resendDiv mt-2'>
            Didn&apos;t get it? <span className='resendBtn'> Resend the code</span>
            </div>
            <div>
            <button type='button' className=' mt-4 mb-4 contract-red-btn rounded-pill' onClick={handleClose}>
            Verify
             </button>
            </div>
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
           
           
            <h5>Add Payment Method</h5>
           
            
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          {
            !showStep2  &&
          <div>
          <div className='row mb-4'>
                                        <div className='col-12 text-center'>
                                            <Image src={addbank1} alt='bank' className='img-fluid w-50' onClick={handleShowStep}/>
                                        </div>
                                    </div>
                                    <p><strong>Add Bank</strong></p>
                                    <div className='row mb-4'>
                                        <div className='col-12 position-relative'>
                                          <label className='drpdLabel'>Choose Your Bank</label>
                                          <Dropdown className='bankDrp'>
                                          <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-true" autoClose={true}>
                                           {selectedtext}
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu  >
                                            <Dropdown.Item eventKey="1" onClick={(event) => { selectItemClick('Axis Bank'); event.stopPropagation() }}> <Image src= {axisbank} alt='axis'  width="20" height="15" /> Axis Bank</Dropdown.Item>
                                           
                                            
                                          </Dropdown.Menu>
                                        </Dropdown>
        
                                        </div>
                                    </div>
                                    <small className='text-black-50'>Log in to your online banking to link your account instantly.</small>
                                    <div className='row mt-4 mb-4'>
                                      <div className='col-12 mb-3'>
                                      <FloatingLabel controlId="floatingPassword" label="Enter Card Number(16 digit) - Axis">
                                        <Form.Control type="text" value={'1010 1012 2310 2013'} />
                                      </FloatingLabel>
                                      </div>

                                      <div className='col-12'>
                                      <FloatingLabel controlId="floatingPassword" label="Enter Password">
                                        <Form.Control type="password" />
                                      </FloatingLabel>
                                      </div>
                                    </div>
                                    <small className='text-black-50'>Log in to your online banking to link your account instantly.</small>


                                    <button type='button' className=' mt-4 mb-4 contract-red-btn rounded-pill' onClick={handleShow}>
                                    Agree and Link
                                    </button>

                                    <span className='d-block position-relative'>
                                      <span className='linePassText'>Or</span>
                                      <hr></hr>
                                    </span>
                                    <div className='row'>
                                        <div className='col-12 text-center'>
                                          <p className='redClr mb-0'>Link your bank another way</p>
                                          <p>(Take 2-3 business days.)</p>
                                        </div>
                                    </div>
          </div>
          }

{
            showStep2  &&
          <div>
          <div className='row mb-4'>
                                        <div className='col-12 text-center'>
                                            <Image src={addbank2} alt='bank' className='img-fluid w-50' />
                                        </div>
                                    </div>
                                    <p><strong>Link A Card</strong></p>
                                    <small>We accept debit cards with the visa or Mastercard logo, as well as all major credits cards.</small>
                                    
                                    <div className='row mt-4 mb-3'>
                                      <div className='col-12 mb-3'>
                                      <FloatingLabel controlId="floatingPassword" label="Card Number">
                                        <Form.Control type="text"  />
                                      </FloatingLabel>
                                      </div>

                                      <div className='col-12'>
                                      <FloatingLabel controlId="floatingPassword" label="Expiration date">
                                        <Form.Control type="text" />
                                      </FloatingLabel>
                                      </div>

                                    </div>
                                    <div className='row mb-4'>
                                      <div className='col-10 mb-3'>
                                      <FloatingLabel controlId="floatingPassword" label="Security code">
                                        <Form.Control type="text"  />
                                      </FloatingLabel>
                                      </div>
                                      <div className='col-2'>
                                      <Image src={cvv} alt='cvv' />
                                      </div>

                                      
                                      
                                    </div>
                                   
                                    <button type='button' className=' mb-4 contract-red-btn rounded-pill' onClick={handleShow} >
                                    Link Card
                                    </button>

                                   
          </div>
          }
          
                                   
                  
                  
                 
          
        </Offcanvas.Body>
        
      </Offcanvas>
    </div>
  );
};

export default PaymentMethods;
