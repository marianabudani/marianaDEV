import React, { useState, useEffect } from 'react';
import { 
  Navbar, Nav, Container, Button, Row, Col, 
  Card, Badge, ListGroup, Alert, Modal, Carousel
} from 'react-bootstrap';
import { 
  Github, Linkedin, Mail, MapPin, Phone, Code, 
  ExternalLink, Download, ChevronDown, Calendar, 
  Building, GraduationCap, Award, Heart, Star
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

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
        text1: 'Soy Desarrolladora Full-Stack con una sólida transición hacia el desarrollo web. Mi experiencia única combinando gestión de equipos con desarrollo técnico me permite aportar una perspectiva integral a los proyectos.',
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
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
            details: 'Trabajo en el desarrollo y mantenimiento de sistemas web para la administración pública, implementando soluciones eficientes y escalables.'
          },
          {
            company: 'Tupperware SRL',
            position: 'Desarrolladora Web',
            period: 'Período anterior - Enero 2025',
            location: 'Buenos Aires, Argentina',
            description: 'Desarrollo de soluciones web, mantenimiento de aplicaciones y colaboración en proyectos de e-commerce.',
            technologies: ['JavaScript', 'React', 'HTML', 'CSS'],
            details: 'Participé en el desarrollo de aplicaciones web modernas utilizando React, mejorando la experiencia de usuario y optimizando el rendimiento.'
          },
          {
            company: 'Ministerio de las mujeres, genero y diversidad',
            position: 'Desarrollo Web',
            period: 'Experiencia previa',
            location: 'Buenos Aires, Argentina',
            description: 'Desarrollo web, coordinación de procesos y manejo de sistemas internos.',
            technologies: ['Gestión', 'Processos', 'Coordinación'],
            details: 'Responsable de proyectos y coordinación de procesos internos, desarrollando habilidades de organización y liderazgo.'
          }
        ]
      },
      education: {
        title: 'Educación y Certificaciones',
        items: [
          {
            institution: 'Terciario',
            degree: 'Tecnicatura en Testeo de Videojuegos',
            year: 'Título terciario',
            description: 'Formación integral en gestión documental y testeo de videojuegos.'
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
          },
          {
            institution: 'CoderHouse',
            degree: 'Cloud Computing',
            year: '2025',
            description: 'Implementación y gestión de servicios en la nube, optimizando recursos, seguridad y escalabilidad para proyectos de cualquier tamaño.'
          },
          {
            institution: 'CoderHouse',
            degree: 'Javascript',
            year: '2024',
            description: 'Interactividad en los proyectos, manipulación del DOM, programación de eventos y construcción de funcionalidades dinámicas para la web.'
          },
          {
            institution: 'CoderHouse',
            degree: 'Programacion backend con Node.js',
            year: '2024',
            description: 'Diseño de arquitecturas de backend escalables y eficientes. Estructuración de proyectos, implementación patrones de diseño y optimización de la comunicación entre servicios para proyectos robustos y mantenibles.'
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
            type: "E-commerce",
            details: "Este proyecto fue desarrollado como trabajo final del curso de React en CoderHouse. Implementa un sistema completo de e-commerce con funcionalidades avanzadas como filtrado de productos, carrito de compras persistente y proceso de checkout.",
            technologies: ["React", "JavaScript", "CSS", "Firebase"],
            githubUrl: "https://github.com/marianabudani/tienda-esoterica",
            demoUrl: "https://tienda-esoterica.netlify.app"
          },
          {
            name: "Laboratorio Umbrella", 
            description: "Aplicación web completa para gestión de laboratorio con interfaz intuitiva y manejo de datos en tiempo real.",
            type: "Web App",
            details: "Sistema de gestión para laboratorio que permite administrar pacientes, muestras y resultados. Desarrollado con React en el frontend y Node.js en el backend.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            githubUrl: "https://github.com/marianabudani/laboratorio-umbrella",
            demoUrl: "https://laboratorio-umbrella.vercel.app"
          },
          {
            name: "Trabajo Final React",
            description: "Proyecto final del curso de React en CoderHouse, demostrando dominio completo del framework y mejores prácticas.",
            type: "React App",
            details: "Aplicación que muestra el dominio de React, incluyendo hooks, context API, routing y consumo de APIs. Diseño responsive y optimizado para SEO.",
            technologies: ["React", "React Router", "Context API", "CSS Modules"],
            githubUrl: "https://github.com/marianabudani/react-final-project",
            demoUrl: "https://react-final-project-mb.vercel.app"
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
        description: 'Specialized in PHP Laravel, JavaScript and React. With experience in team lead and web development, seeking remote opportunities to contribute to innovative teams.',
        viewProjects: 'View Projects',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        text1: 'I am a Team Leader with a solid transition into web development. My unique experience combining administrative management with technical development allows me to bring a comprehensive perspective to projects.',
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
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
            details: 'Working on the development and maintenance of web systems for public administration, implementing efficient and scalable solutions.'
          },
          {
            company: 'Tupperware SRL',
            position: 'Web Developer',
            period: 'Previous Period - January 2025',
            location: 'Buenos Aires, Argentina',
            description: 'Web solutions development, application maintenance and collaboration on e-commerce projects.',
            technologies: ['JavaScript', 'React', 'HTML', 'CSS'],
            details: 'Participated in the development of modern web applications using React, improving user experience and optimizing performance.'
          },
          {
            company: 'Ministry of Women, Gender and Diversity',
            position: 'Web Development',
            period: 'Previous Experience',
            location: 'Buenos Aires, Argentina',
            description: 'Web development, process coordination and internal systems management.',
            technologies: ['Management', 'Processes', 'Coordination'],
            details: 'Responsible of proyects, management and coordination of internal processes, developing organizational and leadership skills.'
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
            type: "E-commerce",
            details: "This project was developed as the final work for the React course at CoderHouse. It implements a complete e-commerce system with advanced features such as product filtering, persistent shopping cart and checkout process.",
            technologies: ["React", "JavaScript", "CSS", "Firebase"],
            githubUrl: "https://github.com/marianabudani/esoteric-store",
            demoUrl: "https://esoteric-store.netlify.app"
          },
          {
            name: "Umbrella Laboratory",
            description: "Complete web application for laboratory management with intuitive interface and real-time data handling.",
            type: "Web App",
            details: "Management system for laboratories that allows managing patients, samples and results. Developed with React on the frontend and Node.js on the backend.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            githubUrl: "https://github.com/marianabudani/umbrella-laboratory",
            demoUrl: "https://umbrella-laboratory.vercel.app"
          },
          {
            name: "React Final Project",
            description: "Final project for React course at CoderHouse, demonstrating complete framework mastery and best practices.",
            type: "React App",
            details: "Application that demonstrates mastery of React, including hooks, context API, routing and API consumption. Responsive design and optimized for SEO.",
            technologies: ["React", "React Router", "Context API", "CSS Modules"],
            githubUrl: "https://github.com/marianabudani/react-final-project",
            demoUrl: "https://react-final-project-mb.vercel.app"
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
          description: 'With experience in administration and web development, I bring a unique perspective combining management and technology for successful projects.',
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
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      {/* Navigation */}
      <Navbar 
        bg={isScrolled ? (darkMode ? "dark" : "light") : "transparent"} 
        variant={darkMode ? "dark" : "light"} 
        expand="md" 
        fixed="top" 
        className={isScrolled ? "shadow py-2" : "py-3"}
        style={!isScrolled ? {background: 'transparent'} : {}}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            <Code size={24} className="text-purple me-2" />
            Mariana <span className="text-purple">Budani</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <Nav.Link
                  key={item}
                  onClick={() => scrollToSection(item)}
                  active={activeSection === item}
                  className={activeSection === item ? "text-purple fw-bold" : (darkMode ? "text-light" : "text-dark")}
                >
                  {t.nav[item]}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center">
              <Button
                variant="outline-purple"
                size="sm"
                className="me-2"
                onClick={toggleDarkMode}
              >
                {darkMode ? '☀️' : '🌙'}
              </Button>
              <Button
                variant={language === 'es' ? "purple" : "outline-purple"}
                size="sm"
                className="me-2"
                onClick={() => setLanguage('es')}
              >
                ES
              </Button>
              <Button
                variant={language === 'en' ? "purple" : "outline-purple"}
                size="sm"
                onClick={() => setLanguage('en')}
              >
                EN
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} className="animate-fade-in">
              <div className="mb-4">
                <div className="spinning-icon">
                  <Code size={64} className="text-purple" />
                </div>
              </div>
              <h1 className="display-3 fw-bold mb-3">{t.hero.title}</h1>
              <p className="lead text-purple mb-4">{t.hero.subtitle}</p>
              <p className="mb-4">{t.hero.description}</p>
              <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <Button 
                  variant="purple" 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="d-flex align-items-center"
                >
                  <Star size={20} className="me-2" />
                  {t.hero.viewProjects}
                </Button>
                <Button 
                  variant="outline-purple" 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="d-flex align-items-center"
                >
                  <Mail size={20} className="me-2" />
                  {t.hero.contact}
                </Button>
              </div>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <a 
                  href="https://github.com/marianabudani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Github size={28} className={darkMode ? "text-light" : "text-dark"} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mariana-budani-b58950151/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Linkedin size={28} className={darkMode ? "text-light" : "text-dark"} />
                </a>
              </div>
              <div className="mt-5">
                <Button 
                  variant="outline-purple" 
                  onClick={() => scrollToSection('about')}
                  className="scroll-indicator"
                >
                  <ChevronDown size={24} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)' 
            : 'linear-gradient(135deg, #dee2e6 0%, #e9ecef 50%, #f8f9fa 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.about.title}
          </h2>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className={darkMode ? "text-light" : "text-dark"}>
                <p className="mb-3">{t.about.text1}</p>
                <p className="mb-3">{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>
              {modalContent?.type === 'resume' && (
                <div className="text-center">
                  <p>{language === 'es' ? 'Descarga mi currículum en formato PDF' : 'Download my resume in PDF format'}</p>
                  <a
                    href={language === 'es' ? '/cv_es.pdf' : '/cv_en.pdf'}
                    download
                    className="btn btn-purple d-flex align-items-center mx-auto"
                  >
                    <Download size={18} className="me-2" />
                    {language === 'es' ? 'Descargar CV' : 'Download Resume'}
                  </a>
                </div>
              )}

            </Col>
            <Col lg={6}>
              <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="h-100 border-purple shadow">
                <Card.Body>
                  <Card.Title className="text-purple mb-4">
                    <span className="section-icon">💼</span> {t.about.personalInfo}
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    <ListGroup.Item className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                      <MapPin size={20} className="text-purple me-3" />
                      <span>{t.about.location}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                      <Code size={20} className="text-purple me-3" />
                      <span>{t.about.role}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                      <Mail size={20} className="text-purple me-3" />
                      <span>marianabudani@example.com</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.experience.title}
          </h2>
          <div className="d-grid gap-4">
            {t.experience.jobs.map((job, index) => (
              <Card 
                key={index} 
                bg={darkMode ? "dark" : "light"} 
                text={darkMode ? "light" : "dark"} 
                className="border-purple shadow experience-card"
                onClick={() => openModal({type: 'experience', content: job})}
              >
                <Card.Body>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                    <div>
                      <Card.Title className="text-purple">{job.position}</Card.Title>
                      <div className="d-flex align-items-center text-purple mb-2">
                        <Building size={16} className="me-2" />
                        <span className="fw-medium">{job.company}</span>
                      </div>
                      <div className="d-flex align-items-center text-white small mb-2">
                        <MapPin size={14} className="me-2" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-white small mt-2 mt-md-0">
                      <Calendar size={16} className="me-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <Card.Text className="text-white mb-3">{job.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} bg="purple" className="px-3 py-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-end mt-3">
                    <Button variant="outline-purple" size="sm">
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)' 
            : 'linear-gradient(135deg, #dee2e6 0%, #e9ecef 50%, #f8f9fa 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.education.title}
          </h2>
          <Row>
            {t.education.items.map((item, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card 
                  bg={darkMode ? "dark" : "light"} 
                  text={darkMode ? "light" : "dark"} 
                  className="h-100 border-purple shadow education-card"
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <GraduationCap size={24} className="text-info me-3" />
                      <span className="text-info fw-medium">{item.year}</span>
                    </div>
                    <Card.Title className={darkMode ? "text-light" : "text-dark"}>{item.degree}</Card.Title>
                    <Card.Subtitle className="text-purple mb-3">{item.institution}</Card.Subtitle>
                    <Card.Text className={darkMode ? "text-light" : "text-dark"}>{item.description}</Card.Text>
                    <div className="mt-3">
                      <Badge bg="purple" className="px-2 py-1">
                        {language === 'es' ? 'Certificado' : 'Certificate'}
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.skills.title}
          </h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="h-100 border-purple shadow">
                <Card.Body>
                  <Card.Title className="text-purple mb-4">
                    <span className="section-icon">⚛️</span> {t.skills.categories.frontend}
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    {skills.frontend.map((skill, index) => (
                      <ListGroup.Item key={index} className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                        <div className="bg-purple rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                        {skill}
                        {skill === 'React' && <span className="ms-2">⭐</span>}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="h-100 border-purple shadow">
                <Card.Body>
                  <Card.Title className="text-info mb-4">
                    <span className="section-icon">🔧</span> {t.skills.categories.backend}
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    {skills.backend.map((skill, index) => (
                      <ListGroup.Item key={index} className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                        <div className="bg-info rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                        {skill}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="h-100 border-purple shadow">
                <Card.Body>
                  <Card.Title className="text-success mb-4">
                    <span className="section-icon">🛠️</span> {t.skills.categories.tools}
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    {skills.tools.map((skill, index) => (
                      <ListGroup.Item key={index} className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                        <div className="bg-success rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                        {skill}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="h-100 border-purple shadow">
                <Card.Body>
                  <Card.Title className="text-warning mb-4">
                    <span className="section-icon">🌟</span> {t.skills.categories.soft}
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    {skills.soft.map((skill, index) => (
                      <ListGroup.Item key={index} className={`bg-transparent ${darkMode ? 'text-light' : 'text-dark'} border-secondary d-flex align-items-center`}>
                        <div className="bg-warning rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                        {skill}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)' 
            : 'linear-gradient(135deg, #dee2e6 0%, #e9ecef 50%, #f8f9fa 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.projects.title}
          </h2>
          <Row>
            {t.projects.items.map((project, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card 
                  bg={darkMode ? "dark" : "light"} 
                  text={darkMode ? "light" : "dark"} 
                  className="h-100 border-purple shadow project-card"
                  onClick={() => openModal({type: 'project', content: project})}
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Card.Title className="text-purple">{project.name}</Card.Title>
                      <Badge bg="purple" className="px-2 py-1">
                        {project.type}
                      </Badge>
                    </div>
                    <Card.Text className="text-white small mb-3 flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} bg="secondary" className="px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="secondary" className="px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-purple text-decoration-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} className="me-1" />
                        {language === 'es' ? 'Código' : 'Code'}
                      </a>
                      <Button variant="outline-purple" size="sm">
                        {language === 'es' ? 'Ver demo' : 'View demo'}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-4">
            <a 
              href="https://github.com/marianabudani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-purple d-inline-flex align-items-center"
            >
              <Github size={20} className="me-2" />
              {t.projects.viewAll}
            </a>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-5"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
        }}
      >
        <Container>
          <h2 className="text-center mb-5 section-title">
            <span className="text-purple">#</span> {t.contact.title}
          </h2>
          <p className="text-center lead mb-5">
            {t.contact.subtitle}
          </p>
          
          <Row className="mb-5">
            <Col md={4} className="mb-4">
              <Card 
                bg={darkMode ? "dark" : "light"} 
                text={darkMode ? "light" : "dark"} 
                className="h-100 border-purple shadow text-center contact-card"
              >
                <Card.Body>
                  <Mail size={32} className="text-purple mb-3 mx-auto" />
                  <Card.Title>{t.contact.email}</Card.Title>
                  <Card.Text className="text-white small">{t.contact.emailText}</Card.Text>
                  <Button variant="purple" size="sm">
                    {language === 'es' ? 'Enviar email' : 'Send email'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card 
                bg={darkMode ? "dark" : "light"} 
                text={darkMode ? "light" : "dark"} 
                className="h-100 border-purple shadow text-center contact-card"
              >
                <Card.Body>
                  <Linkedin size={32} className="text-info mb-3 mx-auto" />
                  <Card.Title>{t.contact.linkedin}</Card.Title>
                  <Card.Text className="text-white small">{t.contact.linkedinText}</Card.Text>
                  <Button variant="purple" size="sm">
                    {language === 'es' ? 'Conectar' : 'Connect'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card 
                bg={darkMode ? "dark" : "light"} 
                text={darkMode ? "light" : "dark"} 
                className="h-100 border-purple shadow text-center contact-card"
              >
                <Card.Body>
                  <Github size={32} className="text-secondary mb-3 mx-auto" />
                  <Card.Title>{t.contact.github}</Card.Title>
                  <Card.Text className="text-white small">{t.contact.githubText}</Card.Text>
                  <Button variant="purple" size="sm">
                    {language === 'es' ? 'Ver perfil' : 'View profile'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Alert variant="purple" className="text-center border-purple shadow">
            <Alert.Heading>{t.contact.cta.title}</Alert.Heading>
            <p className="mb-3">
              {t.contact.cta.description}
            </p>
            <Button variant="purple" size="lg" className="d-flex align-items-center mx-auto">
              <Mail size={20} className="me-2" />
              {t.contact.cta.button}
            </Button>
          </Alert>
        </Container>
      </section>

      {/* Footer */}
      <footer className={`py-4 ${darkMode ? 'bg-dark' : 'bg-light'} border-top border-purple`}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">
                {t.footer}
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="https://github.com/marianabudani" target="_blank" rel="noopener noreferrer" className="text-purple">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mariana-budani-b58950151/" target="_blank" rel="noopener noreferrer" className="text-purple">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mariana.budani@gmail.com" className="text-purple">
                  <Mail size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Modal for details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
          <Modal.Title>
            {modalContent?.type === 'project' ? (
              <>{modalContent.content.name} <Badge bg="purple">{modalContent.content.type}</Badge></>
            ) : modalContent?.type === 'experience' ? (
              <>{modalContent.content.position} - {modalContent.content.company}</>
            ) : (
              <>{language === 'es' ? 'Currículum' : 'Resume'}</>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
          {modalContent?.type === 'project' && (
            <div>
              <p>{modalContent.content.details}</p>
              <h6 className="text-purple">{language === 'es' ? 'Tecnologías utilizadas' : 'Technologies used'}:</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {modalContent.content.technologies.map((tech, index) => (
                  <Badge key={index} bg="purple">{tech}</Badge>
                ))}
              </div>
              <div className="d-flex gap-2">
                <Button variant="purple" href={modalContent.content.githubUrl} target="_blank" className="d-flex align-items-center">
                  <Github size={16} className="me-1" /> GitHub
                </Button>
                <Button variant="outline-purple" href={modalContent.content.demoUrl} target="_blank" className="d-flex align-items-center">
                  <ExternalLink size={16} className="me-1" /> {language === 'es' ? 'Ver demo' : 'View demo'}
                </Button>
              </div>
            </div>
          )}
          {modalContent?.type === 'experience' && (
            <div>
              <p>{modalContent.content.details}</p>
              <h6 className="text-purple">{language === 'es' ? 'Período' : 'Period'}:</h6>
              <p>{modalContent.content.period}</p>
              <h6 className="text-purple">{language === 'es' ? 'Ubicación' : 'Location'}:</h6>
              <p>{modalContent.content.location}</p>
              <h6 className="text-purple">{language === 'es' ? 'Tecnologías' : 'Technologies'}:</h6>
              <div className="d-flex flex-wrap gap-2">
                {modalContent.content.technologies.map((tech, index) => (
                  <Badge key={index} bg="purple">{tech}</Badge>
                ))}
              </div>
            </div>
          )}
          {modalContent?.type === 'resume' && (
            <div className="text-center">
              <p>{language === 'es' ? 'Descarga mi currículum en formato PDF' : 'Download my resume in PDF format'}</p>
              <Button variant="purple" className="d-flex align-items-center mx-auto">
                <Download size={18} className="me-2" />
                {language === 'es' ? 'Descargar CV' : 'Download Resume'}
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <style>{`
        :root {
          --purple: #6f42c1;
          --purple-light: #8c68cd;
          --purple-dark: #59359a;
        }
        
        .btn-purple {
          background-color: var(--purple);
          border-color: var(--purple);
          color: white;
        }
        
        .btn-purple:hover {
          background-color: var(--purple-dark);
          border-color: var(--purple-dark);
          color: white;
        }
        
        .btn-outline-purple {
          color: var(--purple);
          border-color: var(--purple);
        }
        
        .btn-outline-purple:hover {
          background-color: var(--purple);
          border-color: var(--purple);
          color: white;
        }
        
        .text-purple {
          color: var(--purple) !important;
        }
        
        .border-purple {
          border-color: var(--purple) !important;
        }
        
        .bg-purple {
          background-color: var(--purple) !important;
        }
        
        .alert-purple {
          background-color: rgba(111, 66, 193, 0.2);
          border-color: var(--purple);
          color: var(--purple);
        }
        
        .spinning-icon {
          animation: spin 4s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: var(--purple);
        }
        
        .social-icon {
          transition: transform 0.3s;
        }
        
        .social-icon:hover {
          transform: translateY(-5px);
        }
        
        .experience-card, .project-card, .education-card, .contact-card {
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        
        .experience-card:hover, .project-card:hover, .education-card:hover, .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        
        .section-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;