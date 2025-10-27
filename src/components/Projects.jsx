import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Container from "./Container"
import Card from "./Card";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Button from "./Button";
import { projects } from "../data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-[var(--terminal-bg)]">
      <Container>
        <SectionTitle subtitle="Explore my recent work and side projects">
          #!/dev/Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {displayedProjects.map((project, idx) => (
            <Card key={idx}>
              {/* <div className="text-6xl mb-4">{project.image}</div> */}
              <h3 className="text-2xl font-bold text-[#333333] mb-3">{project.title}</h3>
              <div className="mb-4">
                <p className="text-[#666666]  leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-[#000000] to-[#585753] text-[#00ff00] text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github_clent && (<a
                  href={project.github_clent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:text-[#00ff00] font-medium transition-colors"
                >
                  <Github size={18} />
                  Frontend
                </a>)}
                {project.github_server && (<a
                  href={project.github_server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:text-[#00ff00] font-medium transition-colors"
                >
                  <Github size={18} />
                  Backend
                </a>)}
                {project.demo && (<a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:text-[#00ff00] font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>)}
              </div>
            </Card>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="flex text-center mt-12 justify-end">
            <Button
              variant="terminal"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={20} />
                </>
              )}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;