import React from 'react'



export default function slug( { params, }: { params: {slug: string} } ) {
  return (
    <div>My SlugTest {params.slug}</div>
  )
}
