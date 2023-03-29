import Image from "next/image";
import Link from "next/link";
import OwlLogo from "./BookOwl.png";

const HomePage = () => {
  // Return the JSX code for rendering the homepage
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src={OwlLogo}
          alt="Your Wise Books"
          className="  h-auto object-cover object-center  -mt-[10%] sm:-mt-[5%] max-w-xs"
        ></Image>
        <h1 className="text-6xl font-bold text-gray-900 mt-2 ">Book Owl</h1>
        <p className=" text-lg md:text-xl text-gray-900 mt-4">
          Your gateway to thousands of books
        </p>

        <Link
          href={"./books-gateway"}
          className="bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg mt-8 hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Browse All Books
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
