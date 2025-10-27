import Container from "./Container";
import { achievements } from "../data";

const Achievements = () => {

  return (
    <section id="achievements" className="min-h-max py-20 lg:my-10">
      <Container>
        <div className="terminal-effect">
          <h2 className="text-2xl font-bold md:text-4xl m-3 typing-effect">
            $ cat achievements.txt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-0">
            {achievements.map((category, index) => (
              <div key={index} className="border border-[var(--terminal-green)] p-4">
                <h3 className="text-xl p-4 typing-effect font-bold ">
                  $ ls {category.title}/
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">{'>'}</span>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[var(--terminal-green)] underline transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;


// https://leetcode.com/u/javed_mv/  leetprofile