"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button onClick={() => signIn()} className="text-md bg-gray-300">
        Sign In
      </button>
    </li>
  );
}
