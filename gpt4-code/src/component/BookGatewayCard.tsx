import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

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

interface Props {
  book: Book;
}

const BFinalCard = ({ book }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-96 p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-1/2">
        <Image src={book.image} alt={book.name} fill className="rounded-t-lg" />
        {!book.available && (
          <div className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-red-500 rounded-bl-lg">
            Out of stock
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 w-full">
        <h3 className="mt-2 text-sm font-bold text-black">{book.name}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <div className="flex items-center justify-between flex-1 mt-auto">
          <div className="flex items-center space-x-1">
            <AiFillStar className="text-yellow-500" />
            <span>{book.currentStock}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BsBook className="text-blue-500" />
            <span>{book.type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <RiMoneyDollarCircleFill className="text-green-500" />
            <span>${book.price}</span>
          </div>
        </div>
        <button
          className={`flex items-center justify-center w-full py-2 mt-2 text-white rounded-b-lg ${
            book.available
              ? "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!book.available}
        >
          View Details
          <FaShoppingCart className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BFinalCard;
