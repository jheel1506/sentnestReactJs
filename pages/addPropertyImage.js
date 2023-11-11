import { useState } from 'react';
import { useRouter } from 'next/router';
import AddPropertyImage from '@/component/InputField/AddPropertyImage';
import Header from '@/component/InputField/Header';
const AddPropertyImagePage = () => {
  

  return (
    <div>
    <Header />
    <AddPropertyImage></AddPropertyImage>
    </div>
  );
};

export default AddPropertyImagePage;
