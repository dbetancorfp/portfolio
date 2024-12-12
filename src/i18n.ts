// src/i18n.ts
import { createI18n } from 'vue-i18n';

const savedLocale = localStorage.getItem('locale') || 'es'; // Lee el idioma del localStorage (por defecto 'es')

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      contact: "Contact",
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
      contact: 'Contact'
    },
    skills: {
      title: "My Skills",
      content: "I specialize in frontend and backend technologies.",
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
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      contact: "Contacto",
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
      contact: 'Contactame'
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
  },
};

const i18n = createI18n({
  legacy: false, 
  locale: savedLocale, 
  messages,
});

export default i18n;