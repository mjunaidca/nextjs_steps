
export async function generateStaticParams() {
  const ids: string[]=['zia', 'hira', 'zeeshan'];

  return ids.map((id) => ({
    id: id,
  }));
}



export default function GiveName({ params }: {
    params: { id: string },
  }) {
    console.log(params.id);
    
    
      return (
        <div>
              My name is {params.id}.
        </div>
      )
    }