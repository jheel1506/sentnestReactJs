import { useState } from 'react';
import { useRouter } from 'next/router';
import BookingRequest from '@/component/InputField/BookingRequest';
import Header from '@/component/InputField/Header';
const BookingRequestPage = () => {
  

  return (
    <div>
<Header />
    <BookingRequest></BookingRequest>
    </div>
    
  );
};

export default BookingRequestPage;
