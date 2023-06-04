import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {type BuildOptions} from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProgressPlugin(),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
}
