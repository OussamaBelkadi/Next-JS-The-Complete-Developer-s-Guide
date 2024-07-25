'use client'

import { Editor } from "@monaco-editor/react";
import { useState } from "react"
import type { Snippet } from "@prisma/client"

interface SnippetFormProps{
    snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleChange = (value : string = "")=>{
            setCode(value)
    };
    return (
    <div>

         <Editor 
            height= "40vh"
            theme="vs-dark"
            language="javascript"
            defaultValue={snippet.code}
            options={{minimap: {enabled: false}}}
            onChange={handleChange}
            />
    </div>
)}