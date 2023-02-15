"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <div>
        <textarea onChange={(e) => setT} name="title" value={title}></textarea>
      </div>
    </form>
  );
}
