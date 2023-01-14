'use client';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')}>
      Go Back To Home Page
    </button>
  );
}

// import React from 'react'

// export default function Productpage({params}: {params: any}) {

//     const skills = params.skills;

//   return (
//     <div>I am a meta dev aka business with skillset including {skills}</div>
//   )
// }