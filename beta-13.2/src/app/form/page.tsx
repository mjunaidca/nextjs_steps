"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      password: e.target.value,
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(person));
    const { name, email, password } = person;

    // const res = await fetch("http://localhost:3000/api/getUser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, password }),
    // });

    // const NEONRES = await res.json();
    // console.log("Returned Data FROM NEON DB", NEONRES);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-md p-6 space-y-4 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl mb-4">Get Details</h1>
      <label className="block">
        <span className="text-gray-700">First name:</span>
        <input
          type="text"
          value={person.name}
          onChange={handleFirstNameChange}
          className="block w-full mt-1 px-2 py-2 border border-gray-300 rounded-md focus:ring focus:border-blue-400"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={person.password}
          onChange={handlePasswordChange}
          className="block w-full mt-1 px-2 py-2 border border-gray-300 rounded-md focus:ring focus:border-blue-400"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={person.email}
          onChange={handleEmailChange}
          className="block w-full mt-1 px-2 py-2 border border-gray-300 rounded-md focus:ring focus:border-blue-400"
        />
      </label>
      <button className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">
        Submit
      </button>
    </form>
  );
}
