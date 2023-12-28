import { useState } from 'react';
import { useRouter } from 'next/router';
import AccountDetail from '@/component/InputField/AccountDetail';
import Header from '@/component/InputField/Header';
const AccountDetailPage = () => {
  

  return (
    <div>
<Header />
    <AccountDetail></AccountDetail>
    </div>
    
  );
};

export default AccountDetailPage;
