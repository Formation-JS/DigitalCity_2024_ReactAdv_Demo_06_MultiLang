import { useTranslation } from 'react-i18next';
import { LANGAGUES } from '../../constants/lang.constant';

const LangSelect = () => {

    const { i18n } = useTranslation();

    const handleChangeLang = (e :React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        i18n.changeLanguage(code);
    };

    return (
        <select defaultValue={i18n.language} onChange={handleChangeLang}>
            {LANGAGUES.map(
                lang => <option key={lang.code} value={lang.code}>{lang.label}</option>
            )}
        </select>
    )
};

export default LangSelect;