function Experience() {
    const experienceData = [
      {
        company: "Addverb Technologies",
        role: "Software Development Engineer",
        date: "Jan 2023 – Present",
        points: [
          "Developed and maintained the Inbound microservice, a core component of the warehouse management sys-tem, ensuring 99.9% availability and horizontal scalability across 15+ warehouses.",
          "Built and integrated a reusable Restart Analysis Library for 10+ microservices to identify root causes of failures via CPU, memory, and thread dump diagnostics, reducing MTTR by 50%",
          "Designed resilient backend workflows for ingesting and processing high-volume data from distributed external systems, improving data consistency and scalability across regions.",
          "Implemented a configurable inbound module with 20+ customizable workflows, supporting dynamic client operations such as HU creation, QA, and Putaway across varied warehouse setups.",
          "Wrote 400+ JUnit test cases, achieving 80%+ test coverage for mission-critical flows, improving code reliability and preventing regressions in CI/CD pipelines.",
          "Maintained comprehensive documentation covering code, architecture, and integration processes, reducing on boarding time by 30% and improving cross-team collaboration.",
          "Collaborated in 50+ Agile sprints, translating evolving business requirements into scalable backend solutions and proactively aligning with cross-functional stakeholders.",
          "Conducted backend performance tuning and refactoring, reducing average processing time for high-volume inbound flows by 60%, accelerating downstream operations.",
          "Technologies Used : Java, Springboot, Design Patterns, SQL, Hibernate, RabbitMQ, JPA, MongoDB etc."
        ],
      },
      {
        company: "TCS Research & Innovation",
        role: "Machine Learning Research Intern",
        date: "May 2022 – Aug 2022",
        points: [
          "Worked on Developing multi-echelon supply chain management systems with multiple constraints.",
          "Developed a fully functioning multi-period multi-stage inventory flow management model using classical and quantum solvers.",
          "Improved the results by reducing the total landing cost by 40% for the supply chain using quantum solvers.",
          "Technologies used: Python, Cplex, Qiskit, D’Wave."
        ],
      },
    ];
  
    return (
      <section id="experience" className="bg-gray-950 text-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full" />
              <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
              <p className="text-sm text-gray-400 italic">{exp.role} | {exp.date}</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300 text-sm">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;
  