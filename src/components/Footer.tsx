import { Github, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <span className="text-xl font-bold text-white">Aayush Baral</span>
            <p className="text-white text-sm mt-0.5">
              Longlife Happy<span className="text-red-500">❤</span>
            </p>
          </div>
          
          <div className="flex space-x-6 mb-3 md:mb-0">
            <a href="https://github.com/baralaayush" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/baralaayush" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://aayushbaralsite.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">Wordpress</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                <path d="M16.5 7.5l-2.5 9-2.5-9-2.5 9-2.5-9" />
              </svg>
            </a>
            <a href="https://youtube.com/@aayushbaral.official" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">Youtube</span>
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/aayushbaral.abb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/aayushbaral.abb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 border-t border-slate-800 pt-3 flex justify-center items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Aayush Baral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
