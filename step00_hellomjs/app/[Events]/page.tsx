
export async function generateStaticParams() {
  const myEvents: string[]=['futurefest', 'meetups', 'fun'];

  return myEvents.map((Events) => ({
    Events: Events,
  }));
}



export default function GiveName({ params, searchParams }: {
  params: { Events: string },
  searchParams: { id: string },
}) {
  
    return (
      <div>
            My name is {params.Events}.
      </div>
    )
  }