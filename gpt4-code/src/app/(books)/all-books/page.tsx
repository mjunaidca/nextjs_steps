// all-books.tsx
import React from "react";
import AllBooks from "../../component/books";

// Define the data for the books as an array of objects
const books = [
  {
    id: 1,
    name: "The Russian The Russian The Russian The Russian The Russian The Russian",
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
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fiction",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    type: "non-fiction",
    price: 14.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 1,
    name: "The Russian The Russian The Russian The Russian The Russian The Russian",
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
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fiction",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    type: "non-fiction",
    price: 14.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    id: 1,
    name: "The Russian The Russian The Russian The Russian The Russian The Russian",
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
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fiction",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    type: "non-fiction",
    price: 14.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
];

// Define the page component
const AllBooksPage = () => {
  // Return the JSX element for the page
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">All books</h1>
      {/* Use a flexbox grid to render the cards responsively */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          // Pass the book data as props to the card component
          <AllBooks {...book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
