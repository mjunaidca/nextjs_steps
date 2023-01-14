'use client';

import React from 'react'


import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();

  return (<div>
    <h2>MyName Page</h2>

    <button onClick={() => router.push('/')}>
      Go Back To Home Page </button>

      <button onClick={()=> router.push('/name/address')}>
      Get Address </button>
    </div>);

  }


