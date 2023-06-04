import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {type ButtonHTMLAttributes, type FC} from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}
type ButtonProps = {
	className: string;
	theme: ThemeButton;
	children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
	const {className, children, theme, ...otherProps} = props;
	return (
		<button
			type='button'
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</button>
	);
};
