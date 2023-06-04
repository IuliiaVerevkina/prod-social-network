
import {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/RouteConfig';

const AppRouter = () => (
	<div className='app-page-wrapper'>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(
					({path, element}) => (
						<Route
							key={path}
							path={path}
							element={element}
						/>
					),
				)}
			</Routes>
		</Suspense>
	</div>
);

export default AppRouter;
