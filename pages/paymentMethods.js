import { useState } from 'react';
import { useRouter } from 'next/router';
import PaymentMethods from '@/component/InputField/PaymentMethods';
import Header from '@/component/InputField/Header';
const PaymentMethodsPage = () => {
  

  return (
    <div>
<Header />
    <PaymentMethods></PaymentMethods>
    </div>
    
  );
};

export default PaymentMethodsPage;
