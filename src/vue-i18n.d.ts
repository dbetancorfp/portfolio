import { I18n } from 'vue-i18n';

declare module 'vue-i18n' {
    export interface I18n {
        locale: 'es' | 'en';
        messages: {
            en: {
                navbar: {
                    about: string;
                    projects: string;
                    skills: string;
                    experience: string;
                    contact: string;
                    switchToSpanish: string;
                };
            };
            es: {
                navbar: {
                    about: string;
                    projects: string;
                    skills: string;
                    experience: string;
                    contact: string;
                    switchToEnglish: string;
                };
            };
        };
    }
}
