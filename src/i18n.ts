import { createI18n } from 'vue-i18n';

const savedLocale = localStorage.getItem('locale') || 'es'; 

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      contact: "Contact",
      projects: "Projects",
      experience: 'Experience'
    },
    home: {
      title: "Welcome to My Portfolio",
      description: "This is where you can find my skills and learn more about me.",
      learnMore: "Learn More"
    },
    about: {
      title: "About Me",
      content: "I am a passionate 22-year-old developer with a love of programming, who likes to work a lot as a team and above all learn.",
      skills: 'Skills',
      contact: 'Contact',
      projects: 'Projects'
    },
    skills: {
      title: "My Skills",
      content: "I specialize in frontend and backend technologies.",
      skillList: [
        {
          name: "JavaScript",
          description: "Front-end development"
        },
        {
          name: "Python",
          description: "Coding Language"
        },
        {
          name: "TypeScript",
          description: "Backend development"
        },
        {
          name: "HTML",
          description: "Markup Language"
        },
        {
          name: "Django",
          description: "Back-end development"
        },
        {
          name: "Vue",
          description: "Front-end development"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      success: "Form submitted successfully.",
      error: "Error submitting the form. Please try again.",
    },
    projects: {
      title: 'Projects',
      content: 'These are my projects',
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      contact: "Contacto",
      projects: "Proyectos",
      experience: 'Experiencia'
    },
    home: {
      title: "Bienvenido a Mi Portfolio",
      description: "Aquí es donde podrás encontrar mis habilidades y aprender más sobre mí.",
      learnMore: "Saber más"
    },
    about: {
      title: "Sobre Mí",
      content: "Soy un desarrollador de 22 años apasionado con amor por la programación, que le gusta trabajar mucho en equipo y sobre todo aprender.",
      skills: 'Habilidades',
      contact: 'Contáctame',
      projects: 'Proyectos'
    },
    skills: {
      title: "Mis Habilidades",
      content: "Me especializo en tecnologías frontend y backend.",
      skillList: [
        {
          name: "JavaScript",
          description: "Desarrollo Front-end"
        },
        {
          name: "Python",
          description: "Lenguaje de programación"
        },
        {
          name: "TypeScript",
          description: "Desarrollo Backend"
        },
        {
          name: "HTML",
          description: "Lenguaje de marcado"
        },
        {
          name: "Django",
          description: "Desarrollo Back-end"
        },
        {
          name: "Vue",
          description: "Desarrollo Front-end"
        }
      ]
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      submit: "Enviar",
      success: "Formulario enviado con éxito.",
      error: "Error al enviar el formulario. Por favor, inténtalo de nuevo.",
    },
    projects: {
      title: 'Proyectos',
      content: 'Estos son mis proyectos'
    }
  },
};

const i18n = createI18n({
  legacy: false, 
  locale: savedLocale, 
  messages,
});

export default i18n;