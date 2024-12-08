import { createI18n, LocaleMessageObject } from 'vue-i18n';
import es from './es.json';
import en from './en.json';

export interface I18nMessages {
  navbar: {
    brand: string;
    about: string;
    projects: string;
    skills: string;
    experiences: string;
    contact: string;
  };
  proyectos: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  skillsTitle: string;
  habilidades: Array<{
    title: string;
    description: string;
  }>;
  // Agregar más categorías de traducción si es necesario
}

const messages: Record<string, LocaleMessageObject> = {
  en: en, // Importa los datos del archivo en.json
  es: es, // Importa los datos del archivo es.json
};
const i18n = createI18n<I18nMessages>({
  locale: 'es', // idioma por defecto
  fallbackLocale: 'es', // en caso de que no se encuentre una traducción
  messages, // Mensajes traducidos de los archivos JSON
});

export default i18n;
