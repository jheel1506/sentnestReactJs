import { useState } from 'react';
import { useRouter } from 'next/router';
import RentedProperty from '@/component/InputField/RentedProperty';
import Header from '@/component/InputField/Header';
const RentedPropertyPage = () => {
  

  return (
    <div>
<Header />
    <RentedProperty></RentedProperty>
    </div>
    
  );
};

export default RentedPropertyPage;
