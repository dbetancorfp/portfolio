import { createI18n } from 'vue-i18n';
const loadLocaleMessages = async () => {
  const locales = ['en', 'es']; 
  const messages: Record<string, any> = {};

  for (const locale of locales) {
    const messagesModule = await import(`./locales/${locale}.json`);
    messages[locale] = messagesModule.default;
  }

  return messages;
};

const i18n = createI18n({
  legacy: false,  
  locale: 'es', 
  fallbackLocale: 'es',
  messages: {}, 
});

loadLocaleMessages().then((messages) => {
  i18n.global.setLocaleMessage('en', messages.en);
  i18n.global.setLocaleMessage('es', messages.es);
});

export default i18n;
