// index.tsx
import React from "react";
import Layout2Card from "@/component/(TestLayouts)/Layout2Card";
import { books } from "@/utlis/data";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {/* Loop through the books array and render a card for each book */}
      {books.map((book: any) => (
        <Layout2Card key={book.bookname} {...book} />
      ))}
    </div>
  );
}
