import { useState } from 'react';
import { useRouter } from 'next/router';
import Availability from '@/component/InputField/Availability';
import Header from '@/component/InputField/Header';
const AvailabilityPage = () => {
  

  return (
    <div>
<Header />
    <Availability></Availability>
    </div>
    
  );
};

export default AvailabilityPage;
