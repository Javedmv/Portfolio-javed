import { useState, useEffect } from "react";
import Container from "./Container"
import { Mail, Code, User, BookOpen, Menu, X, Trophy } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: User },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Blogs', href: '#blogs', icon: BookOpen },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHovered ? 'md:backdrop-blur-sm' : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--terminal-green)] z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          {/* Desktop Menu */}
          <ul className={`hidden md:flex space-x-8 px-8 py-2 mx-auto transition-all duration-300 ${
            isHovered 
              ? 'border border-[var(--terminal-green)] bg-black/90 rounded-full shadow-md' 
              : 'border-transparent bg-black/20 rounded-full'
          }`}>
              {navItems.map(({ label, href }) => (
              <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className={`text-lg font-medium transition-all duration-300 ${
                      activeSection === href.substring(1)
                        ? 'text-[var(--terminal-green)]'
                        : 'text-gray-500 hover:text-[var(--terminal-green)]'
                    }`}
                  >
                    {label}
                  </button>
              </li>
              ))}
          </ul>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-[var(--terminal-green)]">
          <ul className="flex flex-col space-y-4 p-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <button
                  onClick={() => scrollToSection(href)}
                  className={`flex items-center space-x-3 text-lg font-medium w-full transition-colors duration-200 ${
                    activeSection === href.substring(1)
                      ? 'text-[var(--terminal-green)]'
                      : 'text-gray-500 hover:text-[var(--terminal-green)]'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;