"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle]
  return (
    <form>
      <div>
        <textarea name="title" value={title}></textarea>
      </div>
    </form>
  );
}
