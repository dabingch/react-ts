import { useState } from 'react'

const GuestList: React.FC = () => {
	const [name, setName] = useState('')
	const [guests, setGuests] = useState<string[]>([])

	const onClick = () => {
		setName('')
		setGuests([...guests, name])
	}

	const renderedGuests = guests.map((guest) => {
		return <li key={guest}>{guest}</li>
	})

	return (
		<div>
			<h3>GuestList</h3>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Add Guest</button>
			<div>
				<ul>{renderedGuests}</ul>
			</div>
		</div>
	)
}

export default GuestList
