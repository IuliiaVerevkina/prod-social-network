import {classNames} from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';
import {Link, type LinkProps} from 'react-router-dom';
import {type FC} from 'react';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	children?: React.ReactNode;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = props => {
	const {to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Link className={classNames(cls.AppLink, {}, [className!, cls[theme]])} to={to} {...otherProps}>
			{children}
		</Link>
	);
};
