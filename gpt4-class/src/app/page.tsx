import Image from "next/image";


export default function Home() {
  const Dev =
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const handleLoadingComplete = (img: any) => {
    console.log("Image loaded:", img.src);
  };

  return (
    <main>
      <h1>Welcome</h1>
      <div className="gap-9">
        <Image src={Dev} width={500} height={500} alt="Picture of the author" />
      </div>
    </main>
  );
}
