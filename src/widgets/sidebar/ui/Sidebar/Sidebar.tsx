import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/themeSwitcher';
import {LengSwitcher} from 'widgets/lengSwitcher';
import {Button} from 'shared/ui/button/Button';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollabsed] = useState(false);
	const onToggle = () => {
		setCollabsed(prev => !prev);
	};

	return (
		<div
			className={classNames(
				cls.Sidebar,
				{[cls.collapsed]: collapsed},
				[className!],
			)}
		>
			<Button onClick={onToggle}>toggle</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LengSwitcher/>
			</div>
		</div>
	);
};
