// BooksResponsiveCard.tsx
import React from "react";
import { BOOKINTERFACE } from "@/utlis/types";

// Define the component function
const Layout1Card: React.FC<BOOKINTERFACE> = ({
  id,
  name,
  author,
  isbn,
  type,
  price,
  currentStock,
  available,
  image,
}) => {
  // Return the JSX element for the card
  return (
    <div
      className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:bg-gray-100 hover:scale-105"
      key={id}
    >
      {/* Show a badge if the book is out of stock */}
      {!available && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded-bl-lg">
          Out of stock
        </div>
      )}
      {/* Show the book image */}
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      {/* Show the book name and author */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{author}</p>
      </div>
      {/* Show the book details and price */}
      <div className="flex items-center justify-between p-4 mt-auto">
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-gray-500">ISBN: {isbn}</span>
          <span className="text-sm text-gray-500">Type: {type}</span>
          <span className="text-sm text-gray-500">
            Current stock: {currentStock}
          </span>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <span className="text-lg font-bold text-green-600">${price}</span>
          {/* Show a buy now button if the book is available */}
          {available ? (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Buy now
            </button>
          ) : (
            // Show a disabled button if the book is not available
            <button
              className="bg-gray-300 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Buy now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout1Card;
