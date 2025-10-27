import Container from "./Container"
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { socialLinks } from "../data";

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-black text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-0">
          <div>
            <h3 className="text-2xl font-bold mb-4">Javed Mv</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating beautiful, functional web experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:text-[var(--terminal-green)] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>© 2025 Javed. All rights reserved. Built with React & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;