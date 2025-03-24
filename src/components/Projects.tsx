
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Portfolio Website",
    description: "A custom portfolio website built with modern technologies and smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Healthcare Dashboard",
    description: "An intuitive dashboard for healthcare professionals to monitor patient data and statistics.",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Real Estate Application",
    description: "A comprehensive platform for property listings, searches, and management with interactive maps.",
    tags: ["Vue.js", "Express", "PostgreSQL", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates and team features.",
    tags: ["React", "Redux", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-responsive application for tracking workouts, nutrition, and fitness progress.",
    tags: ["React Native", "GraphQL", "AWS", "D3.js"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-xl font-display font-bold mb-2">{project.title}</h4>
        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-secondary/30 flex justify-end">
        <a 
          href="#" 
          className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="inline-block text-sm font-medium px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent">
          Portfolio
        </h2>
        <h3 className="section-title max-w-2xl">
          My recent work and projects
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Here are some of the projects I've worked on. Each project represents different challenges and solutions.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
