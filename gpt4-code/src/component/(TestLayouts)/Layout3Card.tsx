import Image from "next/image";
import React from "react";
import { FaBook, FaDollarSign, FaShoppingCart } from "react-icons/fa"; // using react-icons for icons
import { BOOKPROPS } from "@/utlis/types";

const Layout3Card: React.FC<BOOKPROPS> = ({ book }) => {
  // a function to format the price with two decimal places and a dollar sign
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  // a function to render the out of stock badge if the book is not available
  const renderOutOfStockBadge = () => {
    if (!book.available) {
      return (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
          Out of stock
        </div>
      );
    }
  };

  // a function to render the buy now button with different styles depending on the availability of the book
  const renderBuyNowButton = () => {
    if (book.available) {
      return (
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          Buy now
        </button>
      );
    } else {
      return (
        <button className="bg-gray-300 text-gray-500 font-bold px-4 py-2 rounded-lg shadow-lg cursor-not-allowed">
          Buy now
        </button>
      );
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-64 h-96 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
      {renderOutOfStockBadge()}
      <div>
        <Image src={book.image} alt={book.name} width={350} height={300} />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-auto p-4">
        <h3 className="text-lg font-bold text-gray-800">{book.name}</h3>
        <p className="text-sm font-medium text-gray-600">{book.author}</p>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex items-center space-x-1">
            <FaBook className="text-gray-500" />
            <span className="text-gray-500">{book.type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaDollarSign className="text-gray-500" />
            <span className="text-gray-500">{formatPrice(book.price)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex items-center space-x-1">
            <FaShoppingCart className="text-gray-500" />
            <span className="text-gray-500">{book.currentStock}</span>
          </div>
          {renderBuyNowButton()}
        </div>
      </div>
    </div>
  );
};

export default Layout3Card;
