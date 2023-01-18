'use client';
import { useRouter } from 'next/navigation';


export default function Page({params}: {params: any}) {
  const router = useRouter();
  const skills = params.skills;

  return ( <div>
     <div>I am a meta dev aka business with skillset including {skills}</div>
    <button onClick={() => router.push('/')}>
      Go Back To Home Page
    </button>
    </div>);
}

// import React from 'react'

// export default function Productpage({params}: {params: any}) {

//     const skills = params.skills;

//   return (
//    
//   )
// }