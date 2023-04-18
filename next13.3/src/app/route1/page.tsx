"use client";

import { useRouter } from "next/navigation";

async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//   const router = useRouter();
// <button type="button" onClick={() => router.back()}>
//   Go Back
// </button>
const Page = async () => {
  const quote = await getData();

  return <div>{quote.content}</div>;
};

export default Page;
