import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navbar: {
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      switchToSpanish: 'Switch to Spanish',
    },
  },
  es: {
    navbar: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      switchToEnglish: 'Cambiar a Inglés',
    },
  },
};

const i18n = createI18n({
  locale: 'es', // idioma predeterminado
  messages,
});

export default i18n;