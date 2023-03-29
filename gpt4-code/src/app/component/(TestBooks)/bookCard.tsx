// BookCard.tsx
import React from "react";
import Image from "next/image";

// Define the props for the book card component
type BookCardProps = {
  bookname: string;
  author: string;
  stock: boolean;
  quantity: number;
  type: string;
  price: number;
  image: string;
};

// Create a reusable book card component
export default function BookCard({
  bookname,
  author,
  stock,
  quantity,
  type,
  price,
  image,
}: BookCardProps) {
  return (
    // Add a hover effect to scale up the card slightly and add a subtle shadow
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-102 hover:shadow-md transition duration-300">
      {/* Display the book image using next/image component */}
      <Image src={image} alt={bookname} width={400} height={300} />

      <div className="px-6 py-4">
        {/* Display the book name and author */}
        <div className="font-bold text-xl mb-2">{bookname}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>

      <div className="mt-auto">
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          {/* Display the stock status using a badge */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
              stock ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200"
            }`}
          >
            {stock ? "In Stock" : "Out of Stock"}
          </span>
          {/* Display the quantity using a number input */}
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            className="border border-gray-300 rounded w-16 h-8 text-center"
          />
        </div>

        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          {/* Display the book type and price */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {type}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${price}
          </span>
        </div>

        {/* Add two buttons for check details and buy now */}
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          {/* Use tailwind css button styles */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check Details
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
