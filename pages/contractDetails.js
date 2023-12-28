import { useState } from 'react';
import { useRouter } from 'next/router';
import ContractDetails from '@/component/InputField/ContractDetails';
import Header from '@/component/InputField/Header';
const ContractDetailsPage = () => {
  

  return (
    <div>
<Header />
    <ContractDetails></ContractDetails>
    </div>
    
  );
};

export default ContractDetailsPage;
