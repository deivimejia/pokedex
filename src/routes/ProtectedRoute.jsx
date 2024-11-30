import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useNameContext } from '../context/nameContext';

function ProtectedRoute({ children }) {
	const [name] = useNameContext();
	if (!name) {
		return <Navigate to="/" />;
	}
	return children ? children : <Outlet />;
}

export default ProtectedRoute;
