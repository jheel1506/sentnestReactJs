import { useState } from 'react';
import { useRouter } from 'next/router';
import FinancialInformation from '@/component/InputField/FinancialInformation';
import Header from '@/component/InputField/Header';
const FinancialInformationPage = () => {
  

  return (
    <div>
<Header />
    <FinancialInformation></FinancialInformation>
    </div>
    
  );
};

export default FinancialInformationPage;
