import { useTranslation } from 'react-i18next';
import './App.css'
import LangSelect from './containers/LangSelect/LangSelect';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <LangSelect />
      <h1>{t('title')}</h1>
    </>
  )
}

export default App
