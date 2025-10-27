import { useState, useEffect, useRef } from "react";
import Navigation from './Navigation';

const Hero = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const containerRef = useRef(null);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const welcomeText = `
 _   _      _ _         __        __         _     _ _ 
| | | | ___| | | ___    \\ \\      / /__  _ __| | __| | |
| |_| |/ _ \\ | |/ _ \\    \\ \\ /\\ / / _ \\| '__| |/ _\` | |
|  _  |  __/ | | (_) |    \\ V  V / (_) | |  | | (_| |_|
|_| |_|\\___|_|_|\\___/      \\_/\\_/ \\___/|_|  |_|\\__,_(_)

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░                                                              ░
░        ██╗ █████╗ ██╗   ██╗███████╗██████╗ ███████╗           ░
░        ██║██╔══██╗██║   ██║██╔════╝██╔══██╗██╔════╝           ░
░        ██║███████║██║   ██║█████╗  ██║  ██║███████╗           ░
░   ██╗  ██║██╔══██║╚██╗ ██╔╝██╔══╝  ██║  ██║╚════██║           ░
░   ╚█████╔╝██║  ██║ ╚████╔╝ ███████╗██████╔╝███████║           ░
░    ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═════╝ ╚══════╝           ░
░                                                              ░
░        Terminal Portfolio - Full Stack Developer             ░
░                                                              ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Type 'help' to see available commands
`;

  const projects = [
    {
      title: 'VLearning',
      description: 'Microservice-based e-learning app with roles & real-time features.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Kafka', 'TypeScript'],
      github: 'https://github.com/Javedmv/VLearning-server.git',
      demo: ''
    },
    {
      title: 'VeeLap',
      description: 'Full-featured e-commerce web application with secure payments via Razorpay.',
      tech: ['Node.js', 'MongoDB', 'EJS', 'Razorpay'],
      github: 'https://github.com/Javedmv/veeLap.git',
      demo: 'https://veelap.welearning.online'
    },
    {
      title: 'OCR-Aadhar',
      description: 'AI-powered document reader extracting data from Aadhaar cards.',
      tech: ['Node.js', 'React', 'OpenAI', 'TypeScript'],
      github: 'https://github.com/Javedmv/OCR-Aadhar-front.git',
      demo: 'https://ocr-aadhar-front.vercel.app/'
    },
    {
      title: 'Stock Image Platform',
      description: 'Image upload, edit & manage app with Cloudinary support.',
      tech: ['TypeScript', 'Node.js', 'React', 'Cloudinary'],
      github: 'https://github.com/Javedmv/StockImage-Frontend.git',
      demo: 'https://stock-image-frontend.vercel.app/'
    }
  ];

  const commands = {
    help: {
      description: "List all available commands",
      aliases: ['h'],
      fn: () => `
Available commands:
  help (h)       - Show this help message
  about (a)      - Learn more about me
  skills (s)     - View my technical skills
  projects (p)   - Browse my projects
  contact (c)    - Get my contact information
  social (so)    - Display social media links
  education (e)  - View my education
  clear          - Clear the terminal

Tip: You can use shortcuts!
`,
    },
    about: {
      description: "Learn more about me",
      aliases: ['a'],
      fn: () => `
Hi there! I'm Javed MV

Full Stack Developer passionate 
about building innovative web 
solutions.

Specializing in:
  • Frontend (React, TypeScript)
  • Backend (Node.js, Express)
  • Databases (MongoDB, PostgreSQL)
  • Cloud (AWS, Azure, Docker, K8s)
`,
    },
    skills: {
      description: "View my technical skills",
      aliases: ['s'],
      fn: () => `
Technical Skills:

Frontend:
  • TypeScript, JavaScript
  • React, Redux
  • HTML5, CSS3, Tailwind CSS

Backend:
  • Node.js, Express.js
  • Microservices
  • Socket.io, Kafka
  • RESTful APIs, JWT

DevOps:
  • AWS, Azure, Docker
  • Kubernetes, CI/CD
  • GitHub Actions, Git

Databases:
  • MongoDB, PostgreSQL
  • Firebase

Other:
  • Data Structures & Algorithms
  • OOP, SOLID Principles
  • Design Patterns
`,
    },
    projects: {
      description: "Browse my projects",
      aliases: ['p'],
      fn: () => {
        let result = '\nFeatured Projects:\n\n';
        projects.forEach((project, idx) => {
          result += `${idx + 1}. ${project.title}\n`;
          result += `   ${project.description}\n`;
          result += `   Tech: ${project.tech.slice(0, 4).join(', ')}${project.tech.length > 4 ? '...' : ''}\n`;
          result += `   GitHub: ${project.github}\n`;
          if (project.demo) result += `   Demo: ${project.demo}\n`;
          result += '\n';
        });
        return result;
      },
    },
    contact: {
      description: "Get my contact information",
      aliases: ['c'],
      fn: () => `
Contact Information:

📧 Email:
javedmv777@gmail.com

🔗 GitHub:
github.com/Javedmv

💼 LinkedIn:
linkedin.com/in/javed-mv-vah/
`,
    },
    social: {
      description: "Display social media links",
      aliases: ['so'],
      fn: () => `
Connect with me:

• GitHub:
  github.com/Javedmv

• LinkedIn:
  linkedin.com/in/javed-mv-vah/

• LeetCode:
  leetcode.com/u/javed_mv/

• HackerRank:
  hackerrank.com/profile/javedmv777
`,
    },
    education: {
      description: "View my education",
      aliases: ['e'],
      fn: () => `
Education:

• Intern at Brototype
  Duration: 2 years

• B.Sc. Computer Science
  University of Calicut (UOC)
`,
    },
    clear: {
      description: "Clear the terminal",
      fn: () => {
        setOutput([]);
        return "";
      },
    },
  };

  const findCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (commands[trimmedCmd]) {
      return commands[trimmedCmd];
    }
    
    for (const [key, command] of Object.entries(commands)) {
      if (command.aliases && command.aliases.includes(trimmedCmd)) {
        return command;
      }
    }
    
    return null;
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "") {
      return "";
    }

    const command = findCommand(trimmedCmd);
    
    if (command) {
      return command.fn();
    } else {
      return `Command not found: ${trimmedCmd}. Type 'help' to see available commands.`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;

      setOutput((prev) => [
        ...prev,
        { type: "command", text: `visitor@portfolio:~$ ${input}` },
        { type: "response", text: handleCommand(input) },
      ]);
      setInput("");
    }
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const lines = welcomeText.split('\n');
    let currentIndex = 0;
    let currentText = '';

    const typeNextLine = () => {
      if (currentIndex < lines.length) {
        currentText += lines[currentIndex] + '\n';
        setOutput([{ type: "info", text: currentText }]);
        currentIndex++;
        setTimeout(typeNextLine, 60);
      }
    };

    typeNextLine();
  }, []);;

  return (
    <>
      <Navigation/>
      <section id="home" className="min-h-screen bg-black text-[#00ff00] flex items-center justify-center p-4">
        <div className="w-full h-[calc(100vh-2rem)] max-w-full">
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            className="w-full h-full bg-black/90 border border-[#00ff00] rounded-lg p-3 md:p-4 shadow-lg cursor-text flex flex-col"
          >
            <div
              ref={terminalRef}
              className="flex-1 font-mono text-xs sm:text-sm md:text-base overflow-x-auto overflow-y-auto whitespace-pre mb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {output.map((item, idx) => (
                <div
                  key={idx}
                  className={`mb-2 ${
                    item.type === "command"
                      ? "text-[#00ff00]"
                      : item.type === "error"
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {item.text}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <span className="text-[#00ff00] whitespace-nowrap text-xs sm:text-sm md:text-base">visitor@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent border-none outline-none text-[#00ff00] font-mono text-xs sm:text-sm md:text-base"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;