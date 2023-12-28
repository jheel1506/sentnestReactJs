import { useState } from 'react';
import { useRouter } from 'next/router';
import VerifyPublish from '@/component/InputField/VerifyPublish';
import Header from '@/component/InputField/Header';
const VerifyPublishPage = () => {
  

  return (
    <div>
<Header />
    <VerifyPublish></VerifyPublish>
    </div>
    
  );
};

export default VerifyPublishPage;
