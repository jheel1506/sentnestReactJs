import { useState } from 'react';
import { useRouter } from 'next/router';
import PreviewProperty from '@/component/InputField/PreviewProperty';
import Header from '@/component/InputField/Header';
const PreviewPropertyPage = () => {
  

  return (
    <div>
    <Header />
    <PreviewProperty></PreviewProperty>
    </div>
  );
};

export default PreviewPropertyPage;
