import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUserTie,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Python Developer & DevOps Learner
            </h3>

            <p className="text-muted-foreground">
              I am passionate about backend development using Python and
              building efficient systems with FastAPI, REST APIs, and databases.
            </p>

            <p className="text-muted-foreground">
              I am also developing skills in Docker, CI/CD pipelines, and
              cloud deployment to contribute effectively in a real-world
              engineering team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          {/* Right Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FontAwesomeIcon icon={faServer} className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable backend logic and secure APIs using Python & FastAPI.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FontAwesomeIcon icon={faCode} className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database & System Design</h4>
                  <p className="text-muted-foreground">
                    Working with SQL databases and applying clean architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FontAwesomeIcon icon={faUserTie} className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps Fundamentals</h4>
                  <p className="text-muted-foreground">
                    Docker containerization, CI/CD pipelines & deployment workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
