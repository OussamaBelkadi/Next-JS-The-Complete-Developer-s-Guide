import { db } from "@/db"
import { notFound } from "next/navigation"
import { Editor } from "@monaco-editor/react"
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

    async function updateCode(id: number, code: string) {
        'use server'
    }

    return( 
        <div>
            <SnippetEditForm snippet={snippet}  />
        </div>
    )
}