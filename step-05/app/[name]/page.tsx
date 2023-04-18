//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira"];

  return names.map((name) => ({
    name: name,
  }));
}

export default function GiveName({ params }: { params: { name: string } }) {
  console.log("Dev ID" + params.name);

  const dev_id = params.name;

  return <div>My name is {dev_id}.</div>;
}
