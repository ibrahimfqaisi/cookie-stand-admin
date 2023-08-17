import Link from "next/link";

export default function  Header() {
    return (
  <header className="p-4 text-white bg-green-500 flex justify-between items-center">
    <h1 className="text-4xl">Cookie Stand Admin</h1>
  
    <button
    
      type="submit"
      className="p-2 text-white bg-green-500 rounded"
    >
      <Link href={"assets/overview"}>
      Create
      </Link>
    </button>
  </header>
  
    )
  }