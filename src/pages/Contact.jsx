import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div>

    <div className="py-40 bg-purple-200 text-center px-4 border-collapse rounded-md m-3">
      <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4">Contact</h1>
      </div>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
   
      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto py-10 px-4">
        {/* Freelancing Platforms Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Freelancing Platforms</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-800  hover:font-bold transition text-xl"
                >
                Upwork
            
                  {/* Underline hover effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-800 hover:font-bold transition text-xl"
                >
                Fiverr
              {/* Underline hover effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </section>

        {/* Social Pages Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Social Pages</h2>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/khadija-hameed-a67320341/"
              className="text-gray-600 hover:text-purple-600 hover:font-bold transition font-medium text-xl "
              >
             <FaLinkedin />
            </a>
            <a
              href="https://github.com/KhadijaHameed01"
              className="text-gray-600 hover:text-purple-600 hover:font-bold transition font-medium text-xl "
              >
         <FaGithub />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Demo Website</h2>
          <p className="text-gray-700">
            This demo website is designed and developed by me, showcasing my ability to create clean, responsive, and
            visually appealing web pages.
          </p>
        </section>
      </main>
              </div>
    </div>
  )
}


export default Contact;