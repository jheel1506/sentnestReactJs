import { useState } from 'react';
import { useRouter } from 'next/router';
import ContractDocument from '@/component/InputField/ContractDocument';
import Header from '@/component/InputField/Header';
const ContractDocumentPage = () => {
  

  return (
    <div>
<Header />
    <ContractDocument></ContractDocument>
    </div>
    
  );
};

export default ContractDocumentPage;
