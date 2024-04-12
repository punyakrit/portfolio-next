import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function SideSocial() {
  return (
    <div className="fixed z-50 bottom-10 left-0 right-0 items-end  flex h-screen  justify-center   ">
      <div className="md:space-x-7  flex  flex-row  bg-white/10 py-6  px-7 backdrop-blur-sm rounded-full">
        <a
          href="https://github.com/punyakrit"
          target="_blank"
          className="inline-block"
        >
          <FaGithub className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 mx-3 md:mx-1" />
        </a>

        <a
          href="https://twitter.com/Punyakrit22"
          target="_blank"
          className="inline-block"
        >
          <FaTwitter className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 mx-3 md:mx-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/punyakrit-singh-makhni/"
          target="_blank"
          className="inline-block"
        >
          <FaLinkedin className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 mx-3 md:mx-1" />
        </a>
        <a
          href="mailto:punyakritsinghmakhni@gmail.com"
          target="_blank"
          className="inline-block"
        >
          <MdOutlineEmail className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 mx-3 md:mx-1" />
        </a>

        <a
          href="https://wa.me/6239668383"
          target="_blank"
          className="inline-block"
        >
          <FaWhatsapp className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 mx-3 md:mx-1" />
        </a>
      </div>
    </div>
  );
}

export default SideSocial;
