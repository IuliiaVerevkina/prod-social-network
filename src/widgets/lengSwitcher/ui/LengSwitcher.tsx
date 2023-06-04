import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LengSwitcher.module.scss';
import {Button, ThemeButton} from 'shared/ui/button/Button';

type LengSwitcherProps = {
	className: string;
};

export const LengSwitcher = ({className}: LengSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggle = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

	return (
		<Button
			className={classNames(cls.LengSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('Language')}
		</Button>
	);
};
