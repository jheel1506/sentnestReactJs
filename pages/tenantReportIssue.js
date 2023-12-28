import { useState } from 'react';
import { useRouter } from 'next/router';
import TenantReportIssue from '@/component/InputField/TenantReportIssue';
import Header from '@/component/InputField/Header';
const TenantReportIssuePage = () => {
  

  return (
    <div>
<Header />
    <TenantReportIssue></TenantReportIssue>
    </div>
    
  );
};

export default TenantReportIssuePage;
