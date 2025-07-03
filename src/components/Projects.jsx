function Projects() {
    const projects = [
      {
        title: "Restart Analyser — Spring Boot Library",
        description:
          "Plug-and-play library to detect and log root causes of microservice restarts. Captures thread dumps, heap usage, CPU, and GC stats with 100% JVM and container-level coverage.",
        link: "https://github.com/amansoni000/Restart_Analyser",
      },
      {
        title: "PCB Defect Detection using OpenCV",
        description:
          "Implemented IEEE paper on automatic PCB defect detection. Performed image processing techniques like thresholding, filtering, and segmentation for defect classification.",
        link: "https://github.com/amansoni000/PCB-Defect-Detection-Using-Image-Processing",
      },
      {
        title: "Social Distancing Violation Alert System",
        description:
          "Built a YOLOv3-based real-time video analytics system to detect social distancing violations. Transformed the video stream to bird's-eye view using OpenCV, calculated Euclidean distances between detected people, and marked violations with red/green bounding boxes.",
        link: "https://github.com/amansoni000/Social-Distancing-Violation-Alert-System",
      },
    ];
  
    return (
      <section
        id="projects"
        className="bg-gray-900 py-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base text-blue-500 hover:text-blue-400 font-medium transition-colors"
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
  