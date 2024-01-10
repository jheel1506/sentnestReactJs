import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchProperty from '@/component/InputField/SearchProperty';
import Header from '@/component/InputField/Header';
const SearchPropertyPage = () => {
  

  return (
    <div>
        <Header />
    <SearchProperty></SearchProperty>
    </div>
  );
};

export default SearchPropertyPage;
