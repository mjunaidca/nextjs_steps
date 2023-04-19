"use client";
import { useState } from "react";

const FAQCARD = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleIsOpen} className="px-4 py-5 bg-blue-500 text-white">
        <h2 className="text-4xl">
          Can we use nextjs with hardhat and solidity!
        </h2>
      </div>

      <div
        className={`bg-blue-950 text-white overflow-hidden duration-700 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <p className="py-5 px-4">
          Yes, you can use Next.js with Hardhat and Solidity for building
          Ethereum-based decentralized dApps. Next.js is a popular React
          framework that enables server-rendered React applications with
          optimized features for production.
        </p>
      </div>
    </div>
  );
};

export default FAQCARD;
