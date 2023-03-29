import BFinalCard from "@/component/BookGatewayCard";
import { books } from "@/utlis/data";

const BooksPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Books Store</h1>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: any) => (
          <BFinalCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
