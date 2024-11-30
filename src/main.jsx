import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { HashRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { NameProvider } from './context/nameContext';

createRoot(document.getElementById('root')).render(
	//<StrictMode>
	<NameProvider>
		<HashRouter>
			<AppRouter />
		</HashRouter>
	</NameProvider>,
	//</StrictMode>,
);
