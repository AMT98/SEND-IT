"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  return (
    <form className="bg-white my-8 p">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
    </form>
  );
}
