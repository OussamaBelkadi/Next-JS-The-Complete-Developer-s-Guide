import { db} from "@/db";
import { redirect } from "next/navigation"

export default function SnippetComponent() {
    async function createSnippet(formData: FormData) {
        // This needs to be a server action! 
        'use server';
       
        //  Check the user's input and make sure they're valid
       const title = formData.get("title") as string;
       const code = formData.get("code") as string;

       // Create a new record in the database
       const snippet = await db.snippet.create({
           data:{
              title,
              code
           }
       });

        // Display the content of the data is persisting in database 
        console.log(snippet);

        // // Redirection to another page 
        redirect('/');
    }

    return (
        
        <form action={createSnippet}>
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
            <button type="submit" className="rounded p-2 w-full bg-blue-300">
                Submit
            </button>
        </form>
    )
}