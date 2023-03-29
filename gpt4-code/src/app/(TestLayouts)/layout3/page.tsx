// Import React and the card component
import React from "react";
// import FinalBooksCard from "../../../component/(TestBooks)/InteractiveBooksCard";
import Layout3Card from "../../../component/(TestLayouts)/Layout3Card";
import { books } from "@/utlis/data";

// Define a page component that renders the cards
const BooksPage = () => {
  // Return the JSX for the page
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">Books</h1>
      {/* Use a flexbox container with responsive grid classes */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4">
        {/* Use a map function to render a card for each book */}
        {books.map((book: any) => (
          <Layout3Card book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

// Export the page component
export default BooksPage;
