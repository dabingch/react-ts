import ReactDOM from 'react-dom/client'
// import GuestList from './state/GuestList'
// import UserSearch from './state/UserSearch'
// import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<div>
		<UserSearch />
	</div>
)
