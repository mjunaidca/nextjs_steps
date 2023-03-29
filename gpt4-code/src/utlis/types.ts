export interface BOOKINTERFACE {
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

export interface BOOKPROPS {
    book: BOOKINTERFACE; // the book data to display on the card
}

export interface PAGELINK {
    name: string;
    link: string;
  }