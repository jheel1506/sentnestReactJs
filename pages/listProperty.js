import { useState } from 'react';
import { useRouter } from 'next/router';
import ListProperty from '@/component/InputField/ListProperty';
import Header from '@/component/InputField/Header';
const ListPropertyPage = () => {
  

  return (
    <div>
<Header />
    <ListProperty></ListProperty>
    </div>
    
  );
};

export default ListPropertyPage;
