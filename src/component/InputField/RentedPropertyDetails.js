import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/addadress.module.css";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import crslimg from "../../../public/assets/addPropCrsl.png";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
// import OTPInput,  {ResendOTP } from "otp-input-react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import Link from "next/link";
import camera from "../../../public/assets/my-property/camera.svg";
import plus from "../../../public/assets/my-property/plus-uti.svg";
import hdfc from "../../../public/assets/my-property/hdfc-bank-logo.svg";
import leftAngle from "../../../public/assets/my-property/left-angle-icon.svg";
import infoIcon from "../../../public/assets/my-property/info-icon.png";
import repeatGrid from "../../../public/assets/my-property/Repeat-Grid.png";
import profilePic from "../../../public/assets/my-property/profilePic.png";
import arrowRight from "../../../public/assets/my-property/arrow-point-to-right.svg";
import issueSmall from "../../../public/assets/my-property/issueSmaal.png";
import issueBg from "../../../public/assets/my-property/issueBg.png";
import rqstImg from "../../../public/assets/my-property/requestImg.png";
import rightIcon from '../../../public/assets/my-property/right-icon.svg';
import bed from '../../../public/assets/my-property/prop-detail-bed.png';
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactStars from 'react-stars';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const RentedPropertyDetails = () => {
  const [progress, setProgress] = useState(0);
  const [bedroom, setBedrrom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const handleCloseFeedback = () => setShowFeedback(false);
  const handleShowFeeback = () => setShowFeedback(true);
  const [showAddInspection, setShowAddInspection] = useState(false);
  const handleCloseAddInspect = () => setShowAddInspection(false);
  const handleShowAddInspect = () => setShowAddInspection(true);
  const [showMod, setShowMod] = useState(false);
  
  const handleShowMod = () => setShowMod(true);
  const [showNew, setShowNew] = useState(false);
  const handleCloseNew = () => setShowNew(false);
  const handleShowNew = () => setShowNew(true);

  const [showIssue, setShowIssue] = useState(false);
  const handleCloseIssue = () => setShowIssue(false);
  const handleShowIssue = () => setShowIssue(true);

  const [showReject, setShowReject] = useState(false);
  const handleCloseReject = () => setShowReject(false);
  const handleShowReject = () => setShowReject(true);
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => {
    setShowDetails(false)
    setShowReject(false)
};
  const handleShowDetails = () => setShowDetails(true);
  // const handleChange = (otp) => {
  //   setOTP(otp);
  // };

  const handleCloseMod = () => {
    setShowMod(false);
    setShowReject(true)
};
const [showInspection, setShowInspection] = useState(false);
const handleCloseInspection = () => setShowInspection(false);
const handleShowInspection = () => setShowInspection(true);
  const formattedDate = format(value, "dd MMM yyyy");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    bedroom: "",
  });
  const [text, setText] = useState("");
  const [key, setKey] = useState("home");
  const maxWords = 100;

  const [showOTP, setshowOTP] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const onSubmit = async (data) => {
    // Your registration logic
    // Redirect user after successful registration
    router.push("/login");
  };

  const renderButton = () => {
    return <button className="resendBtn"> Resend the code</button>;
  };
  const renderTime = (remainingTime) => {
    return <span>{remainingTime} sec</span>;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(data == 'Feedback'){
        handleShowFeeback()
    }
    if(data == 'Inspection'){
        handleShowInspection()
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [activeStepCan, setActiveStepCan] = React.useState(5);

  const handleNextCan = () => {
    setActiveStepCan((prevActiveStepCan) => prevActiveStepCan + 1);
  };

  const handleBackCan = () => {
    setActiveStepCan((prevActiveStepCan) => prevActiveStepCan - 1);
  };

  const handleResetCan= () => {
    setActiveStepCan(0);
  };
  const steps = [
    {
      label: "Acknowlegement",
      button: ``,
    },
    {
      label: "Inspection",
      button:
        "Inspection",
    },
    {
      label: "Key Received",
      button: `Confirm`,
     
    },
    {
      label: "Close Agreement",
      button: `Close agreement`,
    },
    {
        label: "Payment Clearance Date",
        button: ``,
      },
      {
        label: "Feedback",
        button: `Feedback`,
      },
  ];
  const stepsCan = [
    {
      label: "Acknowlegement",
      caption: `By renter`,
    },
    {
      label: "Inspection",
      caption:
        "Deducted from deposit Complete by 29 Feb 2023",
        price: '$ 449'
    },
    {
      label: "Key Received",
      caption: `Completed on 29 Feb 2023`,
     
    },
    {
      label: "Close Agreement",
      caption: `Completed on 29 Feb 2023`,
    },
    {
        label: "Payment Clearance Date",
        caption: `Completed on 29 Feb 2023`,
        price: '$ 700'
      },
      {
        label: "Feedback",
      },
  ];

  return (
    <div className="container-fluid p-0 mrgTop-8">
      <div className="topsectionProp">
        <button
          type="button"
          className={"addProp " + styles.iconBtn}
          onClick={goBack}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${styles.iconleftBtn}`}
          />
        </button>
      </div>
      <div className="container ">
        <div className="row ">
          <div className="col-12 col-md-12 listPropdPadd ">
            {
                !showInspection &&
                <Card className="wd-100 mb-5 accCard">
              <Card.Header className="p-4 bg-white">
                {!showIssue && <h5>Property details</h5>}
                
              </Card.Header>

              <Card.Body className="pt-0 pe-3 pb-0">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0">
                  <div className="row justify-content-center position-relative">
                    <div className="col-6 pt-2 accDetail">
                      {!showIssue && (
                        <div>
                            
                            <div className="row ">
                              <div className="col-12 ">
                                
                                <div
                                  className="row align-items-center rentedBoxDiv m-2"
                                  onClick={handleShowIssue}
                                >
                                  <div className="col-3">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="rentPropImg"
                                    />
                                  </div>

                                  <div className="col-9 pt-3 pb-3">
                                    <p className="mb-0 fnt-13">
                                      <strong>Naraina Industrial Estate</strong>
                                    </p>
                                    <div className="row"> 
                                    <div className="col-6">
                                    <p className="mb-0 text-black-50">
                                      <small>Rented on</small>
                                    </p>
                                    </div>
                                    <div className="col-6 text-end">
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2021</small>
                                    </p>
                                    </div>
                                    </div>
                                    <div className="row mb-3"> 
                                    <div className="col-6">
                                    <p className="mb-0 text-black-50">
                                      <small>Contract End on</small>
                                    </p>
                                    </div>
                                    <div className="col-6 text-end">
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2021</small>
                                    </p>
                                    </div>
                                    </div>
                                    
                                    <p className="mb-0 fnt-13 txt-clr-red cursor-pointer">
                                     View Details
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="row">
                                <div className="col-6">
                                <small className="mt-3 mb-3">
                                  <strong>Issue Summary</strong>
                                </small>
                                    </div>
                                    <div className="col-6 text-end">
                                    <small className="mt-3 mb-3 txt-clr-red cursor-pointer">
                                  <strong>View All</strong>
                                </small>
                                    </div>
                                </div>

                                <div
                                  className="row align-items-center rentedBoxDiv pt-3 pb-3 m-2"
                                  
                                >
                                  <div className="col-6">
                                    <p className=" fnt-13">Microbe Wave Broken</p>
                                  </div>

                                  <div className="col-6  text-end">
                                    <p className=" fnt-13 blue-clr">
                                    Pending
                                    </p>
                                    
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0 fnt-13">AC Not Working</p>
                                  </div>

                                  <div className="col-6  text-end">
                                    <p className="mb-0 fnt-13 greenClr">
                                    Resolve
                                    </p>
                                    
                                  </div>
                                </div>
                                
                                <div className="row">
                                <div className="col-12">
                                <small className="mt-3 mb-3">
                                  <strong>Other Details</strong>
                                </small>
                                    </div>
                                    
                                </div>

                                <div
                                  className="row align-items-center rentedBoxDiv pt-3 pb-3 m-2"
                                  
                                >
                                  <div className="col-6">
                                    <p className="mb-0 fnt-13"><strong>Contract</strong></p>
                                  </div>

                                  <div className="col-6  text-end">
                                    <Image src={arrowRight} alt="right" />
                                    
                                  </div>
                                  
                                </div>
                                <div
                                  className="row align-items-center rentedBoxDiv pt-3 pb-3 m-2"
                                  
                                >
                                  <div className="col-6">
                                    <p className="mb-0 fnt-13"><strong>Transaction History</strong></p>
                                  </div>

                                  <div className="col-6  text-end">
                                    <Image src={arrowRight} alt="right" />
                                    
                                  </div>
                                  
                                </div>
                                <div
                                  className="row align-items-center rentedBoxDiv pt-3 pb-3 m-2"
                                  
                                >
                                  <div className="col-6">
                                    <p className="mb-0 fnt-13"><strong>Communications</strong></p>
                                  </div>

                                  <div className="col-6  text-end">
                                    <Image src={arrowRight} alt="right" />
                                    
                                  </div>
                                  
                                </div>

                                <div className="d-flex gap-3 mb-2">
                                  {
                                    !showReject &&
                                    <button type="button" className=" signup-btn" onClick={handleShowMod}>
                                  Send Notice
                                  </button>
                                  }
                                  
                                  {
                                    showReject &&
                                    <button type="button" className=" signup-btn" >
                                  Cancel Notice
                                  </button>
                                  }
                                </div>
                               
                                
                              </div>
                            </div>
                        </div>
                      )}

                      {showIssue && (
                        <div>
                          <div className="row">
                            <div className="col-12">
                              <Image
                                src={issueBg}
                                alt="bg"
                                className="img-fluid"
                              />
                              <ul className="smallList">
                                <li>
                                  <Image
                                    src={issueSmall}
                                    className="img-fluid"
                                    alt="small"
                                  />{" "}
                                </li>
                                <li>
                                  <Image
                                    src={issueSmall}
                                    className="img-fluid"
                                    alt="small"
                                  />{" "}
                                </li>
                                <li>
                                  <Image
                                    src={issueSmall}
                                    className="img-fluid"
                                    alt="small"
                                  />{" "}
                                </li>
                              </ul>
                              <p className="mb-0 fnt-13">
                                <strong>Title</strong>
                              </p>
                              <p>
                                <small>Microbe Wave Broken</small>
                              </p>
                              <p className="mb-0 fnt-13">
                                <strong>Message</strong>
                              </p>
                              <p>
                                <small>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry`s standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desk
                                </small>
                              </p>
                              {!showReject && (
                                <div className="d-flex gap-3 mb-2">
                                  <button
                                    type="button"
                                    className="skip-btn"
                                    onClick={handleShowReject}
                                  >
                                    Reject
                                  </button>
                                  <button type="button" className=" signup-btn">
                                    Acknowledge
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-6 p-0">
                      <Card className="h-100 border-end-0 border-bottom-0 rounded-0">
                        <Card.Header className="bg-white height-49px align-items-center d-flex">
                          {(!showReject && !showDetails) && (
                            <p className="mb-0">
                              <strong>Previous Tenant History</strong>{" "}
                              
                            </p>
                          )}
                          {(showReject && !showDetails) && (
                            <p className="mb-0">
                            <strong>Status:</strong>{" "}
                            <span className="blue-clr">Acknowledged</span>
                          </p>
                          )}
                          {(showDetails && !showReject) && (
                            <p className="mb-0">
                             <Image src={leftAngle} alt="left" onClick={handleCloseDetails}  className="cursor-pointer img-fluid me-2"/> <strong>Ankit Kumar</strong>{" "}
                            </p>
                          )}
                        </Card.Header>

                        <Card.Body className="bg-light">
                            {
                                !showReject && !showDetails &&
                                <div className="scrollDiv height-518px p-0 d-flex flex-column  gap-3">
                                    <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative cursor-pointer"
                                  onClick={handleShowDetails}
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto  rentHist">
                                        {/* <Image src={repeatGrid} className="img-fluid dropdown-toggle" alt="dots" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" /> */}
                                        <Dropdown>
                                        <Dropdown.Toggle  id="dropdown-basic">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item >Contract</Dropdown.Item>
                                            <Dropdown.Item >Transaction History</Dropdown.Item>
                                            
                                        </Dropdown.Menu>
                                        </Dropdown>
                                        
                                  </span>
                                  
                                </div>

                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                <div
                                  className="row align-items-center d-flex rentedBoxDiv pt-3 pb-3 m-1 position-relative"
                                  
                                >
                                  <div className="col-5 d-flex gap-4 align-items-center">
                                  <Image src={profilePic} alt="profile" className="img-fluid imgWidth" />
                                  <div>
                                  <small className="mb-0 fnt-13">Name</small>
                                  <p className="mb-0 fnt-13"><strong>Ankit kumar</strong></p>
                                  </div>
                                    
                                  </div>
                                  <div className="col-3 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Rented on:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                  </div>

                                  <div className="col-4 d-flex align-items-center">
                                  <div>
                                  <small className="mb-0 fnt-13">Contract end date:</small>
                                  <p className="mb-0 fnt-13"><strong>10 Aug 2021</strong></p>
                                  </div>
                                    
                                  </div>

                                  <span className="position-absolute top-0 end-0 cursor-pointer w-auto">
                                        <Image src={repeatGrid} className="img-fluid" alt="dots" />
                                  </span>
                                  
                                </div>
                                
                                </div>
                            }
                          {showReject && !showDetails && (
                            <Box sx={{ maxWidth: 400 }}>
                              
                              <Stepper
                                activeStep={activeStep}
                                orientation="vertical"
                                
                              >
                                
                                {steps.map((step, index) => (
                                  <Step key={step.label} className="position-relative">
                                    
                                   
                                    <StepLabel 
                                      optional={
                                        index == 0 ? (
                                          <div>
                                            <Typography variant="caption">
                                            By renter
                                            </Typography>
                                          </div>
                                        ) : <Typography variant="caption">
                                        Complete by 29 Feb 2023
                                        
                                        </Typography>
                                      }
                                      
                                    >

                                      {step.label} {index == 1 && <Image src={infoIcon} alt="icon" />}
                                      
                                    </StepLabel>
                                    
                                    <Box sx={{ mb: 2 }} className="position-absolute top-minus">
                                        <div>
                                          { (index != 0 && index != 4) &&
                                            <Button
                                            variant="contained"
                                            onClick={(e) => handleNext(step.button)}
                                            
                                            className="stepBtnNew"
                                            sx={{ml:3}}
                                            >
                                            {step.button}
                                            </Button>
                                          }
                                           
                                          

                                      
                                        </div>
                                      </Box>
                                    
                                    
                                  </Step>
                                ))}
                              </Stepper>
                              
                            </Box>
                          )}
                          {!showReject && showDetails && (
                            <div>
                                <Tabs
                          transition={false}
                          id="controlled-tab-example"
                          activeKey={key}
                          onSelect={(k) => setKey(k)}
                          className="mb-3"
                          justify
                        >
                          <Tab eventKey="home" title="Contract">
                            
                            <div className="row p-4">
                              <div className="col-12 scrollDiv height-500px">
                               
                              <Card className='listMain mb-4 p-2'>
                                <Card.Header  >
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Contract Started on</small></strong>
                                       </p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                    </div>
                                    <div className='col-2'>
                                    <p><strong>₹4650</strong></p>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Header  >
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Monthly Rent</small></strong>
                                       </p>
                                      <p className='mb-0 text-black-50'> <small>5th of the Month</small> </p>
                                    </div>
                                    <div className='col-2'>
                                    <p><strong>₹2000</strong></p>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Header  >
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Deposit</small></strong>
                                       </p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                    </div>
                                    <div className='col-2'>
                                    <p><strong>₹2500</strong></p>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Header  className="border-bottom-0">
                                  <div className='row'>
                                    <div className='col-10'>
                                     <p className='mb-0'> <strong> <small>Cleaning Charges</small></strong>
                                       </p>
                                      <p className='mb-0 text-black-50'> <small>3 days before leaving</small> </p>
                                    </div>
                                    <div className='col-2'>
                                    <p><strong>₹150</strong></p>
                                    </div>
                                  </div>
                                </Card.Header>
                                
                                
                                </Card>
                                <Card className='listMain mb-4 p-2'>
                                <Card.Header  className="border-bottom-0" >
                                  <div className='row'>
                                    <div className='col-9'>
                                     <p className='mb-0'> <strong> <small>Contract Started on</small></strong>
                                       </p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                    </div>
                                    <div className='col-3 text-end'>
                                    <p className="mb-0"><strong>₹4650</strong></p>
                                    <p className="mb-0 fnt-13 txt-clr-red cursor-pointer" onClick={handleShow}>
                                     View Details
                                    </p>
                                    </div>
                                  </div>
                                </Card.Header>
                               
                               
                                
                                
                                </Card>

                                <h6>Previous Transactions</h6>
                                <div className='row  mb-4'>
                                  <span className='rentedBoxDiv  p-3 d-flex'>
                                  <div className='col-8 d-flex gap-3'>
                                  <Image src={hdfc} alt='profile' className='img-fluid ' />
                                      <div>
                                      <p className='mb-0'><strong>HDFC Bank</strong></p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                      <p className='mb-0'>xxxx-xxxx-xxxx-5689</p>
                                      </div>
                                      
                                    </div>
                                    <div className='col-4 text-end'>
                                    
                                      <p  ><strong>$ 399</strong></p>
                                      <small className='mb-0 redClr'><strong>Download Invoice</strong></small>
                                    </div>
                                    </span>
                                </div>
                                <div className='row  mb-4'>
                                  <span className='rentedBoxDiv  p-3 d-flex'>
                                  <div className='col-8 d-flex gap-3'>
                                  <Image src={hdfc} alt='profile' className='img-fluid ' />
                                      <div>
                                      <p className='mb-0'><strong>HDFC Bank</strong></p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                      <p className='mb-0'>xxxx-xxxx-xxxx-5689</p>
                                      </div>
                                      
                                    </div>
                                    <div className='col-4 text-end'>
                                    
                                      <p  ><strong>$ 399</strong></p>
                                      <small className='mb-0 redClr'><strong>Download Invoice</strong></small>
                                    </div>
                                    </span>
                                </div>
                                <div className='row  mb-4'>
                                  <span className='rentedBoxDiv  p-3 d-flex'>
                                  <div className='col-8 d-flex gap-3'>
                                  <Image src={hdfc} alt='profile' className='img-fluid ' />
                                      <div>
                                      <p className='mb-0'><strong>HDFC Bank</strong></p>
                                      <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p>
                                      <p className='mb-0'>xxxx-xxxx-xxxx-5689</p>
                                      </div>
                                      
                                    </div>
                                    <div className='col-4 text-end'>
                                    
                                      <p  ><strong>$ 399</strong></p>
                                      <small className='mb-0 redClr'><strong>Download Invoice</strong></small>
                                    </div>
                                    </span>
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="profile" title="Transaction History">
                          
                          </Tab>
                        </Tabs>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
            }
            {
                showInspection && 
            
            <Card className="wd-100 mb-5 accCard">
              <Card.Header className="p-4 bg-white">
                
                <div className="row">
                    <div className="col-6">
                    <h5>Inspection List</h5>
                    <small className="text-black-50">Start adding your inspection incidentals here</small>
                    </div>
                    <div className="col-6 text-end">
                        <button type="button" className="skip-btn w-25 p-0" onClick={handleShowAddInspect}>
                            <Image src={plus} alt="plus" className="plus-uti" /> Add
                        </button>
                    </div>
                </div>
                
                
              </Card.Header>

              <Card.Body className="pt-0 pe-3 pb-0">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0">
                  <div className="row justify-content-center position-relative">
                    <div className="col-6 p-4 accDetail">
                      <div className="row">
                      <div className='col-12 prop-detail'>
                        <p className="mb-0"><small><strong>Broken Fridge</strong></small></p>
                        <small className="text-black-50 d-block w-75 fnt-13 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</small>
                        <div className="row">
                            <div className="col-6">
                            <span className='img-grid-prop'>
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />

                            </span>
                            </div>
                            <div className="col-6 text-end align-text-bottom">
                            
                                <p className="mb-0 w-100 fnt-13"><small><strong>Amount</strong></small></p>
                                <p className="mb-0 w-100"><strong>$ 399</strong></p>
                            
                            </div>
                        </div>
                        
                        
                        
                    
                        <span className='propRight-icon'>
                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                        </span>

                        </div>
                        <div className='col-12 prop-detail'>
                        <p className="mb-0"><small><strong>Inspection</strong></small></p>
                        <small className="text-black-50 d-block w-75 fnt-13 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</small>
                        <div className="row">
                            <div className="col-6">
                            <span className='img-grid-prop'>
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />

                            </span>
                            </div>
                            <div className="col-6 text-end align-text-bottom">
                            
                                <p className="mb-0 w-100 fnt-13"><small><strong>Amount</strong></small></p>
                                <p className="mb-0 w-100"><strong>$ 399</strong></p>
                            
                            </div>
                        </div>
                        
                        
                        
                    
                        <span className='propRight-icon'>
                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                        </span>

                        </div>
                        <div className='col-12 prop-detail'>
                        <p className="mb-0"><small><strong>Inspection</strong></small></p>
                        <small className="text-black-50 d-block w-75 fnt-13 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</small>
                        <div className="row">
                            <div className="col-6">
                            <span className='img-grid-prop'>
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />

                            </span>
                            </div>
                            <div className="col-6 text-end align-text-bottom">
                            
                                <p className="mb-0 w-100 fnt-13"><small><strong>Amount</strong></small></p>
                                <p className="mb-0 w-100"><strong>$ 399</strong></p>
                            
                            </div>
                        </div>
                        
                        
                        
                    
                        <span className='propRight-icon'>
                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                        </span>

                        </div>
                        <div className="col-12">
                        <button type="button" className=" signup-btn" onClick={handleCloseInspection}>
                        335$ To Deduct
                                  </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 p-0">
                      <Card className="h-100 border-end-0 border-bottom-0 rounded-0">
                        <Card.Header className="bg-white height-49px align-items-center d-flex">
                          
                            <p className="mb-0">
                              <strong>Security Amount: ₹ 10000</strong>{" "}
                              
                            </p>
                          
                          
                        </Card.Header>

                        <Card.Body >
                        <div className="row p-3 bg-light">
                      <div className='col-12 prop-detail bg-white'>
                        <p className="mb-0"><small><strong>Inspection</strong></small></p>
                        <small className="text-black-50 d-block w-75 fnt-13 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</small>
                        <div className="row">
                            <div className="col-6">
                            <span className='img-grid-prop'>
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />

                            </span>
                            </div>
                            <div className="col-6 text-end align-text-bottom">
                            
                                <p className="mb-0 w-100 fnt-13"><small><strong>Amount</strong></small></p>
                                <p className="mb-0 w-100"><strong>$ 399</strong></p>
                            
                            </div>
                        </div>
                        
                        
                        
                    
                        <span className='propRight-icon'>
                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                        </span>

                        </div>
                        <div className='col-12 prop-detail bg-white'>
                        <p className="mb-0"><small><strong>Cleaning Charges</strong></small></p>
                        <small className="text-black-50 d-block w-75 fnt-13 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</small>
                        <div className="row">
                            <div className="col-6">
                            <span className='img-grid-prop'>
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />
                            <Image src={bed} alt='washdish' className='img-fluid inspectionImg' />

                            </span>
                            </div>
                            <div className="col-6 text-end align-text-bottom">
                            
                                <p className="mb-0 w-100 fnt-13"><small><strong>Amount</strong></small></p>
                                <p className="mb-0 w-100"><strong>$ 399</strong></p>
                            
                            </div>
                        </div>
                        
                        
                        
                    
                        <span className='propRight-icon'>
                                    <Image src={rightIcon} alt='washdish' className='img-fluid' />
                        </span>

                        </div>
                        
                            <div className="col-6">
                            <p className="mb-0 w-100"><strong>Total Balance</strong></p>

                            </div>
                            <div className="col-6 text-end">
                            <p className="mb-0 w-100"><strong>$ 399</strong></p>

                            </div>
                        
                        
                        
                      </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="row">
                            <div className="col-6">
                            <p className="mb-0 w-100"><strong>Total Balance</strong></p>

                            </div>
                            <div className="col-6 text-end">
                            <p className="mb-0 w-100"><strong>$ 1000</strong></p>

                            </div>
                            </div>
                        </Card.Footer>
                      </Card>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
            }
          </div>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop={false}
      >
        <Offcanvas.Header closeButton className="addPropModal">
          <Offcanvas.Title>
            <p>Contract Closure Summary</p>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <Box sx={{ maxWidth: 400 }}>
                              
                              <Stepper
                                activeStep={activeStepCan}
                                orientation="vertical"
                                
                              >
                                
                                {stepsCan.map((step, index) => (
                                  <Step key={step.label} className="position-relative">
                                    
                                   
                                    <StepLabel 
                                      optional={
                                        
                                          <div className="position-relative">
                                            <Typography variant="caption" className="d-block w-53">
                                            {step.caption}
                                            </Typography>
                                            <Typography variant="" className="d-block position-absolute end-0 top-0">
                                               <strong>{step.price}</strong> 
                                            </Typography>
                                          </div>
                                        
                                      }
                                      
                                    >

                                      {step.label} 
                                      
                                    </StepLabel>
                                    
                                    <Box sx={{ mb: 2 }} >
                                        <div>
                                          { (index == stepsCan.length - 1) &&
                                            <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            className="stepBtnNew"
                                            sx={{ml:3}}
                                            >
                                            Feedback
                                            </Button>
                                          }
                                           
                                          

                                      
                                        </div>
                                      </Box>
                                    
                                    
                                  </Step>
                                ))}
                              </Stepper>
                              
                            </Box>

                            <Card className='listMain mb-4 p-3'>
                            <p > <strong> <small>Payment Details</small></strong></p>
                                  <div className='row mb-4'>
                                    <div className='col-6'>
                                      <strong> <small>Security Amount</small></strong>
                                       
                                      {/* <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p> */}
                                    </div>
                                    <div className='col-6 text-end'>
                                    <p className="mb-0"><strong>$ 1000</strong></p>
                                    
                                    </div>
                                  </div>

                                  <div className='row  mb-4'>
                                  <span className='rentedBoxDiv  p-2 d-flex'>
                                  <div className='col-8 '>
                                  
                                      
                                      <small className='mb-0'><strong>Inspection</strong></small>
                                      <p className='mb-0 text-black-50 fnt-13'> <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small> </p>
                                     
                                      
                                    </div>
                                    <div className='col-4 text-end'>
                                    
                                      <small ><strong>Amount</strong></small>
                                      <p className='mb-0'><strong>$ 150</strong></p>
                                    </div>
                                    </span>
                                </div>
                                <div className='row  mb-4'>
                                  <span className='rentedBoxDiv  p-2 d-flex'>
                                  <div className='col-8 '>
                                  
                                      
                                      <small className='mb-0'><strong>Cleaning Charges</strong></small>
                                      <p className='mb-0 text-black-50 fnt-13'> <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small> </p>
                                     
                                      
                                    </div>
                                    <div className='col-4 text-end'>
                                    
                                      <small ><strong>Amount</strong></small>
                                      <p className='mb-0'><strong>$ 150</strong></p>
                                    </div>
                                    </span>
                                </div>
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                      <strong> <small>Total Balance</small></strong>
                                       
                                      {/* <p className='mb-0 text-black-50'> <small>04 Oct 2021</small> </p> */}
                                    </div>
                                    <div className='col-6 text-end'>
                                    <p className="mb-0"><strong>$ 700</strong></p>
                                    
                                    </div>
                                  </div>
                                
                                
                               
                               
                                
                                
                                </Card>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showFeedback}
        onHide={handleCloseFeedback}
        placement={"end"}
        backdrop={false}
      >
        <Offcanvas.Header closeButton className="addPropModal">
          <Offcanvas.Title>
            <p>Lister Review</p>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        
                    <div className="row">
                        <div className="col-12 text-center">
                            <Image src={profilePic} alt="profile" className="img-fluid appProf" />
                            <div className="d-flex justify-content-center">
                            <ReactStars
                            count={5}
                            size={36}
                            value={5}
                            color2={'#F9415A'} />
                            </div>
                            <h5>Excellent</h5>
                        </div>
                    </div>
                    <div className="row">
                    <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingBath" label="Add Tittle">
                 <Form.Control type="text" placeholder="Add Tittle"  />
                </FloatingLabel>
                </div>

                <div className='col-12 mb-3'>
                
                <Form.Control as="textarea" aria-label="With textarea" placeholder='Type your review...' maxLength={100} />
                
                
                
                </div>
                <div className="col-12">
                <button type="button" className='signup-btn' >
                Submit
              </button>
                </div>
                    </div>
                           
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showAddInspection}
        onHide={handleCloseAddInspect}
        placement={"end"}
        backdrop={false}
      >
        <Offcanvas.Header closeButton className="addPropModal">
          <Offcanvas.Title>
            <p>Add Issues</p>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        
                    <div className="row">
                        <div className="col-12">
                        <ul className='add-issue-Image p-0'>
        <li> <Image src={camera} alt='add' className='img-fluid' /> </li>
        <li></li>
        <li></li>
        
        </ul>
                        </div>
                    </div>
                    <div className="row">
                    <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingBath" label="Breakage/ Incident">
                 <Form.Control type="text" placeholder="Breakage/ Incident"  />
                </FloatingLabel>
                </div>

                <div className='col-12 mb-3'>
                
                <Form.Control as="textarea" aria-label="With textarea" placeholder='Type your review...' maxLength={100} />
                
                
                
                </div>
                <div className='col-12 mb-3'>
                <FloatingLabel controlId="floatingBath" label="Enter Amount">
                 <Form.Control type="text" placeholder="Enter Amount"  />
                </FloatingLabel>
                </div>
                <div className="col-12">
                <button type="button" className='signup-btn' >
                Save
              </button>
                </div>
                    </div>
                           
        </Offcanvas.Body>
      </Offcanvas>

      <Modal
        size='sm'
        show={showMod}
        onHide={handleCloseMod}     
        keyboard={false} centered >
          <Modal.Header closeButton className='border-0 pb-0'>
          
        </Modal.Header>
        <Modal.Body className='p-4 pt-0 pb-2'>
          <h5 className="text-center">Add Notice</h5>
         <small > <strong>Notice Start Date</strong> </small> 
          <p className="mb-0"> <strong>22 Jan 2023</strong> </p>
          <p className="fnt-13 text-black-50">Notice period counted as 1st February to 29th February</p>
          <small > <strong>Notice End Date / Last Day</strong> </small> 
          <p className="mb-0"> <strong>29 Feb 2023</strong> </p>
          <p className="fnt-13 text-black-50">Receive the key and tenant exits the property</p>
          <div className='d-flex gap-3 mb-3 justify-content-around'>
          
          <button type='button' className=' accept-btn rounded-pill' onClick={handleCloseMod}>
            Confirm
          </button>
          </div>
          
        </Modal.Body>
        

      </Modal>
    </div>
  );
};

export default RentedPropertyDetails;
