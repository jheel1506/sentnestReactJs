import { useState } from 'react';
import { useRouter } from 'next/router';
import HelpSupport from '@/component/InputField/HelpSupport';
import Header from '@/component/InputField/Header';
const HelpSupportPage = () => {
  

  return (
    <div>
<Header />
    <HelpSupport></HelpSupport>
    </div>
    
  );
};

export default HelpSupportPage;
