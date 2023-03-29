// Import React and the card component
import React from "react";
import FinalBooksCard from "../../component/(TestBooks)/InteractiveBooksCard";

// Define an array of books
const books = [
  {
    id: 1,
    name: "The Russian",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
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
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
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
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 2,
    name: "The Japanese",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
];

// Define a page component that renders the cards
const BooksPage = () => {
  // Return the JSX for the page
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">Books</h1>
      {/* Use a flexbox container with responsive grid classes */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4">
        {/* Use a map function to render a card for each book */}
        {books.map((book) => (
          <FinalBooksCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

// Export the page component
export default BooksPage;
