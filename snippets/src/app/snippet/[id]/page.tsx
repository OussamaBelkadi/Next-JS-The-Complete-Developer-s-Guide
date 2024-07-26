import { db } from '@/db'
import { notFound } from "next/navigation";

interface SnippetParam{
    params:{
        id: string
    }
}

export default async function Snippet(props: SnippetParam) {
   await new Promise((r) => setTimeout(r,2000))
    const snippet = await db.snippet.findFirst({
        where: { id : parseInt(props.params.id) }
    });

    if (!snippet) {
        return notFound()
    }

    return (
        <div className='border border-gray-400'>
           
            <h3> {snippet?.title} </h3>
            <button className='border border-gray-300'>Edit</button>

        </div>
    )
}