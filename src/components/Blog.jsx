import Button from "./Button";
import SectionTitle from "./SectionTitle";
import Container from "./Container"
import Card from "./Card";
import {ExternalLink} from "lucide-react"
import { blogs } from "../data";

const Blogs = () => {

  return (
    <section id="blogs" className="py-20 bg-white">
      <Container>
        <SectionTitle subtitle="Thoughts, tutorials, and insights from my journey">
           #!/usr/share/blog
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-0">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="group cursor-pointer">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888888] mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#00ff00] transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center text-[#333333] group-hover:text-[#00ff00] font-medium group-hover:gap-2 transition-all">
                  Read on Medium
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            variant="terminal"
            onClick={() => window.open('https://medium.com/@javedVah', '_blank')}
          >
            View All Articles on Medium
          </Button>
        </div> */}
      </Container>
    </section>
  );
};

export default Blogs;