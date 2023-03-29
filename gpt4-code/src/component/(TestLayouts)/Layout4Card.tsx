// Import React and NextJS Image component
import React from "react";
import Image from "next/image";
import { BOOKINTERFACE } from "@/utlis/types";

// Define the BookCard component
const Layout4Card: React.FC<BOOKINTERFACE> = ({
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
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-fade-in">
      {/* Show a red badge if the book is out of stock */}
      {!available && (
        // Add z-10 to the div element to make it appear above the image
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded-bl-lg z-10">
          Out of stock
        </div>
      )}
      {/* Show the book cover image */}
      <div className="h-48 w-full relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      {/* Show the book details */}
      <div className="flex flex-col p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-gray-500 text-sm truncate">{author}</p>
        <p className="text-gray-500 text-sm truncate">ISBN: {isbn}</p>
        <p className="text-gray-500 text-sm truncate">Type: {type}</p>
        {/* Show the buy now button if the book is in stock */}
        {available && (
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Buy now for ${price}
          </button>
        )}
      </div>
    </div>
  );
};

// Export the BookCard component
export default Layout4Card;
