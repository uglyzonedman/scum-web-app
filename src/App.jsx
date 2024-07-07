import { useEffect, useState } from 'react'
import './App.css'
import monkey from './assets/1.png'
function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (window.Telegram.WebApp) {
			window.Telegram.WebApp.expand()
		}
	}, [])

	return (
		<div className='app'>
			<h3>{count}</h3>
			<button
				className='app-button'
				onClick={() => {
					setCount(state => state + 1)
				}}
			>
				<img src={monkey} />
			</button>
		</div>
	)
}

export default App
