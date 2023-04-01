import DynamicDisplayCard from "@/component/DynamicDisplayCard";
import { books } from "@/utlis/data";

export async function generateStaticParams() {
  return books.map((book: any) => ({
    bookId: book.id,
  }));
}
export default function page({ params }: { params: { id: number } }) {
  const book = books.find((book) => book.id === Number(params.id));
  return (
    <div>
      page: {params.id}
      {book ? (
        <DynamicDisplayCard book={book} />
      ) : (
        <p>Sorry we couldnot find the book you are looking for</p>
      )}
    </div>
  );
}
