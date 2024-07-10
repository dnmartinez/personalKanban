import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Board from '../src/components/Board'
import Home from './pages/Home'
import StandardBoard from './pages/StandardBoard'
import CustomBoard from './pages/CustomBoard'
import '../src/styles/App.css'

function App() {
  return (
		<>
			<Router>
				<div className='bg-black'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/standard-kanban' element={<StandardBoard />} />
						<Route path='/custom-kanban' element={<CustomBoard />} />
						{/* <Route path='*' element={<NotFound />} /> */}
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
