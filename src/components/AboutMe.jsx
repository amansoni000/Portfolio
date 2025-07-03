function AboutMe() {
    return (
      <section id="about" className="bg-gray-950 text-white py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a backend engineer currently working at <span className="text-blue-400 font-medium">Addverb Technologies</span>, 
            building scalable and resilient microservices that power 15+ automated warehouses across India. My expertise lies in 
            Java, Spring Boot, RabbitMQ, MongoDB, and system-level design.
          </p>
  
          <p className="text-gray-400 text-md mt-6">
            I’ve built diagnostic libraries like <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">restart_analyser</code> to detect service crashes, 
            refactored monoliths into modular services, and written over 400 unit tests for mission-critical flows. 
            I love debugging, performance tuning, and making backend systems bulletproof 💪.
          </p>
        </div>
      </section>
    );
  }
  
  export default AboutMe;
  