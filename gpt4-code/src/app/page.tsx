"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./component/Navbar";

export default function Page() {
  const router = useRouter();
  return (
    <div>
     
      Try BookCard Reusable and Responsive Component
      <br />
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}

