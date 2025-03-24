
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-5 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="font-display font-bold text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Rayen Gharbi
        </motion.a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        
        <motion.a 
          href="#contact" 
          className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm transition-all hover:shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch
        </motion.a>
        
        <button className="md:hidden p-2">
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
