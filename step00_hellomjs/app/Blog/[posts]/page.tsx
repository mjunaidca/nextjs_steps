import Link from 'next/link';


export default function PostList({ params }: any) {

    const posting = params.posts;

  return (
    <ul>
        <li >{posting}</li>
          <Link href={`/`}> Go to Home:  
            {posting}
          </Link>   
      
    </ul>
  );
}