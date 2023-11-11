import { useState } from 'react';
import { useRouter } from 'next/router';
import ListerDashboard from '@/component/InputField/ListerDashboard';
import Header from '@/component/InputField/Header';
const ListerDashboardPage = () => {
  

  return (
    <div>
        <Header />
    <ListerDashboard></ListerDashboard>
    </div>
  );
};

export default ListerDashboardPage;
