import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { skills } from "../data";

const About = () => {

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionTitle subtitle="Get to know more about me and my journey">
          #!/bin/About Me
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-0">
          <div className="space-y-6">
            <p className="text-lg text-[#000000] leading-relaxed">
            You didn’t come here to read the usual “Hi, I’m a passionate developer with…” 
            nah, we’re skipping that.
            Here’s the real story:
            I’m Javed, someone who loves turning messy problems into clean, functional web apps using the MERN stack. 
            I didn’t start coding because it was trending.
            I started early, stuck with it, and along the way, built everything from e-commerce platforms to SaaS solutions that solve real user pain.
            If you’re:
            Someone diving into SaaS solutions, open-source and looking for meaningful projects to contribute
            Or a learner turning new skills into real-world impact through contribution
            Or a dev who loves clean code, solid systems, and sharing what you learn
            We’ll probably get along just fine.
            Right now, I’m sharpening my system design skills, exploring Web3, and learning how to build products that not only work, but feel good to use.
            Off-screen, you’ll find me thinking about tech’s future, community learning, and the kind of code that tells a story.
            Let’s build something meaningful, scalable, and maybe even fun.
            DMs are open. Always.
              
            </p>
            <p className="text-lg text-[#000000] leading-relaxed">
              When I'm not coding, you'll find me writing technical articles on Medium, 
              contributing to open-source projects, or exploring the latest trends in web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-[#000000] to-[#585753] px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-[#00ff00]">2+</p>
                <p className="text-sm text-[#a5a5a5]">Years Experience</p>
              </div>
              <div className="bg-gradient-to-r from-[#000000] to-[#585753] px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-[#00ff00]">15+</p>
                <p className="text-sm text-[#a5a5a5]">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-r from-[#000000] to-[#585753] px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-[#00ff00]">2+</p>
                <p className="text-sm text-[#a5a5a5]">Blog Articles</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">Skills & Technologies</h3>
            {skills.map(({ category, items }) => (
              <Card key={category} hover={false}>
                <h4 className="text-xl font-semibold text-[#000000] mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-[#000000] to-[#585753] text-[#00ff00] rounded-full text-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;