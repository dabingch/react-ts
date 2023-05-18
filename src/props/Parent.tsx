import { ChildAsFC } from './Child'

function Parent() {
	return (
		<ChildAsFC
			color='red'
			onClick={() => console.log('Click!!')}
		></ChildAsFC>
	)
}

export default Parent
