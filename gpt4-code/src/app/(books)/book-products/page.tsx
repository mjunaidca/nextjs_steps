// Import React and the BookCard component
import React from "react";
import BookResponsiveCard from "../../component/BooksResponsiveCard";

// Define the interface for the book data
interface Book {
  id: number;
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  currentStock: number;
  available: boolean;
  img: string;
}

// Define the Page component
const Page: React.FC = () => {
  // Define an array of books as mock data
  const books: Book[] = [
    {
      id: 1,
      name: "The Russian",
      author: "James Patterson and James O. Born",
      isbn: "1780899475",
      type: "fiction",
      price: 12.98,
      currentStock: 12,
      available: true,
      img: "https://images.unsplash.com/photo-1675880935779-8b116ef97811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "The Midnight Library",
      author: "Matt Haig",
      isbn: "1786892723",
      type: "fiction",
      price: 10.99,
      currentStock: 8,
      available: true,
      img: "https://images.unsplash.com/photo-1675868374160-42bac12cbcdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      id: 3,
      name: "Atomic Habits",
      author: "James Clear",
      isbn: "1847941834",
      type: "non-fiction",
      price: 11.99,
      currentStock: 0,
      available: false,
      img: "https://images.unsplash.com/photo-1675880935779-8b116ef97811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "The Russian",
      author: "James Patterson and James O. Born",
      isbn: "1780899475",
      type: "fiction",
      price: 12.98,
      currentStock: 12,
      available: true,
      img: "https://images.unsplash.com/photo-1675880935779-8b116ef97811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "The Midnight Library",
      author: "Matt Haig",
      isbn: "1786892723",
      type: "fiction",
      price: 10.99,
      currentStock: 8,
      available: true,
      img: "https://images.unsplash.com/photo-1675942206949-0ca35f686de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Atomic Habits",
      author: "James Clear",
      isbn: "1847941834",
      type: "non-fiction",
      price: 11.99,
      currentStock: 0,
      available: false,
      img: "https://images.unsplash.com/photo-1675880935779-8b116ef97811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "The Midnight Library",
      author: "Matt Haig",
      isbn: "1786892723",
      type: "fiction",
      price: 10.99,
      currentStock: 8,
      available: true,
      img: "https://images.unsplash.com/photo-1675942206949-0ca35f686de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Atomic Habits",
      author: "James Clear",
      isbn: "1847941834",
      type: "non-fiction",
      price: 11.99,
      currentStock: 0,
      available: false,
      img: "https://images.unsplash.com/photo-1675880935779-8b116ef97811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    // Add more books as you like
  ];

  // Return the JSX element for the page
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Books</h1>
      {/* Use tailwind css classes to make a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map over the books array and render a BookCard for each book */}
        {books.map((book) => (
          <BookResponsiveCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

// Export the Page component
export default Page;
