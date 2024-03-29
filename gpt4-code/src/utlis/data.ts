import { PAGELINK, BOOKINTERFACE } from './types'

export const books: BOOKINTERFACE[] = [

  {
    id: 2,
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fantasy",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    type: "self-help",
    price: 11.99,
    currentStock: 5,
    available: true,
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
  },
  {
    id: 5,
    name: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1466690672306-5f92132f7248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    name: "The Charlie, The Mackesy, The Mackesy and The Charlie",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1581079289103-0544b7dfad66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },

  {
    id: 7,
    name: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: true,
    image:
      "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
  },
  {
    id: 2,
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fantasy",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    name: "Atomic Habits",
    author: "James Clear",
    isbn: "1847941834",
    type: "self-help",
    price: 11.99,
    currentStock: 5,
    available: true,
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 1,
    name: "The Russian",
    author: "James Patterson and James O. Born",
    isbn: "1780899475",
    type: "fiction",
    price: 12.98,
    currentStock: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
  },
  {
    id: 6,
    name: "The Charlie, The Mackesy, The Mackesy and The Charlie",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1581079289103-0544b7dfad66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 7,
    name: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
    isbn: "1529105102",
    type: "children",
    price: 9.99,
    currentStock: 0,
    available: true,
    image:
      "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
  },
  {
    id: 2,
    name: "The Midnight Library",
    author: "Matt Haig",
    isbn: "1786892723",
    type: "fantasy",
    price: 10.99,
    currentStock: 8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];



// The array of page links
export const pageLinks: PAGELINK[] = [
  { name: "All Books", link: "books-gateway" },
  // { name: "Layout 1", link: "/layout1" },
  // { name: "Layout 2", link: "/layout2" },
  // { name: "Layout 3", link: "/layout3" },
  // { name: "Layout 4", link: "/layout4" },
];

