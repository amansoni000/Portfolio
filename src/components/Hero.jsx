function Hero() {
    return (
      <section
        id="hero"
        aria-label="Hero Section"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6"
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Aman Swarnkar
            </span>
          </h1>
  
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Backend Developer • Java | Spring Boot | System Design | RabbitMQ | MongoDB
          </p>
  
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200"
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
  