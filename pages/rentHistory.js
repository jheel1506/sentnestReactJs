import { useState } from 'react';
import { useRouter } from 'next/router';
import RentHistory from '@/component/InputField/RentHistory';
import Header from '@/component/InputField/Header';
const RentHistoryPage = () => {
  

  return (
    <div>
<Header />
    <RentHistory></RentHistory>
    </div>
    
  );
};

export default RentHistoryPage;
