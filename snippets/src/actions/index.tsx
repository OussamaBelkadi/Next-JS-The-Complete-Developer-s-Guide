'use server'

import { db } from '@/db';
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { Snippet } from 'next/font/google';

export async function updateCode(id: number, code: string) {
    // code to update the code 
    console.log(id + ' ' +  code);
    db.snippet.update(
       {
            where: { id },
            data: { code }
       }
    )
    // refresh the page
    revalidatePath(`snippet/${id}`);

    redirect(`snippet/${id}`);
} 
export async function deleteSnippet(id: number) {
    db.snippet.delete({
        where:{
            id
        }
    })
    revalidatePath('/')
    redirect('/');
}
export async function editSnippet(code: string) {
    // Update Snippet
}

export async function createSnippet(formState: {message:string}, formData: FormData) {
    
   try{
        //  Check the user's input and make sure they're valid
        const title = formData.get("title") ;
        const code = formData.get("code") ;

        if (typeof title !== 'string' || title.length < 3) {
            return{
                message: "Title must be longer"
            }
        }

        if (typeof code !== 'string' || code.length < 3) {
            return{
                message: "Code must be longer"
            }
        }
        // Create a new record in the database
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        });
        throw new Error('Failed to save to database')
   }catch(err: unknown){
        if (err instanceof Error) {
            return{
                message: err.message
            }
        }else{
            return{
                message: "Something went wrong..."
            }
        }
   }
    // On demande referReach page    
   revalidatePath('/')
   // Redirection to another page 
    redirect('/');
}

export async function generateStaticParams() {
    const snippets = await db.snippet.findMany()

    return  snippets.map((snippet) => {  
             return {
                id: snippet.id
            }
        } 
    )
}