import { useState } from 'react';
import { useRouter } from 'next/router';
import Contract from '@/component/InputField/Contract';
import Header from '@/component/InputField/Header';
const ContractPage = () => {
  

  return (
    <div>
<Header />
    <Contract></Contract>
    </div>
    
  );
};

export default ContractPage;
