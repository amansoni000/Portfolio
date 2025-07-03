function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 w-full"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Aman Swarnkar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Software Development Engineer 
          <br />
          <br />
          Java  |  Spring Boot  |  System Design  |  RabbitMQ  |  MongoDB  |  Kafka  |  Microservice Architecture
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/Aman_Resume_1.pdf"
            download
            className="px-6 py-3 rounded-lg border border-gray-500 hover:border-white transition-all duration-200"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-gray-500 hover:border-white transition-all duration-200"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
