// index.tsx
import React from "react";
import BookCard from "../../component/bookCard";

// Define some sample data for testing
const books = [
  {
    bookname: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    stock: true,
    quantity: 1,
    type: "Fantasy",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    bookname: `The Hitchhiker's Guide to the Galaxy`,
    author: "Douglas Adams",
    stock: false,
    quantity: 0,
    type: "Science Fiction",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
  {
    bookname: `The Hitchhiker's Guide to the Galaxy`,
    author: "Douglas Adams",
    stock: false,
    quantity: 0,
    type: "Science Fiction",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Loop through the books array and render a card for each book */}
      {books.map((book) => (
        <BookCard key={book.bookname} {...book} />
      ))}
    </div>
  );
}
