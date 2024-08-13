import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO contact',
    keywords:['About Page','Victor','Informacion contact']
  };

export default function ContactPage(){
    return(
        <>
         <main className="flex flex-col items-center p-24">            
         <span className="text-7xl">Contact Page</span>
        </main>            
        </>
    )
}