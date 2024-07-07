import { useEffect, useState } from 'react'
import './App.css'
import monkey from './assets/1.png'

function App() {
	const [count, setCount] = useState(0)
	const [touchStarted, setTouchStarted] = useState(false)

	useEffect(() => {
		if (window.Telegram.WebApp) {
			window.Telegram.WebApp.expand()
		}
	}, [])

	const handleTouchMove = () => {
		if (!touchStarted) {
			setCount(state => state + 1)
			setTouchStarted(true)
		}
	}

	const handleTouchEnd = () => {
		setTouchStarted(false)
	}

	return (
		<div className='app'>
			<h3>{count}</h3>
			<button
				className='app-button'
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onClick={() => {
					setCount(state => state + 1)
				}}
			>
				<img src={monkey} alt='monkey' />
			</button>
		</div>
	)
}

export default App
