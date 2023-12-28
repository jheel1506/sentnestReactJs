import { useState } from 'react';
import { useRouter } from 'next/router';
import PaymentDetails from '@/component/InputField/PaymentDetails';
import Header from '@/component/InputField/Header';
const PaymentDetailsPage = () => {
  

  return (
    <div>
<Header />
    <PaymentDetails></PaymentDetails>
    </div>
    
  );
};

export default PaymentDetailsPage;
