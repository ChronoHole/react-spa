import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import UserListContainer from './components/user-list/user-list-container/user-list-container'
import UserProfileContainer from './components/user-profile/user-profile-container/user-profile-container'
import './App.scss'
import Loader from './layouts/loader/loader.'
import PageNotFound from './pages/not-found'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useUsersActions } from './hooks/useActions'
import Sidebar from './layouts/sidebar/sidebar'

function App() {
	const { loading, error } = useTypedSelector(state => state.users)
	const { fetchUsers } = useUsersActions()

	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div className='App'>
			{/* <Sidebar /> */}
			<Routes>
				<Route path='/' element={<UserListContainer />} />
				<Route path='profile/:id' element={<UserProfileContainer />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	)
}

export default App
