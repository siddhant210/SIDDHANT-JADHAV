import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, ExternalLink, Trophy, Users, Code, Target } from 'lucide-react';
import ContactForm from './components/ContactForm.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white transition-all duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white">
                SJ
              </div>
              <span className="text-xl font-semibold">Siddhant Jadhav</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('hackathons')} className="hover:text-purple-400 transition-colors">Hackathons</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 animate-pulse">
            SJ
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Siddhant
            </span>{' '}
            <span className="text-white">Jadhav</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            Full-Stack Developer & UI/UX Lead
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Computer Engineering Student | 6x Hackathon Winner | Java Backend Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:siddhantjadhav.dev@gmail.com" className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>siddhantjadhav.dev@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400 mt-2">
              <Phone className="w-4 h-4" />
              <span>+91 8291061982</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400 mt-2">
              <MapPin className="w-4 h-4" />
              <span>Father Conceicao Rodrigues College Of Engineering, Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate full-stack developer and UI/UX leader with expertise in modern web technologies and blockchain development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">👋</span>
                  Hello! I'm Siddhant
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a Computer Engineering student with a passion for creating innovative web solutions and leading design initiatives. As a UI/UX Lead at Google Developer Student Clubs, I've had the opportunity to mentor fellow developers and contribute to impactful projects.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey in tech has been marked by consistent success in hackathons, where I've demonstrated my ability to build solutions under pressure and work effectively in teams. I specialize in full-stack development with a strong focus on user experience and modern design principles.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Beyond coding, I'm passionate about blockchain technology, having worked on several decentralized applications and smart contracts. I believe in the power of technology to solve real-world problems and create positive social impact.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🎓</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Education & Experience</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Bachelor of Engineering</h4>
                <p className="text-gray-300">Computer Engineering</p>
                <p className="text-sm text-gray-400 mt-1">📅 June 2022 - May 2026</p>
                <p className="text-sm text-gray-400">🏫 Father Conceicao Rodrigues College Of Engineering, Mumbai</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">UI/UX Lead</h4>
                <p className="text-gray-300">Google Developer Student Clubs (GDSC)</p>
                <p className="text-sm text-gray-400 mt-1">📅 June 2024 - May 2025</p>
                <p className="text-sm text-gray-400">📍 FR.CRCE</p>
                <p className="text-sm text-gray-300 mt-2">
                  Leading UI/UX initiatives and mentoring fellow developers in design principles and user experience optimization.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-green-400 mb-2">UI/UX Junior Associate</h4>
                <p className="text-gray-300">Google Developer Student Clubs (GDSC)</p>
                <p className="text-sm text-gray-400 mt-1">📅 June 2023 - May 2024</p>
                <p className="text-sm text-gray-400">📍 FR.CRCE</p>
                <p className="text-sm text-gray-300 mt-2">
                  Contributed to design projects and gained hands-on experience in user interface design and development workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🌐</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['React.js', 'Next.js', 'HTML', 'CSS', 'TailwindCSS', 'Material-UI'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Node.js', 'Express.js', 'Django', 'Spring Boot', 'REST APIs'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Database</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Firebase', 'MongoDB', 'MySQL', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🎨</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Design</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Git', 'GitHub', 'Postman', 'Babel', 'Webpack', 'VS Code'].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Expertise */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Blockchain Development', 'Smart Contracts', 'Web3', 'Solidity', 'DevOps', 'Docker', 
                'AWS', 'CI/CD', 'Agile Methodology', 'Team Leadership', 'Project Management', 'Technical Writing'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-sm hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hackathon <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Victories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              6 hackathon wins showcasing innovation, technical excellence, and problem-solving skills across various domains.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-400">6</div>
              <div className="text-gray-400">Hackathons Won</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">1450+</div>
              <div className="text-gray-400">Participants Beaten</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* Hackathon Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* KJ Somaiya College Hackathon */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">1st Place</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">KJ Somaiya College Hackathon</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 March 2024</span>
                <span className="mx-2">•</span>
                <span>👥 200 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Blockchain Innovation</span>
              </div>
              <p className="text-gray-300 mb-4">
                Built a decentralized supply chain tracking system using Solidity and React.js, focused on ensuring transparency in fund usage and real-time tree monitoring.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Blockchain', 'Solidity', 'React.js', 'Web3'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* Atharva College Tech Fest */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">Winner</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Atharva College Tech Fest</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 February 2024</span>
                <span className="mx-2">•</span>
                <span>👥 150 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Web Development</span>
              </div>
              <p className="text-gray-300 mb-4">
                Created an AI-powered document collaboration platform using React.js, TailwindCSS, and advanced text analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'TailwindCSS', 'AI/ML', 'NLP'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* S.I.W.S Innovation Challenge */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">2nd Place</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">S.I.W.S Innovation Challenge</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 January 2024</span>
                <span className="mx-2">•</span>
                <span>👥 500 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Social Impact</span>
              </div>
              <p className="text-gray-300 mb-4">
                Developed a comprehensive solution for social impact using IoT and geolocation APIs to optimize plantation outcomes and survival rates.
              </p>
              <div className="flex flex-wrap gap-2">
                {['IoT', 'Geolocation', 'Firebase', 'React.js'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* Vidyalankar College CodeFest */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">1st Place</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Vidyalankar College CodeFest</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 November 2023</span>
                <span className="mx-2">•</span>
                <span>👥 100 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">FinTech</span>
              </div>
              <p className="text-gray-300 mb-4">
                Implemented secure user authentication with Google Firebase, enabling 100% uptime for login and registration processes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Firebase', 'Authentication', 'Security', 'React.js'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* V-HACK 2023 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">Winner</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">V-HACK 2023</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 September 2023</span>
                <span className="mx-2">•</span>
                <span>👥 120 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">UI/UX Innovation</span>
              </div>
              <p className="text-gray-300 mb-4">
                Built a fully performant event platform using Next.js, TypeScript, TailwindCSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'TailwindCSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* HACKDECK 2024 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">1st Place</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">HACKDECK 2024</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>📅 August 2023</span>
                <span className="mx-2">•</span>
                <span>👥 300 participants</span>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Open Innovation</span>
              </div>
              <p className="text-gray-300 mb-4">
                Deployed with Vercel for fast global access, helping streamline event execution and contributed to professional brand presence.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Vercel', 'Global CDN', 'Performance', 'Optimization'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions combining cutting-edge technologies to solve real-world problems and create meaningful impact.
            </p>
          </div>

          <div className="space-y-16">
            {/* Tree-Transparency */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🌳</span>
                  </div>
                  <div className="ml-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Blockchain & IoT</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Tree-Transparency</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a comprehensive blockchain solution focused on ensuring transparency in fund usage and real-time tree monitoring. Integrated IoT (ESP32) for remote growth tracking, geolocation APIs for precise tree mapping, and implemented data-driven species selection algorithms to optimize plantation outcomes and survival rates. Achieved 100% uptime for login and registration processes with zero security breaches through secure user authentication with Google Firebase.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-green-400">Key Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Blockchain transparency for fund tracking</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> IoT-enabled remote monitoring</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Real-time growth analytics</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Species selection algorithms</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> 100% uptime authentication</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Solidity', 'Geolocation APIs'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">🌳</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Tree-Transparency</h4>
                  <p className="text-gray-400 mb-4">Interactive Demo Available</p>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>

            {/* DocCrypt */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">📄</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">DocCrypt</h4>
                  <p className="text-gray-400 mb-4">Interactive Demo Available</p>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🔐</span>
                  </div>
                  <div className="ml-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Blockchain & AI</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">DocCrypt</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Built a cutting-edge document collaboration platform that ensures end-to-end privacy and zero data breaches through cryptographic signatures, blockchain-backed metadata, and content hashing. Developed an AI-powered Document Chatbot using NLP and advanced text analysis to assist users with intelligent, real-time document queries. Implemented decentralized storage with IPFS and Aptos Blockchain for immutable audit trails and global document accessibility.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Key Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Decentralized document storage</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> AI-powered document chatbot</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Cryptographic signatures</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Immutable audit trails</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Global accessibility</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Tailwind CSS', 'IPFS', 'Aptos Blockchain', 'NLP', 'Cryptography'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>

            {/* Unplug - GDSC Event Website */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🌐</span>
                  </div>
                  <div className="ml-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Web Development</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Unplug - GDSC Event Website</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a comprehensive event management platform featuring core frontend functionality for registration, event showcase, and speaker highlights. Ensured seamless onboarding experience for hundreds of attendees including industry experts and startup founders. Deployed with Vercel for fast global access, contributing to streamlined event execution and professional brand presence. The website helped establish the event's credibility and facilitated smooth registration processes.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Key Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-orange-400 mr-2">•</span> Responsive event registration</li>
                    <li className="flex items-center"><span className="text-orange-400 mr-2">•</span> Speaker showcase system</li>
                    <li className="flex items-center"><span className="text-orange-400 mr-2">•</span> Real-time event updates</li>
                    <li className="flex items-center"><span className="text-orange-400 mr-2">•</span> Professional branding</li>
                    <li className="flex items-center"><span className="text-orange-400 mr-2">•</span> Global CDN deployment</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">🌐</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Unplug - GDSC Event Website</h4>
                  <p className="text-gray-400 mb-4">Interactive Demo Available</p>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              More Projects Coming Soon! <span className="text-2xl">🚀</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring emerging technologies. Check out my GitHub for the latest updates and contributions.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get In Touch */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to work on innovative projects and collaborate with fellow developers, designers, and entrepreneurs. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">siddhantjadhav.dev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-400">+91 8291061982</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <span className="text-xl">𝕏</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Send a Message - Using ContactForm component */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Open to Opportunities */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Open to Opportunities <span className="text-3xl">🚀</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm currently open to internship opportunities, freelance projects, and full-time positions. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Available for Internships</span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">Open to Freelance</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Full-time Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white">
                  SJ
                </div>
                <span className="text-xl font-semibold">Siddhant Jadhav</span>
              </div>
              <p className="text-gray-400 mb-4">Full-Stack Developer & UI/UX Lead</p>
              <p className="text-gray-400 text-sm">
                Passionate about creating innovative web solutions and leading design initiatives. 6x hackathon winner with expertise in modern web technologies and blockchain development.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">siddhantjadhav.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+91 8291061982</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="block text-gray-400 hover:text-white transition-colors">Skills</button>
                <button onClick={() => scrollToSection('hackathons')} className="block text-gray-400 hover:text-white transition-colors">Hackathons</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:siddhantjadhav.dev@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-2 text-green-400">Current Status</h5>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Siddhant Jadhav. Made with ❤️ and lots of ☕
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">"Code is like humor. When you have to explain it, it's bad." - Cory House</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              <span>Built with React.js & Framer Motion</span>
              <span className="mx-2">•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

