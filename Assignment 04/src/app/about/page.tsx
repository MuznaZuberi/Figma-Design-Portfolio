import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
	return(
      
      <div>
      	<section id = "about">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" lg:text-4xl md:text-4xl text-3xl mb-4 text-black font-bold font-serif">
                                   𝗛𝗲𝗹𝗹𝗼 𝗜'𝗺
        <br className="hidden lg:inline-block" />
                                   𝗠𝘂𝘇𝗻𝗮 𝗔𝗺𝗶𝗿 𝗭𝘂𝗯𝗮𝗶𝗿𝗶.
        </h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <p className="mb-8 leading-relaxed text-justify font-serif">
             Proven experience in web development, graphic design and cutting-edge technologies such as Next.js and TypeScript. The portfolio focuses on innovative projects such as e-commerce websites, interactive apps and modern UI/UX designs that reflect the passion for creating impactful digital solutions.
        </p>
        </div>
        </div>
        </section>


 
        <section id = "about">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font lg:text-4xl md:text-4xl text-3xl mb-4 font-bold text-black">
                                  𝗔𝗯𝗼𝘂𝘁 𝗠𝗲
        <br className="hidden lg:inline-block" />
                                  𝗔𝘀𝗽𝗶𝗿𝗶𝗻𝗴 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗮𝗻𝗱 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆 𝗘𝗻𝘁𝗵𝘂𝘀𝗶𝗮𝘀𝘁
        </h1>
        <p className="mb-8 leading-relaxed font-serif text-justify text-lg">
                  My name is Muzna Amir. I am a Computer Science student and a full-time web developer currently taking courses on Generative AI, Web 3.0 and the Metaverse. I am passionate about creating dynamic websites and innovative digital solutions and am specialized in using modern tools such as Next.js, TypeScript and React. My projects like Clevora, SizzelsServe and Berrylicious reflect my ability to combine creativity and functionality to deliver great user experiences, and I am committed to continuously learning and leveraging cutting edge technologies to create effective and future-proof web solutions.
        </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
        className="object-center rounded-xl"
        alt="me_image"
        src={require("../../../images/me_img.png")}
        />
        </div>
        </div>

        <div className="h-1 bg-black rounded overflow-hidden mx-10 mt-10">
        <div className="w-10 h-full" />
        </div>


        <Link href = "/playground"  target = "blank" className="text-black font-bold font-serif inline-flex items-center mt-3 mx-10">
                              I'm thrilled to answer to your next project
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


        <Link href= "https://drive.google.com/file/d/1QyJrVqGLy92FCct6XbzeLNt3GcqePyWA/view" target = "blank" className="text-black font-bold font-serif inline-flex items-center mt-3 mx-10">
                                muznazuberi123@gmail.com
        <br/>
                                view resume
        </Link>
        </section>
      </div>
 );
}