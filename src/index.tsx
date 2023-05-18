import ReactDOM from 'react-dom/client'
import GuestList from './state/GuestList'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<div>
		<GuestList />
	</div>
)
