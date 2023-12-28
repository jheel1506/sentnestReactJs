import { useState } from 'react';
import { useRouter } from 'next/router';
import PaymentPayout from '@/component/InputField/PaymentPayout';
import Header from '@/component/InputField/Header';
const PaymentPayoutPage = () => {
  

  return (
    <div>
<Header />
    <PaymentPayout></PaymentPayout>
    </div>
    
  );
};

export default PaymentPayoutPage;
