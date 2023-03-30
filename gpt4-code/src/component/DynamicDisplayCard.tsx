// BooksResponsiveCard.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  image: string;
}

// Define the props for the component
interface Props {
  book: Book;
}

// Define the component
const DynamicDisplayCard: React.FC<Props> = ({ book }) => {
  const router = useRouter();

  return (
    <div className="flex justify-center item-center">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 m-4 rounded-lg shadow-lg w-80 h-96 relative overflow-hidden">
        {/* show out of stock badge if book is not available */}
        <div>
          {!book.available && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
              Out of stock
            </div>
          )}
          {/* show book image as background with low opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${book.image})` }}
          ></div>
          {/* show book name as title */}
          <h1 className="text-3xl font-bold text-gray-800">{book.name}</h1>
          {/* show book author as subtitle */}
          <h2 className="text-sm text-gray-600">{book.author}</h2>
          {/* show book details in a separate div at the bottom with mt-auto */}
          <div className="mt-auto flex flex-col items-center justify-center w-full">
            {/* show book isbn, type, price and current stock as list items */}
            <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
              <li>
                <strong>ISBN:</strong> {book.isbn}
              </li>
              <li>
                <strong>Type:</strong> {book.type}
              </li>
              <li>
                <strong>Price:</strong> ${book.price}
              </li>
              <li>
                <strong>Stock:</strong> {book.currentStock}
              </li>
            </ul>
            {/* show buy now and go back buttons with icons and animations */}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-4 mt-4">
        {/* disable buy now button if book is not available and add dim color */}
        <button
          className={`flex items-center justify-center px-4 py-2 rounded-lg bg-green-500 text-white ${
            !book.available && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!book.available}
        >
          <FaShoppingCart className="mr-2 animate-bounce" />
          Buy Now
        </button>
        {/* add go back button with arrow icon and hover effect */}
        <button
          className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="mr-2 animate-pulse" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DynamicDisplayCard;
