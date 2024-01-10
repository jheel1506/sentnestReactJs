import React from 'react';
import {useEffect, useState } from 'react';
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
import pdf from '../../../public/assets/my-property/pdf.svg';
import download from '../../../public/assets/my-property/download.svg';



import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link'
import uploadIcon from '../../../public/assets/upload-icon.svg'

import OtpInput from 'react-otp-input';
import Carousel from 'react-bootstrap/Carousel';
import * as yup from 'yup';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

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
const [value, onChange] = useState(new Date());
const [showMod, setShowMod] = useState(false);
  
  const handleShowMod = () => setShowMod(true);
  const handleCloseMod = () => setShowMod(false)
  const [showNegotiate, setShowNegotiate] = useState(false);
  
  const handleShowNegotiate = () => setShowNegotiate(true);
  const handleCloseNegotiate = () => setShowNegotiate(false)
  const [showDecline, setShowDecline] = useState(false);
  
  const handleShowDecline = () => setShowDecline(true);
  const handleCloseDecline = () => setShowDecline(false)
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonName) => {
    // Set the active button based on the clicked button
    setActiveButton(buttonName === activeButton ? null : buttonName);
    
  };
  const [showTenant, setShowTenant] = useState(false);
    const handleCloseTenant = () => setShowTenant(false);
    const handleShowTenant = () => setShowTenant(true);

    const [showBooking, setShowBooking] = useState(false);
    const handleCloseBooking = () => setShowBooking(false);
    

    const [showVisit, setShowVisit] = useState(false);
    const handleCloseVisit = () => setShowVisit(false);
    const handleShowVisit = () => setShowVisit(true);

    const [showBookCont, setShowBookCont] = useState(false);
    const handleCloseBookCont = () => setShowBookCont(false);
    const [showContract, setShowContract] = useState(false);
    const handleCloseContract = () => setShowContract(false);

    const handleShowBooking = (data) => {
      setShowBooking(true)
      setShowVisit(data === 'visit' ? true : false);
    };

    const handleShowBookCont = () => {
      setShowBookCont(true);
      setShowVisit(false)
    };

    const handleShowContract = () => {
      setShowBookCont(false);
      setShowVisit(false);
      setShowContract(true);
    };
   
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

      useEffect(() => {
        // Perform localStorage action
        
        let tenant = localStorage.getItem('tenant');
        console.log(tenant)
        if(tenant == 'true'){
          handleShowTenant()
        }
        
      }, [])

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
                <button className='btn shwAll' type='button' onClick={handleShowMod} >Show All</button>
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
        {
                      !showTenant && 
            <Link href={'/verifyPublish'}>
            <button type="button" className='addreSIgn signup-btn btn-width' onClick={handleShowUti} >Publish</button>
            </Link>
        }
        {
                      showTenant && 
            <div className='d-flex gap-3'>
            <button type="button" className='addreSIgn skip-btn btn-width' onClick={() => handleShowBooking('visit')} >Request to view</button>
            <button type="button" className='addreSIgn signup-btn btn-width' onClick={() => handleShowBooking('booking')} >Request to Book</button>
            </div>
            
        }
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
                    label="Term&apos;sName"
                    
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

      <Modal
        size='xl'
        show={showMod}
        onHide={handleCloseMod}     
        keyboard={false} centered 
        className={'bg-dark '}>
          <Modal.Header  className='bg-dark border-0'>
          <ul className='prvwUl'>
            <li className={`cursor-pointer ${activeButton === 'button1' ? 'activeList' : ''}`} onClick={() => handleButtonClick('button1')}>
              <Image src={bed} alt='bed' className='img-fluid' />
              <span className='overLaySmall'>
                   
                    </span>
              <span className='count'>3</span>
              <p className='m-2'>Bedroom</p>
            </li>
            <li className={`cursor-pointer ${activeButton === 'button2' ? 'activeList' : ''}`} onClick={() => handleButtonClick('button2')}>
              <Image src={bed} alt='bed' />
              <span className='overLaySmall'>
                   
                    </span>
              <span className='count'>3</span>
              <p className='m-2'>Kitchen</p>
            </li>
          </ul>
        </Modal.Header>
        <Modal.Body className={'p-4 pb-2 bg-dark ' }>
        <Carousel className={'prevewImg ' + styles.previewImg}>
      <Carousel.Item>
      <Image src={build} alt='washdish' className='img-fluid pre-main' />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src={build} alt='washdish' className='img-fluid pre-main' />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src={build} alt='washdish' className='img-fluid pre-main' />
        
      </Carousel.Item>
    </Carousel>
          
        </Modal.Body>
        

      </Modal>

      <Offcanvas show={showBooking} onHide={handleCloseBooking} placement={'end'} backdrop={false}>
        <Offcanvas.Header closeButton className='addPropModal pt-4 pb-3'>
          <Offcanvas.Title >
            {
              showVisit && !showBookCont && !showContract &&
              <p>Available slots</p>
            }
            {
              !showVisit && !showBookCont && !showContract &&
              <p>Disclaimer</p>
            }
           
            {
              !showVisit && showBookCont && !showContract &&
              <p>Book Property</p>
            }
             {
              !showVisit && !showBookCont && showContract &&
              <p className='mb-0'>Review Contract and Suggests edits</p>
            }
            
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body className='mb-5'>
        
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          
         {
          !showVisit && !showBookCont && !showContract &&
          <div className="row">
                        <div className="col-12">
                            <p className="fnt-13 text-black-50">
                            Dear Tenant,
                            </p>
                            <p className="fnt-13 text-black-50">
                            When you are renting a property and you decide to move out, it is important to give The lister or your landlord or property manager sufficient notice so that they can find a new tenant to take over your lease. The notice period required can vary depending on your rental agreement and local rental laws. 
                            </p>
                            <p className="fnt-13 text-black-50">
                            One important thing to keep in mind is that when you give notice, the current active month is not typically considered as the notice period. Instead, the next rest month is usually considered the notice month. For example, let&apos;ssay you decide to move out of your rented apartment on April 15th, and your rental agreement requires you to give one month&apos;snotice. In this scenario, the notice period would start on May 1st, and your last day in the apartment would be May 31st. This is because the notice period typically starts on the first day of the next rental period, which is the rent month following the current active month. Giving notice in this way ensures that you give your landlord or property manager sufficient time to find a new tenant.
                            </p>
                            <p className="fnt-13 text-black-50">
                            It also helps to ensure a smooth transition for both you and the new tenant. It is important to check your rental agreement and local rental laws to determine the required notice period and when the notice period should start. By doing so, you can avoid any confusion or misunderstandings with your landlord or property manager and ensure that you leave the property on good terms.
                            </p>
                        </div>
                    </div>
         }
           
{
showVisit && !showBookCont && !showContract &&
<div className='row mb-3'>
<div className='col-12 mb-3 dateCss'>
               
               
                 <DatePicker onChange={onChange} value={value} format="d MMM yyyy" className={'bg-light prvwDate'} />
                
</div>
<div className='col-12 mb-3 '>
           
            <Form>
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3 prvwRadio">
          <Form.Check
            reverse
            label="10:30 AM - 12:30 PM"
            name="group1"
            className='text-start'
            type={type}
            id={`reverse-${type}-1`}
          />
          
        </div>
      ))}
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3 prvwRadio">
          <Form.Check
            reverse
            label="10:30 AM - 12:30 PM"
            name="group1"
            className='text-start'
            type={type}
            id={`reverse-${type}-1`}
          />
         
        </div>
      ))}
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3 prvwRadio">
          <Form.Check
            reverse
            label="10:30 AM - 12:30 PM"
            name="group1"
            className='text-start'
            type={type}
            id={`reverse-${type}-1`}
          />
         
        </div>
      ))}
    </Form>
            
</div>
</div>
}

{
!showVisit && showBookCont && !showContract &&
<div className='row mb-3'>
  <p><strong>Property available from 12 Jun 2023</strong></p>
<div className='col-12 mb-3 dateCss'>
                <label className='fnt-13'>Select contract start date</label>
                 <DatePicker onChange={onChange} value={value} format="d MMM yyyy" className={'bg-light'} />
      <small className='fnt-13 text-black-50'>*Contract start date should not be more than 14 days from the available date or booking whichever is nearest.</small>          
</div>
<div className='col-12 '>
<p><strong>Monthly Charges</strong></p>
</div>
<div className='col-8  '>
<small className='fnt-13 text-black-50'>Monthly rent</small>
</div>
<div className='col-4 text-end'>
<p><strong>10,000</strong></p>
</div>
<div className='col-8 mb-3 '>
<small className='fnt-13 text-black-50'>Monthly Maintenance Charge</small>
</div>
<div className='col-4 mb-3 text-end'>
<p><strong>150</strong></p>
</div>
<div className='col-12 '>
<p><strong>One time refundable charges</strong></p>
</div>
<div className='col-8  '>
<small className='fnt-13 text-black-50'>Security Deposit</small>
</div>
<div className='col-4 text-end'>
<p><strong>10,000</strong></p>
</div>

<div className='col-12 '>
<p><strong>One time non refundable charges</strong></p>
</div>
<div className='col-8  '>
<small className='fnt-13 text-black-50'>Cleaning Charges</small>
</div>
<div className='col-4 text-end'>
<p><strong>150</strong></p>
</div>

</div>
}

{
!showVisit && !showBookCont && showContract &&
<div className='row mb-3'>
                                <div className='col-12 '>
                                <div className='row '>
                                    <div className='col-10 d-flex gap-3'>
                                        <Image src={pdf} className='img-fluid' alt='pdf' />
                                        <span>
                                        <p className='mb-0'><strong>Contract PDF</strong></p>
                                        <small><p><strong>April 23, 2021</strong></p></small>
                                        </span>
                                        
                                    </div>
                                    <div className='col-2 text-end'>
                                    <Image src={download} className='img-fluid' alt='pdf' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p className=' fnt-13'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des
                                        </p>
                                        <p className=' fnt-13'><strong>You have to sign and submit with in 24 hours</strong></p>
                                    </div>

                                </div>
                                </div>
                                
                            </div>
}
           

           
                    
                  
                  
                 
          <div className='mod-btm'>
            {
              showVisit && !showBookCont  && !showContract && 
              <button type="button" className='addreSIgn signup-btn' onClick={handleCloseBooking} >Submit</button>
            }
            {
              !showVisit && !showBookCont  && !showContract &&
              <div className='d-flex gap-2'>
                <button type="button" className='addreSIgn skip-btn' onClick={() => handleShowBooking('visit')} >Request to view</button>
                <button type="button" className='addreSIgn signup-btn' onClick={handleShowBookCont}  >Continue</button>
              </div>
            }
            {
              !showVisit && showBookCont  && !showContract &&
              <div className='d-flex justify-content-between align-items-center p-2 bg-light'>
                <div>
                  <small>Total Amount</small>
                  <p className='mb-0'>25,000</p>
                  </div>
                <button type="button" className='addreSIgn signup-btn w-50' onClick={handleShowContract}  >Request To Book</button>
              </div>
            }
            {
              !showVisit && !showBookCont && showContract &&
              <div className=' p-2 bg-light'>
                
                <button type="button" className='addreSIgn skip-btn w-100'   >Sign</button>
                <button type="button" className='addreSIgn skip-btn w-100'  onClick={handleShowNegotiate} >Negotiate</button>
                <button type="button" className='addreSIgn signup-btn w-100' onClick={handleShowDecline}  >Decline</button>
              </div>
            }
          
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>

      <Modal
        size='sm'
        show={showNegotiate}
        onHide={handleCloseNegotiate}     
        keyboard={false} centered 
        >
          <Modal.Header closeButton className='border-0 pb-0'>
          
        </Modal.Header>
        <Modal.Body className={'p-4 pb-2 text-center' }>
            <h5 className='mb-4'>Reason Of Negotiate</h5>

           <Form.Control as="textarea" rows={4} aria-label="With textarea" placeholder='Enter reason' />
           <button type="button" className='addreSIgn signup-btn w-100'   >Send</button>
            <button type="button" className='addreSIgn skip-btn w-100'   >Call</button>
        </Modal.Body>
        

      </Modal>
      <Modal
        size='sm'
        show={showDecline}
        onHide={handleCloseDecline}     
        keyboard={false} centered 
        >
          <Modal.Header closeButton className='border-0 pb-0'>
          
        </Modal.Header>
        <Modal.Body className={'p-4 pb-2 text-center' }>
            <h5 className='mb-4'>Reason Of Decline</h5>

           <Form.Control as="textarea" rows={4} aria-label="With textarea" placeholder='Enter reason' />
           <button type="button" className='addreSIgn signup-btn w-100'   >Send</button>
            
        </Modal.Body>
        

      </Modal>
    </div>
    
  );
};

export default PreviewProperty;
