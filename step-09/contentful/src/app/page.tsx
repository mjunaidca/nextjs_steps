import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { cache } from "react";

const inter = Inter({ subsets: ["latin"] });

async function getBlogPosts() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPost`,
    { cache: "no-store" }
  );
  // const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
  //   { cache: "no-store" }
  // );

  if (!res.ok) {
    throw new Error("Failed to get blog posts");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogPosts();
  console.log(blogs);

  return (
    <main>
      <ul>
        {blogs.items.map((item: any) => (
          <div key={item}>
            <li>{item.fields.title}</li>
            <li>{item.fields.dataTime}</li>
          </div>
        ))}
      </ul>
    </main>
  );
}
