import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me: Lucky Wagh</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
              I am a passionate and versatile web developer with expertise in a range of programming languages, including CSS, HTML, Python, JavaScript, and C programming. I have gained valuable experience through internships with IBM, which have sharpened my skills in both front-end and back-end web development.
              Currently, I am engaged in multiple innovative projects, including developing a carpooling website called Apex Carpooling using Next.js, with features like user notifications via SMS when they join a carpool. Additionally, I am working on a photography platform called Galaxia, where users can upload photos, tag locations, and interact with local photographers. In parallel, I am creating Azpire, a website dedicated to selling affordable PowerPoint presentations for students and educators in various fields.
              I am particularly interested in creating unique, groundbreaking solutions that solve real-world problems. My current focus is on e-commerce, AI-driven resume screening, and personalized user experiences. I believe in constantly pushing the boundaries of web technologies to enhance user experience, making websites both visually appealing and functional, particularly on mobile platforms.
              Additionally, I am exploring the concept of combining Instagram and LinkedIn into a single platform using Next.js, showcasing my interest in merging social networking and professional aspects into a unified experience.
              In all of my projects, I emphasize user experience, innovation, and scalability, ensuring that the solutions I create are both impactful and future-proof.
              Feel free to connect with me for collaboration, mentorship, or project discussions.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
