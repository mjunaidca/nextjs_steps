import DynamicDisplayCard from "@/component/DynamicDisplayCard";
import { books } from "@/utlis/data";

// Generate the static paths for the books-gateway/[id] route
// export async function generateStaticParams() {
//   // Map over the books array and return an object with the id param for each book
//   const paths = books.map((book) => ({
//     params: {
//       id: book.id.toString(),
//     },
//   }));

//   // Return the paths array
//   return paths;
// }

// export default async function page({ params }: { params: { id: number } }) {
//   const id = Number(params.id);

//   const book = books.find((book) => book.id === id);

//   if (book) {
//     // Return a JSX element with the book details
//     return (
//       <div>
//         page:
//         <h1>{book.name}</h1>
//         <p>Author: {book.author}</p>
//         <p>ISBN: {book.isbn}</p>
//         <p>Type: {book.type}</p>
//         <p>Price: ${book.price}</p>
//         <p>Current stock: {book.currentStock}</p>
//         <p>Available: {book.available ? "Yes" : "No"}</p>
//         <img src={book.image} alt={book.name} />
//       </div>
//     );
//   } else {
//     // Return a JSX element with an error message
//     return (
//       <div>
//         page:
//         <h1>Book not found</h1>
//         <p>The book with id {params.id} does not exist.</p>
//       </div>
//     );
//   }
// }

export async function generateStaticParams() {
  // Map over the books array and return an object with the book id for each book
  return books.map((book) => ({
    bookId: book.id,
  }));
}
export default function page({ params }: { params: { id: number } }) {
  // Find the book that matches the book id from the params
  const book = books.find((book) => book.id === Number(params.id));
  // Return a div element with the book name or a message if the book is not found
  return (
    <div>
      page: {params.id}
      {book ? (
        // <h1>{book.name}</h1>
        <DynamicDisplayCard book={book} />
      ) : (
        <p>Sorry, we couldn't find the book you are looking for.</p>
      )}
    </div>
  );
}
