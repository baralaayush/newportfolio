import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <img 
                src="https://aayushbaralsite.wordpress.com/wp-content/uploads/2026/01/img_5162.jpg" 
                alt="Aayush Baral" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="w-full bg-transparent rounded-xl">
              <p className="text-lg text-gray-600 mb-4 leading-relaxed text-justify hyphens-auto">
                Welcome to my portfolio! I am <b>Aayush Baral</b>, a passionate web designer, developer, blogger, and lifelong learner. I specialize in crafting highly customized, tailor-made application software solutions and designing professional logos for both individuals and organizations. My extensive practical experience encompasses a diverse range of projects, such as developing fully backend-integrated web and mobile applications likely as StudyPro, PortalHub, Finance Tracker, designing intelligent personal virtual assistants and AI systems, creating engaging web-games, and developing efficient Excel VBA automation solutions. I am currently pursuing bsc.CSIT degree under the Tribhuwan University.
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Feel free to connect and explore my blog and projects below!
            </p>
            
            <div className="flex justify-center md:justify-start">
              <div className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">My Resume</h3>
                  <p className="text-xs text-gray-500">Professional CV</p>
                </div>
                <div className="flex items-center gap-1">
                  <a 
                    href="https://drive.google.com/file/d/1kxbkCPgNePEVH8Ak4425ru5jL9SuYRSd/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200" 
                    title="View Resume"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1kxbkCPgNePEVH8Ak4425ru5jL9SuYRSd"
                    className="p-2.5 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm hover:shadow transition-all duration-200" 
                    title="Download Resume"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
