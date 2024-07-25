import { db } from "@/db"
import { notFound } from "next/navigation"
import SnippetEditForm from "@/component/SnippetEditForm"

interface SnippetParam{
    params:{
        id : string
    }
}

export default async function SnippetEditPage(props:SnippetParam) {
    const id  = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: {
            id : parseInt(props.params.id)
        }
    })

    if (!snippet) {
        return notFound;
    }


    return( 
        <div>
            <SnippetEditForm snippet={snippet}  />
        </div>
    )
}