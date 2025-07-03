function Projects() {
    const projects = [
      {
        title: "ZPL Label Generator",
        description:
          "A microservice to generate and print ZPL-based product labels asynchronously. Built using Spring Boot, RabbitMQ, Angular, and REST APIs.",
        link: "https://github.com/your-github/zpl-label-generator",
      },
      {
        title: "Service Restart Detector",
        description:
          "Restart analysis library for Spring Boot services that logs memory, thread dumps, and GC stats. Integrates easily across WMS microservices.",
        link: "https://github.com/your-github/restart-analyser",
      },
      {
        title: "ASN Processing Optimizer",
        description:
          "Optimized GRN flow by rewriting core logic in ASN services, reducing latency by 60%. Used MongoDB, Spring Events, and Kafka.",
        link: "https://github.com/your-github/asn-optimizer",
      },
    ];
  
    return (
      <section id="projects"
       className="bg-gray-900 py-16 px-6"
       >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  