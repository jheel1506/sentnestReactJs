import { useState } from 'react';
import { useRouter } from 'next/router';
import ContractPayment from '@/component/InputField/ContractPayment';
import Header from '@/component/InputField/Header';
const ContractPaymentPage = () => {
  

  return (
    <div>
<Header />
    <ContractPayment></ContractPayment>
    </div>
    
  );
};

export default ContractPaymentPage;
