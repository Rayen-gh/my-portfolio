
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"></div>
      
      <motion.div 
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="inline-block text-sm font-medium px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent">
          About me
        </h2>
        <h3 className="section-title max-w-2xl">
          Passionate about creating meaningful digital experiences
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg">
            Hello! I'm Rayen Gharbi, a dedicated web developer with a passion for creating elegant, efficient, and user-friendly websites and applications. My journey in web development began with a fascination for how technology can transform ideas into interactive experiences.
          </p>
          <p>
            I specialize in modern web technologies and frameworks, constantly expanding my knowledge to stay at the cutting edge of web development. My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed expectations.
          </p>
          <p>
            What drives me is the opportunity to build digital products that make a real difference. Whether it's optimizing user experiences, improving accessibility, or creating responsive designs that work flawlessly across all devices, I'm committed to excellence in every project I undertake.
          </p>
        </motion.div>
        
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-lg font-medium mb-4">Education</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                </div>
                <div>
                  <h5 className="font-medium">Bachelor's in Computer Science</h5>
                  <p className="text-sm text-muted-foreground">University of Technology • 2015-2019</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M18 10h-4V4h-4v6H6l6 6 6-6z"/><path d="M18 16v3H6v-3"/></svg>
                </div>
                <div>
                  <h5 className="font-medium">Web Development Certification</h5>
                  <p className="text-sm text-muted-foreground">TechAcademy • 2020</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-lg font-medium mb-4">Experience</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div>
                  <h5 className="font-medium">Senior Web Developer</h5>
                  <p className="text-sm text-muted-foreground">TechVision • 2021-Present</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div>
                  <h5 className="font-medium">Frontend Developer</h5>
                  <p className="text-sm text-muted-foreground">WebSolutions • 2019-2021</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
