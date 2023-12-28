import { useState } from 'react';
import { useRouter } from 'next/router';
import PropertyDetails from '@/component/InputField/PropertyDetails';
import Header from '@/component/InputField/Header';
const PropertyDetailsPage = () => {
  

  return (
    <div>
    <Header />
    <PropertyDetails></PropertyDetails>
    </div>
  );
};

export default PropertyDetailsPage;
