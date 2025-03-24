
import { motion } from 'framer-motion';

const skills = [
  { 
    category: "Frontend", 
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "SCSS"] 
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "Django", "PHP", "MySQL", "MongoDB", "PostgreSQL"] 
  },
  { 
    category: "Tools & Others", 
    items: ["Git", "Docker", "AWS", "Redux", "GraphQL", "RESTful APIs", "Jest", "Webpack", "Figma"] 
  }
];

const SkillCard = ({ item, index }: { item: string; index: number }) => {
  return (
    <motion.div
      className="glass-card rounded-xl px-4 py-3 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.07)" }}
    >
      <p className="font-medium">{item}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl"></div>
      
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="inline-block text-sm font-medium px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent">
          My Skills
        </h2>
        <h3 className="section-title max-w-2xl">
          My technical expertise and toolset
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Constantly expanding my knowledge to stay at the cutting edge of web development technologies.
        </p>
      </motion.div>
      
      <div className="space-y-12">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div 
            key={skillGroup.category}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-xl font-display font-bold text-center sm:text-left">{skillGroup.category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skillGroup.items.map((item, index) => (
                <SkillCard key={item} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
