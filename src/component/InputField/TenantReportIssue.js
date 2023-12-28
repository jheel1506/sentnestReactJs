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
import minus from "../../../public/assets/my-property/minus.svg";
import plus from "../../../public/assets/my-property/plus.svg";
import card from "../../../public/assets/my-property/credit-card.svg";
import accFin1 from "../../../public/assets/my-property/accFin1.png";
import accFin2 from "../../../public/assets/my-property/accFin2.png";
import blackPen from "../../../public/assets/my-property/blackPen.png";
import redpen from "../../../public/assets/my-property/profileeditred.png";
import profilePic from "../../../public/assets/my-property/profilePic.png";
import issueSmall from "../../../public/assets/my-property/issueSmaal.png";
import issueBg from "../../../public/assets/my-property/issueBg.png";
import rqstImg from "../../../public/assets/my-property/requestImg.png";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Offcanvas from "react-bootstrap/Offcanvas";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confpassword: yup.string().required().min(6),
});

const TenantReportIssue = () => {
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

  const [showIssue, setShowIssue] = useState(false);
  const handleCloseIssue = () => setShowIssue(false);
  const handleShowIssue = () => setShowIssue(true);

  const [showReject, setShowReject] = useState(false);
  const handleCloseReject = () => {
    setShowReject(false)
    setShowIssue(false)
  };
  const handleShowReject = () => setShowReject(true);
  // const handleChange = (otp) => {
  //   setOTP(otp);
  // };

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Microbe Wave Broken",
      description: ``,
    },
    {
      label: "Work Status",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Resolution Status from tenant",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
      image: (
        <ul className="smallListStep">
          <li>
            <Image src={issueSmall} className="img-fluid" alt="small" />{" "}
          </li>
          <li>
            <Image src={issueSmall} className="img-fluid" alt="small" />{" "}
          </li>
          <li>
            <Image src={issueSmall} className="img-fluid" alt="small" />{" "}
          </li>
        </ul>
      ),
    },
    {
      label: "Issue Closed",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ];

  return (
    <div className="container-fluid p-0 mrgTop-8">
      <div className="topsectionProp">
        {
         !showIssue &&  
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
        }
        {
          showIssue &&
          <button
          type="button"
          className={"addProp " + styles.iconBtn}
          onClick={handleCloseReject}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${styles.iconleftBtn}`}
          />
        </button>
        }
        
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-12 listPropdPadd left-padding">
            <Card className="wd-100 mb-5 accCard">
              <Card.Header className="p-4 bg-white">
                {!showIssue && <h5>All Request</h5>}
                {showIssue && <h5>Report Issue Details</h5>}
              </Card.Header>

              <Card.Body className="pt-0 pe-3 pb-0">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0">
                  <div className="row justify-content-center position-relative">
                    <div className="col-6 pt-2 accDetail">
                      {!showIssue && (
                        <Tabs
                          transition={false}
                          id="controlled-tab-example"
                          activeKey={key}
                          onSelect={(k) => setKey(k)}
                          className="mb-3"
                        >
                          <Tab eventKey="home" title="Active">
                            <div className="row mb-4">
                              <div className="col-8">
                                <Form.Select
                                  aria-label="Floating label select example"
                                  className="filterImg"
                                >
                                  <option>Property 1</option>
                                  <option value="1">Property 2</option>
                                  <option value="2">Property 3</option>
                                  <option value="3">Property 4</option>
                                  <option value="4">Property 5</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="row p-4">
                              <div className="col-12 scrollDiv">
                                <small>
                                  <strong>New Request</strong>
                                </small>
                                <div
                                  className="row align-items-center boxDiv m-2"
                                  onClick={handleShowIssue}
                                >
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="row align-items-center boxDiv m-2"
                                  onClick={handleShowIssue}
                                >
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <small className="mt-3 mb-3">
                                  <strong>Active Request</strong>
                                </small>
                                <div
                                  className="row align-items-center boxDiv m-2"
                                  onClick={handleShowIssue}
                                >
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab eventKey="profile" title="Inactive">
                            <div className="row mb-4">
                              <div className="col-8">
                                <Form.Select
                                  aria-label="Floating label select example"
                                  className="filterImg"
                                >
                                  <option>Property 1</option>
                                  <option value="1">Property 2</option>
                                  <option value="2">Property 3</option>
                                  <option value="3">Property 4</option>
                                  <option value="4">Property 5</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="row p-4">
                              <div className="col-12 scrollDiv">
                                <small>
                                  <strong>New Request</strong>
                                </small>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <small className="mt-3 mb-3">
                                  <strong>Active Request</strong>
                                </small>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center boxDiv m-2">
                                  <div className="col-2">
                                    <Image
                                      src={rqstImg}
                                      alt="rest"
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div className="col-10">
                                    <p className="mb-0 fnt-13">
                                      <strong>Fridge broken</strong>
                                    </p>
                                    <p className="mb-0 text-black-50">
                                      <small>22 Feb 2023</small>
                                    </p>
                                    <p className="mb-0 fnt-13">
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
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
                          {showReject && (
                            <p className="mb-0">
                              <strong>Status:</strong>{" "}
                              <span className="blue-clr">Pending</span>
                            </p>
                          )}
                        </Card.Header>

                        <Card.Body>
                          {showReject && (
                            <Box sx={{ maxWidth: 400 }}>
                              <div className="stepAckno">Acknowledged</div>
                              <Stepper
                                activeStep={activeStep}
                                orientation="vertical"
                              >
                                
                                {steps.map((step, index) => (
                                  <Step key={step.label}>
                                    
                                    <StepLabel
                                      optional={
                                        index <= activeStep ? (
                                          <div>
                                            <Typography variant="caption">
                                              2 Aug 2021
                                            </Typography>

                                            {step.image}

                                            {activeStep != index ? (
                                              <Typography>
                                                {step.description}
                                              </Typography>
                                            ) : null}
                                          </div>
                                        ) : null
                                      }
                                    >
                                      {step.label}
                                    </StepLabel>
                                    <StepContent>
                                      <Typography>
                                        {activeStep == 1 ? (
                                          <Form.Control
                                            as="textarea"
                                            aria-label="With textarea"
                                            placeholder="Comment"
                                            maxLength={100}
                                          />
                                        ) : (
                                          `Try out different ad text to see what brings in the most customers,
                 and learn how to enhance your ads using features like ad extensions.
                 If you run into any problems with your ads, find out how to tell if
                 they're running and how to resolve approval issues`
                                        )}
                                      </Typography>
                                      <Box sx={{ mb: 2 }}>
                                        <div>
                                          {index < 2 && (
                                            <Button
                                              variant="contained"
                                              onClick={handleNext}
                                              className="stepBtn"
                                              sx={{ mt: 1, mr: 1 }}
                                            >
                                              {index === steps.length - 1
                                                ? "Finish"
                                                : "Work Started"}
                                            </Button>
                                          )}

                                          {/* <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                                        </div>
                                      </Box>
                                    </StepContent>
                                  </Step>
                                ))}
                              </Stepper>
                              {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{ p: 3 }}>
                                  <Typography>
                                    All steps completed - you&apos;re finished
                                  </Typography>
                                  <Button
                                    onClick={handleReset}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    Reset
                                  </Button>
                                </Paper>
                              )}
                            </Box>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
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
            {!showNew && <p>Customize Plan</p>}
            {showNew && <p>Payment Summary</p>}
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          {!showNew && <div className="row mb-3"></div>}

          {showNew && <div></div>}

          <div className="mod-btm">
            {!showNew && (
              <button
                type="button"
                className="addreSIgn signup-btn"
                onClick={handleShowNew}
              >
                Submit
              </button>
            )}
            {showNew && (
              <button type="button" className="addreSIgn signup-btn">
                Continue
              </button>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TenantReportIssue;
