"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button c onClick={() => signIn()} className="text-md">
        Sign In
      </button>
    </li>
  );
}
