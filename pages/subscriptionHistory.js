import { useState } from 'react';
import { useRouter } from 'next/router';
import SubscriptionHistory from '@/component/InputField/SubscriptionHistory';
import Header from '@/component/InputField/Header';
const SubscriptionHistoryPage = () => {
  

  return (
    <div>
<Header />
    <SubscriptionHistory></SubscriptionHistory>
    </div>
    
  );
};

export default SubscriptionHistoryPage;
