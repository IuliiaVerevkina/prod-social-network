import {useTranslation} from 'react-i18next';

const AboutPage = () => {
	const {t} = useTranslation('about');
	return <div>{t('ABOUT PAGE')}
		<p>{t('mama')}</p></div>;
};

export default AboutPage;
