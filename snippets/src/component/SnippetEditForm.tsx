'use client'

import type { Snippet } from "@prisma/client"

interface SnippetFormProps{
    snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetFormProps) {
    return (
    <div>hero {snippet.title} </div>
)}