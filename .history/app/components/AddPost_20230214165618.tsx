'use client'

export default function CreatePost(){
  return (
    <form>
      <div>
        <textarea name='title' value={title}></textarea>
      </div>
    </form>
  )
}