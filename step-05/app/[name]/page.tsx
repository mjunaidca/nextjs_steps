//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
    const names: string[] = ["zia", "zeeshan", "hira"];
  
    return names.map((name) => ({
      name: name,
    }));
  }
  
  export default function GiveName({ params }: { params: { name: string } }) {
    console.log("Lahore 123" + params.name);
    
      return (
        <div>
              My name is {params.name}.
              
        </div>
      )
    }