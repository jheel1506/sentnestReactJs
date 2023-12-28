import { useState } from 'react';
import { useRouter } from 'next/router';
import TermsCondition from '@/component/InputField/TermsCondition';
import Header from '@/component/InputField/Header';
const TermsConditionPage = () => {
  

  return (
    <div>
    <Header />
    <TermsCondition></TermsCondition>
    </div>
  );
};

export default TermsConditionPage;
