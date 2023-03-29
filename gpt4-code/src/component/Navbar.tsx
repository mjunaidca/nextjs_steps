"use client";

// NAVBAR.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import OwlLogo from "../app/BookOwl.png";
import { pageLinks } from "@/utlis/data";

// The Navbar component
const Navbar = () => {
  // The state for the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // The function to handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: implement the logic to handle the search input change
    console.log(e.target.value);
  };

  // The function to handle the search submit
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submit action
    e.preventDefault();
    // Get the search input value
    const searchValue = e.currentTarget.search.value;
    // TODO: implement the logic to perform the search query
    console.log(searchValue);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* The logo and search bar group */}
        <div className="flex items-center space-x-4">
          {/* The logo */}
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image src={OwlLogo} alt="Book Store" width={80} height={80} />
            </div>
          </Link>
          {/* The search bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 px-8">
            <input
              type="text"
              name="search"
              placeholder="Enter book ID"
              onChange={handleSearchChange}
              className="w-full bg-black border border-gray-400 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </form>
        </div>
        {/* The pages and button group */}
        <div className="flex items-center space-x-4">
          {/* The pages */}
          <ul className="hidden md:flex items-center space-x-8 max-w-2xl">
            {" "}
            {
              // Added space-x-8 and max-w-2xl here
            }{" "}
            {pageLinks.map((pageLink) => (
              <li key={pageLink.name}>
                <Link
                  href={pageLink.link}
                  className="hover:text-gray-400"
                  passHref
                >
                  {pageLink.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* The button */}
          <Link href="/buy-now" passHref>
            <button className="bg-white text-black px-4 py-2 rounded-full ml-7 hover:bg-gray-200 hidden md:flex">
              Buy Now
            </button>
          </Link>
          {/* The mobile menu toggle */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose className="text-white text-2xl" />
            ) : (
              <AiOutlineMenu className="text-white text-2xl" />
            )}
          </div>
        </div>
      </div>
      {/* The mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white px-4 py-2 space-y-2 h-full max-h-screen">
          {pageLinks.map((pageLink) => (
            <li key={pageLink.name}>
              <Link
                href={pageLink.link}
                className="block hover:text-gray-400"
                passHref
              >
                {pageLink.name}
              </Link>
            </li>
          ))}
          <Link href="/buy-now" passHref>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 flex md:hidden">
              Buy Now
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
