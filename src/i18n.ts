import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React le fait déjà
        },
        resources: {
            en: {
                translation: {
                    title: 'Hello World',
                    desc: 'This is a demo'
                }
            },
            fr: {
                translation: {
                    title: 'Bonjour le monde',
                    desc: 'Ceci est un démo'
                }
            }
        }
    });



export default i18n;