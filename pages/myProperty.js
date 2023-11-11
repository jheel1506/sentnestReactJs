import { useState } from 'react';
import { useRouter } from 'next/router';
import MyProperty from '@/component/InputField/MyProperty';
import Header from '@/component/InputField/Header';
const MyPropertyPage = () => {
  

  return (
    <div>
        <Header />
    <MyProperty></MyProperty>
    </div>
  );
};

export default MyPropertyPage;
