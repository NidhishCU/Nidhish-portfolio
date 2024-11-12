import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Contact from '../../pages/Home/Contact/Contact';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const NotFound = React.lazy(() => import('../../pages/NotFound/NotFound'));

const NavigationStack = () => {
	return (
		<Suspense fallback={<FallbackComponent />}>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/home' element={<Navigate replace to='/' />} />
				<Route path='*' element={<NotFound />} />
				<Route exact path='/contact' element={<Contact/>} />
			</Routes>
		</Suspense>
	)
}

const FallbackComponent = () => {
	return (
		<div style={{
			position: "absolute",
			top: "0",
			width: "100%",
			marginTop: "5rem",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<LoadingSpinner />
		</div>
	)
}

export default NavigationStack;
