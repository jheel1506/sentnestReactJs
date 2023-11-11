// components/Header.js
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import Image from 'next/image'
import  setnestlogo from '../../../public/assets/Setnest-copy.png';
import  profilePic from '../../../public/assets/profile-head.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
const Header = () => {
  return (
    <>
    <Navbar  data-bs-theme="light" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
            <Image src={setnestlogo} alt='logo' className={'img-fluid ' + styles.topLogo} />
      </Navbar.Brand>
      <Nav className="justify-content-end align-items-center">
      
            <Nav.Link href="#">
                <div className='header-profile'>
                <span>Hello <br></br><h5>Sumit Kumar</h5> </span> <Badge bg="light">
                    <Image src={profilePic} alt='profile' className='img-fluid' />
                    
                </Badge>
                </div>
       
            </Nav.Link>
            <Nav.Link href="#" className='position-relative'>
            <FontAwesomeIcon icon={faBell} className='img-fluid bellIcon' />
            <Badge bg='#F9415A' className='notify'>2</Badge>
            </Nav.Link>
            <Nav.Link href="#" className='position-relative'>
            <FontAwesomeIcon icon={faEllipsisVertical} className='img-fluid' width={'6px'} color='#AAAAAA' />
            
            </Nav.Link>
            
          </Nav>
          
          
    </Container>
    
  </Navbar>
  
    </>
    
  );
};

export default Header;
