// all-books.tsx
import React from "react";
import Layout1Card from "@/component/(TestLayouts)/Layout1Card";
import { books } from "@/utlis/data";

// Define the page component
const AllBooksPage = () => {
  // Return the JSX element for the page
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">All books</h1>
      {/* Use a flexbox grid to render the cards responsively */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book: any) => (
          // Pass the book data as props to the card component
          <div key={book.id}>
            <Layout1Card {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
