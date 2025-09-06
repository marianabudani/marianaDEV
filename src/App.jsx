import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Code, ExternalLink, Download, ChevronDown, Calendar, Building, GraduationCap, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      hero: {
        title: 'Mariana Budani',
        subtitle: 'Desarrolladora Web Full Stack',
        description: 'Especializada en PHP Laravel, JavaScript y React. Con experiencia en administración y desarrollo web, busco oportunidades remotas para contribuir con equipos innovadores.',
        viewProjects: 'Ver Proyectos',
        contact: 'Contactar'
      },
      about: {
        title: 'Sobre Mí',
        text1: 'Soy Licenciada en Administración con una sólida transición hacia el desarrollo web. Mi experiencia única combinando gestión administrativa con desarrollo técnico me permite aportar una perspectiva integral a los proyectos.',
        text2: 'Actualmente trabajo como desarrolladora web en la Vicejefatura del Interior de la Nación utilizando PHP Laravel, y he completado mi formación en desarrollo Full Stack con especialización en React.',
        text3: 'Busco oportunidades de trabajo remoto donde pueda aplicar mis habilidades técnicas y experiencia en gestión para contribuir al crecimiento de equipos dinámicos.',
        personalInfo: 'Información Personal',
        education: 'Formación',
        location: 'Buenos Aires, Argentina',
        role: 'Desarrolladora Full Stack'
      },
      experience: {
        title: 'Experiencia Profesional',
        current: 'Actual',
        jobs: [
          {
            company: 'Vicejefatura del Interior de la Nación',
            position: 'Desarrolladora Web',
            period: 'Enero 2025 - Presente',
            location: 'Buenos Aires, Argentina',
            description: 'Desarrollo de aplicaciones web utilizando PHP Laravel. Implementación de soluciones tecnológicas para la administración pública.',
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript']
          },
          {
            company: 'Tupper',
            position: 'Desarrolladora Web',
            period: 'Período anterior - Enero 2025',
            location: 'Buenos Aires, Argentina',
            description: 'Desarrollo de soluciones web, mantenimiento de aplicaciones y colaboración en proyectos de e-commerce.',
            technologies: ['JavaScript', 'React', 'HTML', 'CSS']
          },
          {
            company: 'Ministerio del Interior',
            position: 'Administrativa',
            period: 'Experiencia previa',
            location: 'Buenos Aires, Argentina',
            description: 'Gestión administrativa, coordinación de procesos y manejo de sistemas internos.',
            technologies: ['Gestión', 'Procesos', 'Coordinación']
          }
        ]
      },
      education: {
        title: 'Educación y Certificaciones',
        items: [
          {
            institution: 'Universidad',
            degree: 'Licenciatura en Administración',
            year: 'Título universitario',
            description: 'Formación integral en gestión empresarial, administración y liderazgo.'
          },
          {
            institution: 'CoderHouse',
            degree: 'Desarrollo Web Full Stack',
            year: '2024',
            description: 'Formación completa en tecnologías web modernas, incluyendo JavaScript, React y Node.js.'
          },
          {
            institution: 'CoderHouse',
            degree: 'React JS',
            year: '2024',
            description: 'Especialización en desarrollo frontend con React, hooks, context y mejores prácticas.'
          }
        ]
      },
      skills: {
        title: 'Habilidades Técnicas',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend', 
          tools: 'Herramientas',
          soft: 'Habilidades Blandas'
        }
      },
      projects: {
        title: 'Proyectos Destacados',
        viewAll: 'Ver todos los proyectos en GitHub',
        items: [
          {
            name: "Tienda Esotérica",
            description: "E-commerce completo desarrollado con React para CoderHouse. Incluye carrito de compras, gestión de productos, filtros avanzados y checkout.",
            type: "E-commerce"
          },
          {
            name: "Laboratorio Umbrella", 
            description: "Aplicación web completa para gestión de laboratorio con interfaz intuitiva y manejo de datos en tiempo real.",
            type: "Web App"
          },
          {
            name: "Trabajo Final React",
            description: "Proyecto final del curso de React en CoderHouse, demostrando dominio completo del framework y mejores prácticas.",
            type: "React App"
          }
        ]
      },
      contact: {
        title: '¿Trabajamos Juntos?',
        subtitle: 'Estoy disponible para oportunidades de trabajo remoto. ¡Conectemos y hablemos sobre tu próximo proyecto!',
        email: 'Email',
        emailText: 'Envíame un mensaje',
        linkedin: 'LinkedIn', 
        linkedinText: 'Conectemos profesionalmente',
        github: 'GitHub',
        githubText: 'Revisa mi código',
        cta: {
          title: '¿Listo para crear algo increíble?',
          description: 'Con experiencia en administración y desarrollo web, aporto una perspectiva única combinando gestión y tecnología para proyectos exitosos.',
          button: 'Hablemos'
        }
      },
      footer: '© 2025 Mariana Budani. Desarrollado con React y mucho ❤️'
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience', 
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Mariana Budani',
        subtitle: 'Full Stack Web Developer',
        description: 'Specialized in PHP Laravel, JavaScript and React. With experience in administration and web development, seeking remote opportunities to contribute to innovative teams.',
        viewProjects: 'View Projects',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        text1: 'I am a Business Administration graduate with a solid transition into web development. My unique experience combining administrative management with technical development allows me to bring a comprehensive perspective to projects.',
        text2: 'Currently working as a web developer at the Vice-Ministry of Interior using PHP Laravel, and I have completed my Full Stack development training with specialization in React.',
        text3: 'I seek remote work opportunities where I can apply my technical skills and management experience to contribute to the growth of dynamic teams.',
        personalInfo: 'Personal Information',
        education: 'Education',
        location: 'Buenos Aires, Argentina',
        role: 'Full Stack Developer'
      },
      experience: {
        title: 'Professional Experience',
        current: 'Present',
        jobs: [
          {
            company: 'Vice-Ministry of Interior of Argentina',
            position: 'Web Developer',
            period: 'January 2025 - Present',
            location: 'Buenos Aires, Argentina',
            description: 'Web application development using PHP Laravel. Implementation of technological solutions for public administration.',
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript']
          },
          {
            company: 'Tupper',
            position: 'Web Developer',
            period: 'Previous Period - January 2025',
            location: 'Buenos Aires, Argentina',
            description: 'Web solutions development, application maintenance and collaboration on e-commerce projects.',
            technologies: ['JavaScript', 'React', 'HTML', 'CSS']
          },
          {
            company: 'Ministry of Interior',
            position: 'Administrative',
            period: 'Previous Experience',
            location: 'Buenos Aires, Argentina',
            description: 'Administrative management, process coordination and internal systems management.',
            technologies: ['Management', 'Processes', 'Coordination']
          }
        ]
      },
      education: {
        title: 'Education & Certifications',
        items: [
          {
            institution: 'University',
            degree: 'Bachelor in Business Administration',
            year: 'University Degree',
            description: 'Comprehensive training in business management, administration and leadership.'
          },
          {
            institution: 'CoderHouse',
            degree: 'Full Stack Web Development',
            year: '2024',
            description: 'Complete training in modern web technologies, including JavaScript, React and Node.js.'
          },
          {
            institution: 'CoderHouse',
            degree: 'React JS',
            year: '2024',
            description: 'Frontend development specialization with React, hooks, context and best practices.'
          }
        ]
      },
      skills: {
        title: 'Technical Skills',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Tools', 
          soft: 'Soft Skills'
        }
      },
      projects: {
        title: 'Featured Projects',
        viewAll: 'View all projects on GitHub',
        items: [
          {
            name: "Esoteric Store",
            description: "Complete e-commerce developed with React for CoderHouse. Includes shopping cart, product management, advanced filters and checkout.",
            type: "E-commerce"
          },
          {
            name: "Umbrella Laboratory",
            description: "Complete web application for laboratory management with intuitive interface and real-time data handling.",
            type: "Web App"
          },
          {
            name: "React Final Project",
            description: "Final project for React course at CoderHouse, demonstrating complete framework mastery and best practices.",
            type: "React App"
          }
        ]
      },
      contact: {
        title: 'Let\'s Work Together?',
        subtitle: 'I\'m available for remote work opportunities. Let\'s connect and talk about your next project!',
        email: 'Email',
        emailText: 'Send me a message',
        linkedin: 'LinkedIn',
        linkedinText: 'Let\'s connect professionally', 
        github: 'GitHub',
        githubText: 'Check my code',
        cta: {
          title: 'Ready to create something amazing?',
          description: 'With over 5 years of Full Stack development experience and expertise in Java Enterprise, PHP and modern technologies, I bring a unique perspective combining solid technical skills with enterprise project management experience.',
          button: 'Let\'s Talk'
        }
      },
      footer: '© 2025 Mariana Budani. Built with React and lots of ❤️'
    }
  };

  const skills = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    backend: ["PHP", "Laravel", "Node.js", "MySQL", "API REST"],
    tools: ["Git", "GitHub", "VS Code", "NPM", "Composer"],
    soft: language === 'es' 
      ? ["Gestión de Proyectos", "Trabajo en Equipo", "Liderazgo", "Comunicación", "Resolución de Problemas"]
      : ["Project Management", "Teamwork", "Leadership", "Communication", "Problem Solving"]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen">
        <div className="bg-blue-500 text-white p-8 m-4 rounded-lg">
          <h1 className="text-4xl font-bold">¡Tailwind v4 funciona!</h1>
          <p className="text-xl mt-4">Si ves esto con estilos, todo está bien ✅</p>
        </div>
      </div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Mariana <span className="text-purple-400">Budani</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {t.nav[item]}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'es' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <Code size={48} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.viewProjects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              {t.hero.contact}
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/marianabudani" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/mariana-budani-b58950151/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{t.about.personalInfo}</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-purple-400 mr-3" />
                    <span>{t.about.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Code size={20} className="text-purple-400 mr-3" />
                    <span>{t.about.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.experience.title}</h2>
          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.position}</h3>
                    <div className="flex items-center text-purple-400 mb-2">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <MapPin size={14} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.education.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.education.items.map((item, index) => (
              <div key={index} className="bg-gray-800/70 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap size={24} className="text-blue-400 mr-3" />
                  <span className="text-blue-400 font-medium">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
                <p className="text-purple-400 font-medium mb-3">{item.institution}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.skills.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{t.skills.categories.frontend}</h3>
              <ul className="space-y-2 text-gray-300">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{t.skills.categories.backend}</h3>
              <ul className="space-y-2 text-gray-300">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-green-400 mb-4">{t.skills.categories.tools}</h3>
              <ul className="space-y-2 text-gray-300">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">{t.skills.categories.soft}</h3>
              <ul className="space-y-2 text-gray-300">
                {(skills.soft || []).map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className="bg-gray-800/70 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "JavaScript", "CSS"].map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/marianabudani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-white transition-colors group"
                  >
                    <Github size={16} className="mr-2" />
                    {language === 'es' ? 'Ver código' : 'View code'}
                    <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/marianabudani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github size={20} className="mr-2" />
              {t.projects.viewAll}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">{t.contact.title}</h2>
          <p className="text-xl text-gray-300 mb-12">
            {t.contact.subtitle}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:marianabudani@example.com"
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <Mail size={32} className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">{t.contact.email}</h3>
              <p className="text-gray-400 text-sm">{t.contact.emailText}</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mariana-budani-b58950151/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <Linkedin size={32} className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">{t.contact.linkedin}</h3>
              <p className="text-gray-400 text-sm">{t.contact.linkedinText}</p>
            </a>
            
            <a 
              href="https://github.com/marianabudani"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <Github size={32} className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">{t.contact.github}</h3>
              <p className="text-gray-400 text-sm">{t.contact.githubText}</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-lg border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">{t.contact.cta.title}</h3>
            <p className="text-gray-300 mb-6">
              {t.contact.cta.description}
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              {t.contact.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;