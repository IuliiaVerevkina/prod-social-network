/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
declare module '*.png';
declare module '*.jpg';

declare const __IS_DEV__: boolean;
