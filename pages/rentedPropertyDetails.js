import { useState } from 'react';
import { useRouter } from 'next/router';
import RentedPropertyDetails from '@/component/InputField/RentedPropertyDetails';
import Header from '@/component/InputField/Header';
const RentedPropertyDetailsPage = () => {
  

  return (
    <div>
<Header />
    <RentedPropertyDetails></RentedPropertyDetails>
    </div>
    
  );
};

export default RentedPropertyDetailsPage;
