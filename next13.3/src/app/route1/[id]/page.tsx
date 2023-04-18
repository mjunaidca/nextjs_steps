import React from "react";

export async function generateStaticParams() {
  const dev_id: string[] = ["mas", "mjs", "mhs"];

  return dev_id.map((name) => ({
    id: name,
  }));
}

const page = ({ params }: { params: { id:string } }) => {
  const devId = params.id;
  return <div>page: {devId} </div>;
};

export default page;

