import Button from "./Button";
import SectionTitle from "./SectionTitle";
import Container from "./Container"
import Card from "./Card";
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { contactInfo } from "../data";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f0ead6]">
      <Container>
        <SectionTitle subtitle="Let's collaborate and create something amazing together">
          #!/usr/Contact
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-6 px-4 sm:px-0">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Let's Work Together</h3>
              <p className="text-lg text-[#666666] leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#000000] to-[var(--terminal-green)] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-[#888888]">{label}</p>
                    <p className="font-semibold text-[#333333]">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card hover={false}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#333333] mb-2">Name</label>
                <input
                  type="text"
                  name="user_name" // Important: match this with your EmailJS template
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black text-[var(--terminal-green)] border-2 border-[#000000] rounded-lg focus:border-[var(--terminal-green)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#333333] mb-2">Email</label>
                <input
                  type="email"
                  name="user_email" // Important: match this with your EmailJS template
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 bg-black text-[var(--terminal-green)] border-[#000000] rounded-lg focus:border-[var(--terminal-green)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#333333] mb-2">Message</label>
                <textarea
                  name="message" // Important: match this with your EmailJS template
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 border-2 bg-black text-[var(--terminal-green)] border-[#000000] rounded-lg focus:border-[var(--terminal-green)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {status && (
                <div className={`p-4 rounded-lg ${
                  status.includes('successfully') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {status}
                </div>
              )}
              <Button 
                variant="terminal" 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Contact;