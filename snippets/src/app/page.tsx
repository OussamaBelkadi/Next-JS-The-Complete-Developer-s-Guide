import { db } from "@/db"
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
export  default async function Home() {
  const snippet = await db.snippet.findMany();
  const result  = snippet.map((snippet)=>{
    return (
      <div>
        {snippet.title}
      </div>
    )
  })
  return (
   <div className="text-3xl bg-blue-600">
     {result}
   </div>
  );
}
