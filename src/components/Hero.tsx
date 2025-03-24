
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="inline-block text-sm font-medium px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent">
              Web Developer
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Crafting digital <br className="hidden sm:block" />
            <span className="text-primary">experiences</span> with code.
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm Rayen, a passionate web developer focused on creating elegant, functional, and user-centric web applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a 
              href="#projects" 
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-3xl bg-white p-2 shadow-xl">
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6 sm:p-8">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-lg font-medium">Rayen Gharbi</p>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                  {[
                    { label: "Experience", value: "5+" },
                    { label: "Projects", value: "20+" },
                    { label: "Skills", value: "15+" },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
