// Import React and the BookCard component
import React from "react";
// import BookResponsiveCard from "../../component/(TestBooks)/BooksResponsiveCard";
import Layout4Card from "@/component/(TestLayouts)/Layout4Card";
// Define the interface for the book data
import { books } from "@/utlis/data";

// Define the Page component
const Page: React.FC = () => {
  // Return the JSX element for the page
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Books</h1>
      {/* Use tailwind css classes to make a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map over the books array and render a BookCard for each book */}
        {books.map((book: any) => (
          <div key={book.id}>
            <Layout4Card key={book.id} {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Page component
export default Page;
