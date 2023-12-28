import { useState } from 'react';
import { useRouter } from 'next/router';
import SchedulerEvent from '@/component/InputField/SchedulerEvent';
import Header from '@/component/InputField/Header';
const SchedulerEventPage = () => {
  

  return (
    <div>
<Header />
    <SchedulerEvent></SchedulerEvent>
    </div>
    
  );
};

export default SchedulerEventPage;
