import { useEffect, useState } from 'react'
import './App.css'
import monkey from './assets/1.png'
import money from './assets/money.png'
function App() {
	const [count, setCount] = useState(0)
	const [touchStarted, setTouchStarted] = useState(false)
	const levelUp = 10000
	useEffect(() => {
		if (window.Telegram.WebApp) {
			window.Telegram.WebApp.expand()
		}
	}, [])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount(state => state + 1)
		}, 1000)

		return () => clearInterval(intervalId)
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
	const progress = Math.min((count / levelUp) * 100, 100)
	return (
		<div className='app'>
			<div className='app-container'>
				<div className='app-content'>
					<div className='app-money'>
						<img src={money} alt='money' />
						<span className='app-money__text'>{count}</span>
					</div>
					<div
						className='app-bar'
						style={{ width: `${progress}%`, background: '#fff' }}
					></div>
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
			</div>
		</div>
	)
}

export default App
