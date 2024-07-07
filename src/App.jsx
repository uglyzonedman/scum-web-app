import { useEffect } from 'react'
import './App.css'
import monkey from './assets/1.png'
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
			<img src={monkey} />
		</div>
	)
}

export default App
