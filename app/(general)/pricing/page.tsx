import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO description',
    keywords:['About price','Victor','Informacion price']
  };

export default function PrincingPage(){
    return(
        <main className="flex flex-col items-center p-24">            
      <span className="text-7xl">Pricing Page</span>
       </main>
        
    )
}