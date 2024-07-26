'use client'
import { useFormState } from "react-dom";
import * as actions from "@/actions"

export default function SnippetComponent() {
   const [ formState, action ] = useFormState(actions.createSnippet, {message: ""})

    return (
        
        <form action={action}>
            <h3 className="font-bold">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <label htmlFor="title" className="w-12">
                    Title
                </label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    className="border rounded p-2 w-full"
                 />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="code" className="w-12">
                    Code
                </label>
                <textarea
                    name="code"
                    id="code"
                    className="border rounded p-2 w-full"
                 />
            </div>
            {
                formState.message ? <div className="border border-red-500 bg-red-200 my-4 text-center">{formState.message}</div> : null
            }
            <div>{}</div>
            <button type="submit" className="rounded p-2 w-full bg-blue-300">
                Submit
            </button>
        </form>
    )
}