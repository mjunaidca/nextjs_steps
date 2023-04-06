"use client";
import { useState } from "react";

type Quote = {
  content: string;
  author: string;
};

type Category = "inspirational" | "life" | "love" | "management" | "sports";

async function fetchQuote(category: Category | null): Promise<Quote> {
  const url = category
    ? `https://api.quotable.io/random?tags=${category}`
    : "https://api.quotable.io/random";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  const data = await response.json();

  return {
    content: data.content,
    author: data.author,
  };
}

export default function QuoteGenerator() {
  const [category, setCategory] = useState<Category | null>(null);
  const [quote, setQuote] = useState<Quote | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await fetchQuote(category);
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReload = async () => {
    try {
      const data = await fetchQuote(category);
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShare = () => {
    const tweet = encodeURIComponent(`"${quote?.content}" - ${quote?.author}`);
    const url = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Random Quote Generator</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <label className="text-sm font-bold mr-4">Choose a category:</label>
        <select
          className="rounded bg-gray-100 py-2 px-4"
          value={category || ""}
          onChange={(event) =>
            setCategory(event.target.value as Category | null)
          }
        >
          <option value="">Random</option>
          <option value="inspirational">Inspirational</option>
          <option value="life">Life</option>
          <option value="love">Love</option>
          <option value="management">Management</option>
          <option value="sports">Sports</option>
        </select>
        <button
          className="bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 ml-4"
          type="submit"
        >
          Get Quote
        </button>
      </form>

      <div className="max-w-md px-4 py-8 rounded shadow-md bg-gray-50">
        {quote ? (
          <div>
            <p className="text-lg font-bold">{quote.content}</p>
            <p className="text-sm text-gray-500 mt-2">- {quote.author}</p>
          </div>
        ) : (
          <div className="h-48 flex items-center justify-center">
            <p className="text-lg font-bold">
              Click the button to get a random quote
            </p>
          </div>
        )}
      </div>

      {quote && (
        <div className="mt-8">
          <button
            className="bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 mr-4"
            onClick={handleReload}
          >
            Get Another Quote
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShare}
          >
            Share on Twitter
          </button>
        </div>
      )}
    </div>
  );
}
