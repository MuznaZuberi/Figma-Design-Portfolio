import Link from "next/link";

export default function Header() {
	return(
      
      <div>
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <span className="ml-3 text-4xl font-bold font-serif cursor-pointer">ma.</span>
         </a>
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         <Link href = "#home" className="mr-5 text-black font-serif cursor-pointer">Work</Link>
         <Link href= "#about" className="mr-5 text-black font-serif cursor-pointer">About</Link>
         <Link href = "#projects" className="mr-5 text-black font-serif cursor-pointer">Playground</Link>
         <Link href = "#contact" className="mr-5 text-black font-serif cursor-pointer">Contact</Link>
         </nav>
         </div>
         </header>
      </div>
 );
}