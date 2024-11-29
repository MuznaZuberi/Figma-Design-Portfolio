import Link from "next/link";

export default function Footer() {
	return(
      
      <div>
      <section id = "contact">
      <footer>
      <div className="container px-5 pt-20 mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-md  sm:border-l-2 sm:border-gray-200 font-bold font-serif sm:py-2 sm:mt-0 mt-4">
              Muzna Amir Zubairi © 2024
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-3 justify-center sm:justify-start">
      <Link href = "/" className = "font-bold font-serif cursor-pointer">Artstation</Link>
      <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className = "font-bold font-serif cursor-pointer">Linkedin</Link>
      <Link href = "/" className = "font-bold font-serif cursor-pointer">Twitter</Link>
      </span>
      </div>
      </footer>
      </section>
      </div>
 );
}