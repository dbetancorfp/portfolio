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
      discover: "Learn More",
      contact:'Contact me',
    },
    about: {
      title: "About Me",
      content: "I am a passionate 22-year-old developer with a love of programming, who likes to work a lot as a team and above all learn.",
      skills: 'Skills',
      contact: 'Contact',
      projects: 'Projects',
      overlayText:'David Riccio',
    },
    skills: {
      title: "My Skills",
      content: "I specialize in frontend and backend technologies."
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
    },
    experience:{
      title:'My experience',
      first_title:'2 years in Front-End Development',
      first_content:'in projects with high impact in the industry',
      second_title:'Specialist in Vue.js',
      second_content:'Experts in dinamic web sites ',
      third_title:'Continuous support',
      third_content:'I offer you support and maintenance for your website',
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
      discover: "Descubre mas",
      contact:'Contactanos'
    },
    about: {
      title: "Sobre Mí",
      content: "Soy un desarrollador de 22 años apasionado con amor por la programación, que le gusta trabajar mucho en equipo y sobre todo aprender.",
      skills: 'Habilidades',
      contact: 'Contáctame',
      projects: 'Proyectos',
      overlayText:'David Riccio',
    },
    skills: {
      title: "Mis Habilidades",
      content: "Me especializo en tecnologías frontend y backend.",
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
  ,
  experience:{
    title:'Mi experiencia',
    first_title:'2 años en Desarrollo en Front',
    first_content:'En proyectos de alto impacto para la industria',
    second_title:'Especialista en Vue.js',
    second_content:'Expero en realizar sitios web dinamicos y escalables.',
    third_title:'Soporte continuo',
    third_content:'Te ofrezco soporte y mantenenimiento para tu sitio web ',  
   }
}
}
;

const i18n = createI18n({
  legacy: false, 
  locale: savedLocale, 
  messages,
});

export default i18n;