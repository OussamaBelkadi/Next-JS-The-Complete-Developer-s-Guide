import { db } from "@/db"
import Link from "next/link"
import * as actions from "@/actions"

export  default async function Home() {
  const snippet = await db.snippet.findMany();
  const deleteSnippet = actions.deleteSnippet.bind(null, 2)

  const result  = snippet.map((snippet)=>{
    
    return (
      <div className=" border my-2 text-3xl border border-gray-300 flex justify-center">
        {snippet.title}
        <Link href={`snippet/${snippet.id}/edit`}>Edit</Link>
        <form action={deleteSnippet}>
          <button className="bg-blue-300 border">Delete</button>
        </form>
      </div>
    )
  })
  return (
   <div >
     {result}
   </div>
  );
}
