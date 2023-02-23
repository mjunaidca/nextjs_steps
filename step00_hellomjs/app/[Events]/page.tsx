
// export async function generateStaticParams() {
//   const myEvents: string[]=['futurefest', 'meetups', 'fun'];

//   return myEvents.map((Events) => ({
//     Events: Events,
//   }));
// }



export default function GiveName({ params }: {
  params: { Events: string },
}) {
  console.log(params.Events);
  
  
    return (
      <div>
            My name is {params.Events}.
      </div>
    )
  }