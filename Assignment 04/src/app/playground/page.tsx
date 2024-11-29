import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return(
      
      <div>
      	<section id = "projects">
        <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" sm:text-4xl text-3xl mb-4 font-bold">
                           𝟎𝟏/𝕮𝖑𝖊𝖛𝖔𝖗𝖆
        </h1>
        <p className="mb-8 leading-relaxed font-serif text-justify">
              Clevora is a modern e-commerce platform designed to provide a seamless and enjoyable online shopping experience, with an intuitive interface, quick navigation, and secure transactions to ensure customer satisfaction. With a wide range of products and useful features, Clevora makes online shopping easy for customers and enables businesses to effectively present their offers. Its scalable and efficient architecture makes it an ideal solution for today's e-commerce needs.
        </p>
        <Link href = "https://clevora-shopping-store.vercel.app/" target = "blank" className=" inline-flex items-center mt-3 underline font-bold font-serif text-black">
                           𝗠𝗼𝗿𝗲 𝗦𝗵𝗼𝗿𝘁𝘀 𝗙𝗿𝗼𝗺 𝗧𝗵𝗶𝘀 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        </Link>
        </div> 
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
        className="object-cover object-center rounded"
        alt="project_img"
        src={require("../../../images/project_01.png")}
        />
        </div>
        </div>



        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" sm:text-4xl text-3xl mb-4 font-bold">
                           𝟎𝟐/𝕾𝖎𝖟𝖟𝖊𝖑𝖘_𝕾𝖊𝖗𝖛𝖊
        </h1> 
        <p className="mb-8 leading-relaxed font-serif text-justify">
                 Serving a wide range of mouthwatering dishes made with the finest ingredients, SizzelsServe is an ideal restaurant for food lovers. Known for its exceptional taste and quality, the restaurant offers the perfect combination of flavours to satisfy every craving. Whether it's a casual dining experience or a special occasion, SizzelsServe guarantees a delicious dining experience that will keep customers coming back for more.
        </p>
        <Link href = "https://sizzels-serve.vercel.app/" target = "blank"  className=" inline-flex items-center mt-3 underline font-bold font-serif text-black">
                           𝗠𝗼𝗿𝗲 𝗦𝗵𝗼𝗿𝘁𝘀 𝗙𝗿𝗼𝗺 𝗧𝗵𝗶𝘀 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        </Link>
        </div> 
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
        className="object-cover object-center rounded"
        alt="project_img"
        src={require("../../../images/project_02.png")}
        />
        </div>
        </div>


        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" sm:text-4xl text-3xl mb-4 font-bold">
                             𝟎𝟑/𝕭𝖊𝖗𝖗𝖞𝖑𝖎𝖈𝖎𝖔𝖚𝖘
        </h1>
        <p className="mb-8 leading-relaxed font-serif text-justify">
                  Berrylicious is a colorful fruit shop offering the freshest, juiciest berries to brighten your day. We are committed to quality and variety, bringing you a huge variety of delicious fruit straight to your door. Berrylicious celebrates nature's bounty and makes healthy eating easy and fun for everyone.
        </p>
        <Link href = "https://berrylicious-delta.vercel.app/" target = "blank"  className=" inline-flex items-center mt-3 underline font-bold font-serif text-black">
                                 𝗠𝗼𝗿𝗲 𝗦𝗵𝗼𝗿𝘁𝘀 𝗙𝗿𝗼𝗺 𝗧𝗵𝗶𝘀 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        </Link>
        </div> 
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
        className="object-cover object-center rounded"
        alt="project_img"
        src={require("../../../images/project_03.png")}
        />
        </div>
        </div>
        </section>
    </div>
 );
}