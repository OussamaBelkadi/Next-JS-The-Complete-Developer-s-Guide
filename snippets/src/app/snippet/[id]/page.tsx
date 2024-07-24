import { db } from '@/db'
import { notFound } from "next/navigation";

interface SnippetParam{
    params:{
        id: string
    }
}

export default async function Snippet(props: SnippetParam) {
   
    const snippet = await db.snippet.findFirst({
        where: { id : parseInt(props.params.id) }
    });

    if (!snippet) {
        return notFound()
    }

    return (
        <div>
            {snippet?.title}
        </div>
    )
}