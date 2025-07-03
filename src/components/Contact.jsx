import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaboration, opportunities, or just a quick hello 👋
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/amansoni000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-swarn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amanswarnkar2001@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
