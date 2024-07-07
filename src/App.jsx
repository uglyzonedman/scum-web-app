import { useEffect } from 'react'
import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	useEffect(() => {
		if (window.Telegram.WebApp) {
			window.Telegram.WebApp.expand()
		}
	}, [])

	return (
		<div className='app'>
			<h3>0</h3>
			<img src='../src/assets/1.png' />
		</div>
	)
}

export default App
