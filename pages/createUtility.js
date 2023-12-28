import { useState } from 'react';
import { useRouter } from 'next/router';
import CreateUtilities from '@/component/InputField/CreateUtilities';
import Header from '@/component/InputField/Header';
const CreateUtilityPage = () => {
  

  return (
    <div>
    <Header />
    <CreateUtilities></CreateUtilities>
    </div>
  );
};

export default CreateUtilityPage;
